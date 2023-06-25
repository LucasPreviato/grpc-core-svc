-- DropForeignKey
ALTER TABLE "departments" DROP CONSTRAINT "departments_unitId_fkey";

-- DropForeignKey
ALTER TABLE "units" DROP CONSTRAINT "units_companyId_fkey";

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("companyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "units"("unitId") ON DELETE RESTRICT ON UPDATE CASCADE;
