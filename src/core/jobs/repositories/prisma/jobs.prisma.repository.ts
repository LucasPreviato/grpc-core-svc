import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JobsRepository } from '../jobs.repository';
import { GetJobsRequestDto, CreateJobsRequestDto } from '../../dtos/jobs.dto';

@Injectable()
export class JobsPrismaRepository implements JobsRepository {
  constructor(private readonly prisma: PrismaService) {}
  public async getJobs(jobsId: GetJobsRequestDto): Promise<any> {
    const jobs = await this.prisma.jobs.findUnique({
      where: {
        jobId: jobsId.jobId,
      },
    });
    return jobs;
  }
  public createJob(payload: CreateJobsRequestDto): Promise<any> {
    const { companyId, ...rest } = payload;
    const maxTableId = this.prisma.jobs.findFirst({
      where: {
        JobCategory: {
          jobCategoryId: companyId,
        },
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
  }
}
