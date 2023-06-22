/*
  Warnings:

  - You are about to drop the column `uniqueId` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `uniqueId` on the `units` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[companyId]` on the table `companies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[unitId]` on the table `units` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_unitId_fkey";

-- DropForeignKey
ALTER TABLE "units" DROP CONSTRAINT "units_companyId_fkey";

-- DropIndex
DROP INDEX "companies_uniqueId_key";

-- DropIndex
DROP INDEX "units_uniqueId_key";

-- AlterTable
ALTER TABLE "companies" DROP COLUMN "uniqueId",
ADD COLUMN     "companyId" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "units" DROP COLUMN "uniqueId",
ADD COLUMN     "unitId" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "companies_companyId_key" ON "companies"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "units_unitId_key" ON "units"("unitId");

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("companyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "units"("unitId") ON DELETE SET NULL ON UPDATE CASCADE;
