import { IsOptional, IsString } from 'class-validator';
import { CreateCompanyRequest, GetCompanyRequest } from 'src/core/company.pb';

export class CreateCompanyRequestDto implements CreateCompanyRequest {
  @IsString()
  public readonly cnpj: string;
  @IsString()
  public readonly companyName: string;
  @IsString()
  public readonly tradingName: string;
  @IsString()
  @IsOptional()
  public readonly address: string;
  @IsString()
  @IsOptional()
  public readonly city: string;
  @IsString()
  @IsOptional()
  public readonly state: string;
  @IsString()
  @IsOptional()
  public readonly zip: string;
  @IsString()
  @IsOptional()
  public readonly country: string;
  @IsString()
  @IsOptional()
  public readonly phone: string;
  @IsString()
  @IsOptional()
  public readonly email: string;
  @IsString()
  @IsOptional()
  public readonly website: string;
}

export class GetCompanyRequestDto implements GetCompanyRequest {
  @IsString()
  public readonly id: string;
}
