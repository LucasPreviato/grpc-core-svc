/*
  Warnings:

  - A unique constraint covering the columns `[name,unitId,departmentId]` on the table `departments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,companyId]` on the table `units` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "departments_name_unitId_departmentId_tableId_key";

-- DropIndex
DROP INDEX "units_name_companyId_unitId_key";

-- CreateIndex
CREATE UNIQUE INDEX "departments_name_unitId_departmentId_key" ON "departments"("name", "unitId", "departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "units_name_companyId_key" ON "units"("name", "companyId");
