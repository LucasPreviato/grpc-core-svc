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
  public async getUnit(unitId: GetUnitRequest) {
    const unit = await this.prisma.unit.findUnique({
      where: {
        unitId: unitId.unitId,
      },
    });
    return unit;
  }
  public async createUnit(payload: CreateUnitRequestDto) {
    const { companyId, ...rest } = payload;

    const maxTableId = await this.prisma.unit.findFirst({
      where: {
        companyId: companyId,
        tableId: {
          not: undefined,
        },
      },
      select: {
        tableId: true,
      },
      orderBy: {
        tableId: 'desc',
      },
    });

    const nextTableId = maxTableId?.tableId ? maxTableId.tableId + 1 : 1;

    const unit = await this.prisma.unit.create({
      data: {
        ...rest,
        tableId: nextTableId,
        Company: {
          connect: {
            companyId: companyId,
          },
        },
      },
    });

    return unit;
  }
}
