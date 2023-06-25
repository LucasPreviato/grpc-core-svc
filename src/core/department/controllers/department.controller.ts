import { Controller } from '@nestjs/common';
import { DepartmentService } from '../services/department.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateDepartmentResponse,
  DEPARTMENT_SERVICE_NAME,
  GetDepartmentResponse,
} from 'src/core/core.pb';
import {
  CreateDepartmentRequestDto,
  GetDepartmentRequestDto,
} from '../dtos/department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @GrpcMethod(DEPARTMENT_SERVICE_NAME, 'GetDepartment')
  private async getDepartment(
    data: GetDepartmentRequestDto,
  ): Promise<GetDepartmentResponse> {
    return await this.departmentService.getDepartment(data);
  }

  @GrpcMethod(DEPARTMENT_SERVICE_NAME, 'CreateDepartment')
  private async createDepartment(
    data: CreateDepartmentRequestDto,
  ): Promise<CreateDepartmentResponse> {
    return await this.departmentService.createDepartment(data);
  }
}
