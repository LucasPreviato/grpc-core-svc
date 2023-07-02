import {
  CreateJobsCategoryResponse,
  GetJobsCategoryResponse,
} from 'src/core/core.pb';
import {
  CreateJobsCategoryRequestDto,
  GetJobsCategoryRequestDto,
} from '../dtos/jobs-category.dto';

export abstract class JobsCategoryRepository {
  public abstract getJobsCategory(
    jobCategoryId: GetJobsCategoryRequestDto,
  ): Promise<GetJobsCategoryResponse>;
  public abstract createJobsCategory(
    payload: CreateJobsCategoryRequestDto,
  ): Promise<CreateJobsCategoryResponse>;
}
