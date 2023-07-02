import { CreateJobsResponse, GetJobsResponse } from 'src/core/core.pb';
import { CreateJobsRequestDto, GetJobsRequestDto } from '../dtos/jobs.dto';

export abstract class JobsRepository {
  public abstract getJobs(jobsId: GetJobsRequestDto): Promise<GetJobsResponse>;
  public abstract createJob(
    payload: CreateJobsRequestDto,
  ): Promise<CreateJobsResponse>;
}
