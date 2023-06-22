import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  CreateDepartmentRequest,
  GetDepartmentRequest,
} from 'src/core/core.pb';

export class CreateDepartmentRequestDto implements CreateDepartmentRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  companyId: number;
  @IsNumber()
  @IsNotEmpty()
  unitId: number;
}

export class GetDepartmentRequestDto implements GetDepartmentRequest {
  @IsNumber()
  @IsNotEmpty()
  departmentId: number;
}
