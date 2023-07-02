import {
  CreateJobsCategoryRequest,
  GetJobsCategoryRequest,
} from 'src/core/core.pb';

export class CreateJobsCategoryRequestDto implements CreateJobsCategoryRequest {
  name: string;
  description: string;
  companyId: number;
}

export class GetJobsCategoryRequestDto implements GetJobsCategoryRequest {
  jobCategoryId: number;
}
