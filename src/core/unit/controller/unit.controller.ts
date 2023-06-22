import {
  CreateUnitResponse,
  GetUnitResponse,
  UNIT_SERVICE_NAME,
} from 'src/core/core.pb';
import { CreateUnitRequestDto, GetUnitRequestDto } from '../dtos/unit.dto';
import { UnitService } from '../services/unit.services';
import { GrpcMethod } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';

@Controller('unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @GrpcMethod(UNIT_SERVICE_NAME, 'GetUnit')
  private async getUnit(data: GetUnitRequestDto): Promise<GetUnitResponse> {
    return await this.unitService.getUnit(data);
  }

  @GrpcMethod(UNIT_SERVICE_NAME, 'CreateUnit')
  private async createUnit(
    data: CreateUnitRequestDto,
  ): Promise<CreateUnitResponse> {
    return await this.unitService.createUnit(data);
  }
}
