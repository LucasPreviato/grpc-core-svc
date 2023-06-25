/*
  Warnings:

  - You are about to drop the column `companyId` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `departmentDepartmentId` on the `employees` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[firstName,lastName,unitId,departmentId]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - Made the column `unitId` on table `departments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `companyId` on table `units` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_companyId_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_departmentDepartmentId_fkey";

-- DropIndex
DROP INDEX "employees_firstName_lastName_companyId_unitId_departmentDep_key";

-- AlterTable
ALTER TABLE "departments" ALTER COLUMN "unitId" SET NOT NULL;

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "companyId",
DROP COLUMN "departmentDepartmentId",
ADD COLUMN     "departmentId" INTEGER;

-- AlterTable
ALTER TABLE "units" ALTER COLUMN "companyId" SET NOT NULL;

-- DropEnum
DROP TYPE "GeneralStatus";

-- CreateIndex
CREATE UNIQUE INDEX "employees_firstName_lastName_unitId_departmentId_key" ON "employees"("firstName", "lastName", "unitId", "departmentId");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("departmentId") ON DELETE SET NULL ON UPDATE CASCADE;
