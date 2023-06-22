import { Module } from '@nestjs/common';
import { CompanyService } from './company/services/company.service';
import { CompanyController } from './company/controller/company.controller';
import { UnitController } from './unit/controller/unit.controller';
import { UnitService } from './unit/services/unit.services';
import { PrismaUnitRepository } from './unit/repositories/prisma/unit.prisma.repository';
import { UnitRepository } from './unit/repositories/unit.repository';

@Module({
  controllers: [CompanyController, UnitController],
  providers: [
    CompanyService,
    UnitService,
    {
      provide: UnitRepository,
      useClass: PrismaUnitRepository,
    },
  ],
})
export class CoreModule {}
