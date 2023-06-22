import { GetUnitRequest } from 'src/core/core.pb';
import { CreateUnitRequestDto } from '../../dtos/unit.dto';
import { UnitRepository } from '../unit.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUnitRepository extends UnitRepository {
  constructor(private readonly prisma: PrismaService) {
    super();
  }
  public getUnit(unitId: GetUnitRequest) {
    const unit = this.prisma.unit.findUnique({
      where: {
        unitId: unitId.unitId,
      },
    });
    return unit;
  }
  public createUnit(payload: CreateUnitRequestDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { companyId, ...rest } = payload;
    const unit = this.prisma.unit.create({
      data: {
        ...rest,
        Company: {
          connect: {
            companyId: payload.companyId,
          },
        },
      },
    });
    return unit;
  }
}
