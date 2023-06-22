import { CreateUnitResponse, GetUnitResponse } from 'src/core/core.pb';
import { CreateUnitRequestDto, GetUnitRequestDto } from '../dtos/unit.dto';
import { UnitRepository } from '../repositories/unit.repository';
import { HttpStatus, Injectable } from '@nestjs/common';
import { Unit } from '../entities/unit.entity';

@Injectable()
export class UnitService {
  constructor(private readonly unitRepository: UnitRepository) {}

  public async getUnit(unitId: GetUnitRequestDto): Promise<GetUnitResponse> {
    const unit = await this.unitRepository.getUnit(unitId);
    return unit;
  }

  public async createUnit(
    payload: CreateUnitRequestDto,
  ): Promise<CreateUnitResponse> {
    const unit: Unit = new Unit();
    unit.companyId = payload.companyId;
    unit.name = payload.name;
    unit.description = payload.description;

    await this.unitRepository.createUnit(unit);
    console.log(unit);
    return {
      status: HttpStatus.CREATED,
      errors: null,
      unit: unit,
    };
  }
}
