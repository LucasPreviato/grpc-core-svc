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
import { JobsCategoryController } from './jobs/controllers/jobs-category.controller';
import { JobsController } from './jobs/controllers/jobs.controller';
import { JobsCategoryService } from './jobs/services/jobs-category.services';
import { JobsPrismaRepository } from './jobs/repositories/prisma/jobs.prisma.repository';
import { JobsCategoryRepository } from './jobs/repositories/jobs-category.repository';
import { JobsCategoryPrismaRepository } from './jobs/repositories/prisma/jobs-category.repository';
import { JobsServices } from './jobs/services/jobs.services';
import { JobsRepository } from './jobs/repositories/jobs.repository';

@Module({
  controllers: [
    CompanyController,
    UnitController,
    JobsCategoryController,
    JobsController,
  ],
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
    JobsCategoryService,
    {
      provide: JobsCategoryRepository,
      useClass: JobsCategoryPrismaRepository,
    },
    JobsServices,
    {
      provide: JobsRepository,
      useClass: JobsPrismaRepository,
    },
  ],
})
export class CoreModule {}
