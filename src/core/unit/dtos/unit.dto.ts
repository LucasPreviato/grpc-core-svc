import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateUnitRequest, GetUnitRequest } from 'src/core/core.pb';

export class CreateUnitRequestDto implements CreateUnitRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  companyId: number;
}

export class GetUnitRequestDto implements GetUnitRequest {
  @IsNumber()
  unitId: number;
}
