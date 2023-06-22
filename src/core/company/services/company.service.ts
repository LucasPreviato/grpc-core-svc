import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateCompanyRequestDto,
  GetCompanyRequestDto,
} from '../dtos/company.dto';
import { Company } from '../entities/company.entity';
import { CreateCompanyResponse, GetCompanyResponse } from 'src/core/core.pb';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  public async createCompany(
    payload: CreateCompanyRequestDto,
  ): Promise<CreateCompanyResponse> {
    const company: Company = new Company();
    company.cnpj = payload.cnpj;
    company.companyName = payload.companyName;
    company.tradingName = payload.tradingName;
    company.address = payload.address;
    company.city = payload.city;
    company.state = payload.state;
    company.zipCode = payload.zipCode;
    company.country = payload.country;
    company.phone = payload.phone;
    company.email = payload.email;
    company.website = payload.website;

    await this.prisma.company.create({
      data: {
        ...company,
      },
    });
    return {
      status: HttpStatus.CREATED,
      errors: null,
      company: company,
    };
  }

  public async getCompany({
    companyId,
  }: GetCompanyRequestDto): Promise<GetCompanyResponse> {
    const company: Company = await this.prisma.company.findUnique({
      where: {
        companyId: companyId,
      },
    });
    if (!company) {
      return {
        status: HttpStatus.NOT_FOUND,
        errors: ['Company not found'],
        company: null,
      };
    }
    return {
      status: HttpStatus.OK,
      errors: null,
      company: company,
    };
  }
}
