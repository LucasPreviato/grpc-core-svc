import {
  CreateDepartmentResponse,
  GetDepartmentResponse,
} from 'src/core/core.pb';
import {
  CreateDepartmentRequestDto,
  GetDepartmentRequestDto,
} from '../dtos/department.dto';

export abstract class DepartmentRepository {
  public abstract getDepartment(
    data: GetDepartmentRequestDto,
  ): Promise<GetDepartmentResponse>;
  public abstract createDepartment(
    payload: CreateDepartmentRequestDto,
  ): Promise<CreateDepartmentResponse>;
}
