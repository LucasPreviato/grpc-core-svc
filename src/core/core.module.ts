import { Module } from '@nestjs/common';
import { CompanyService } from './company/services/company.service';
import { CompanyController } from './company/controller/company.controller';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CoreModule {}
