import { GetUnitRequest } from 'src/core/core.pb';
import { CreateUnitRequestDto } from '../dtos/unit.dto';

export abstract class UnitRepository {
  public abstract getUnit(uniqueId: GetUnitRequest): Promise<any>;
  public abstract createUnit(payload: CreateUnitRequestDto): Promise<any>;
}
