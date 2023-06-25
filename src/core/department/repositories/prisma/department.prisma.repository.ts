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
    const { unitId, ...rest } = payload;

    const maxTableId = await this.prisma.department.findFirst({
      where: {
        unitId: unitId,
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

    const new_department = await this.prisma.department.create({
      data: {
        ...rest,
        tableId: nextTableId,
        Unit: {
          connect: {
            unitId: unitId,
          },
        },
      },
    });
    console.log(new_department);
  }
}
