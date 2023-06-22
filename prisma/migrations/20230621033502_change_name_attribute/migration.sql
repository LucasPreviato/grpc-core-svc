/*
  Warnings:

  - You are about to drop the column `companyCode` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `companyCode` on the `units` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,companyId]` on the table `units` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_companyCode_fkey";

-- DropForeignKey
ALTER TABLE "units" DROP CONSTRAINT "units_companyCode_fkey";

-- DropIndex
DROP INDEX "units_name_companyCode_key";

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "companyCode",
ADD COLUMN     "companyId" INTEGER;

-- AlterTable
ALTER TABLE "units" DROP COLUMN "companyCode",
ADD COLUMN     "companyId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "units_name_companyId_key" ON "units"("name", "companyId");

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("companyId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("companyId") ON DELETE SET NULL ON UPDATE CASCADE;
