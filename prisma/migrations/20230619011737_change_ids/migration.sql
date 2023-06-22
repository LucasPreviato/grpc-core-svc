/*
  Warnings:

  - The primary key for the `companies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `employees` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `companyId` on the `employees` table. All the data in the column will be lost.
  - The primary key for the `units` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `companyId` on the `units` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `units` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[employeeId]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,companyCode]` on the table `units` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_companyId_fkey";

-- DropForeignKey
ALTER TABLE "units" DROP CONSTRAINT "units_companyId_fkey";

-- DropIndex
DROP INDEX "units_companyId_name_key";

-- AlterTable
ALTER TABLE "companies" DROP CONSTRAINT "companies_pkey",
ADD CONSTRAINT "companies_pkey" PRIMARY KEY ("companyId");

-- AlterTable
ALTER TABLE "employees" DROP CONSTRAINT "employees_pkey",
DROP COLUMN "companyId",
ADD COLUMN     "companyCode" INTEGER,
ADD COLUMN     "employeeId" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "employees_pkey" PRIMARY KEY ("employeeId");
DROP SEQUENCE "employees_id_seq";

-- AlterTable
ALTER TABLE "units" DROP CONSTRAINT "units_pkey",
DROP COLUMN "companyId",
DROP COLUMN "status",
ADD COLUMN     "companyCode" INTEGER,
ADD CONSTRAINT "units_pkey" PRIMARY KEY ("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "employees_employeeId_key" ON "employees"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "units_name_companyCode_key" ON "units"("name", "companyCode");

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_companyCode_fkey" FOREIGN KEY ("companyCode") REFERENCES "companies"("companyId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_companyCode_fkey" FOREIGN KEY ("companyCode") REFERENCES "companies"("companyId") ON DELETE SET NULL ON UPDATE CASCADE;
