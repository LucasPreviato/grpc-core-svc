import { PrismaService } from 'src/prisma/prisma.service';
import { DepartmentRepository } from '../department.repository';
import {
  GetDepartmentRequestDto,
  CreateDepartmentRequestDto,
} from '../../dtos/department.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaDepartmentRepository implements DepartmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async getDepartment(data: GetDepartmentRequestDto): Promise<any> {
    const department = await this.prisma.department.findUnique({
      where: {
        departmentId: data.departmentId,
      },
    });
    console.log(department);
  }

  public async createDepartment(
    payload: CreateDepartmentRequestDto,
  ): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { companyId, unitId, ...rest } = payload;
    const maxTableId = await this.prisma.department.findFirst({
      where: {
        companyId: companyId,
        tableId: {
          not: undefined,
        },
      },
      select: {
        tableId: true,
      },
      orderBy: {
        tableId: 'desc',
      },
    });
    const nextTableId = maxTableId?.tableId ? maxTableId.tableId + 1 : 1;
    const department = await this.prisma.department.create({
      data: {
        ...rest,
        tableId: nextTableId,
        Unit: {
          connect: {
            unitId: payload.unitId,
          },
        },
        Company: {
          connect: {
            companyId: companyId,
          },
        },
      },
    });
    return department;
  }
}
