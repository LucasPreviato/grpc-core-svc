import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateJobsRequest, GetJobsRequest } from 'src/core/core.pb';

export class CreateJobsRequestDto implements CreateJobsRequest {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  companyId: number;
  @IsNumber()
  categoryId: number;
  @IsString()
  salary: string;
}

export class GetJobsRequestDto implements GetJobsRequest {
  @IsNumber()
  @IsNotEmpty()
  jobId: number;
}
