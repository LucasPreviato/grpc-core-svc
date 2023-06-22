/*
  Warnings:

  - A unique constraint covering the columns `[name,companyId,unitId]` on the table `units` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "units_name_companyId_key";

-- DropIndex
DROP INDEX "units_unitId_key";

-- CreateIndex
CREATE UNIQUE INDEX "units_name_companyId_unitId_key" ON "units"("name", "companyId", "unitId");
