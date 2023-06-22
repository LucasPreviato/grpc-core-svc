import { Controller } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  COMPANY_SERVICE_NAME,
  CreateCompanyResponse,
  GetCompanyResponse,
} from 'src/core/core.pb';
import {
  CreateCompanyRequestDto,
  GetCompanyRequestDto,
} from '../dtos/company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly service: CompanyService) {}
  @GrpcMethod(COMPANY_SERVICE_NAME, 'GetCompany')
  private async getCompany(
    data: GetCompanyRequestDto,
  ): Promise<GetCompanyResponse> {
    return await this.service.getCompany(data);
  }

  @GrpcMethod(COMPANY_SERVICE_NAME, 'CreateCompany')
  private async createCompany(
    data: CreateCompanyRequestDto,
  ): Promise<CreateCompanyResponse> {
    return await this.service.createCompany(data);
  }
}
