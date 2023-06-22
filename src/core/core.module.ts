import { Module } from '@nestjs/common';
import { CompanyService } from './company/services/company.service';
import { CompanyController } from './company/controller/company.controller';
import { UnitController } from './unit/controller/unit.controller';
import { UnitService } from './unit/services/unit.services';
import { PrismaUnitRepository } from './unit/repositories/prisma/unit.prisma.repository';
import { UnitRepository } from './unit/repositories/unit.repository';
import { DepartmentService } from './department/services/department.service';
import { DepartmentRepository } from './department/repositories/department.repository';
import { PrismaDepartmentRepository } from './department/repositories/prisma/department.prisma.repository';

@Module({
  controllers: [CompanyController, UnitController],
  providers: [
    CompanyService,
    UnitService,
    {
      provide: UnitRepository,
      useClass: PrismaUnitRepository,
    },
    DepartmentService,
    {
      provide: DepartmentRepository,
      useClass: PrismaDepartmentRepository,
    },
  ],
})
export class CoreModule {}
