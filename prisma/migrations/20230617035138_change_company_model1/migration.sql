/*
  Warnings:

  - A unique constraint covering the columns `[cnpj,companyName]` on the table `companies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cnpj` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "cnpj" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "companies_cnpj_companyName_key" ON "companies"("cnpj", "companyName");
