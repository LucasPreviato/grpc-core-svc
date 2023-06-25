import { Injectable } from '@nestjs/common';
import { DepartmentRepository } from '../repositories/department.repository';
import {
  CreateDepartmentResponse,
  GetDepartmentResponse,
} from 'src/core/core.pb';
import {
  CreateDepartmentRequestDto,
  GetDepartmentRequestDto,
} from '../dtos/department.dto';

@Injectable()
export class DepartmentService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  public async getDepartment(
    departmentId: GetDepartmentRequestDto,
  ): Promise<GetDepartmentResponse> {
    const department = await this.departmentRepository.getDepartment(
      departmentId,
    );
    return department;
  }

  public async createDepartment(
    payload: CreateDepartmentRequestDto,
  ): Promise<CreateDepartmentResponse> {
    const department = await this.departmentRepository.createDepartment(
      payload,
    );
    return department;
  }
}
