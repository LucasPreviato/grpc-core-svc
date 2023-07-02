import { Injectable } from '@nestjs/common';
import { JobsCategoryRepository } from '../jobs-category.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  GetJobsCategoryRequestDto,
  CreateJobsCategoryRequestDto,
} from '../../dtos/jobs-category.dto';

@Injectable()
export class JobsCategoryPrismaRepository implements JobsCategoryRepository {
  constructor(private readonly prisma: PrismaService) {}
  public getJobsCategory(
    jobCategoryId: GetJobsCategoryRequestDto,
  ): Promise<any> {
    const jobcategory = this.prisma.jobCategory.findUnique({
      where: {
        jobCategoryId: jobCategoryId.jobCategoryId,
      },
    });
    return jobcategory;
  }
  public async createJobsCategory(
    payload: CreateJobsCategoryRequestDto,
  ): Promise<any> {
    const { companyId, ...rest } = payload;
    const maxTableId = await this.prisma.jobCategory.findFirst({
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
    const jobcategory = await this.prisma.jobCategory.create({
      data: {
        ...rest,
        tableId: nextTableId,
        Company: {
          connect: {
            companyId: companyId,
          },
        },
      },
    });
    return jobcategory;
  }
}
