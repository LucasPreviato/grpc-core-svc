/*
  Warnings:

  - You are about to drop the column `zip` on the `companies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "companies" DROP COLUMN "zip",
ADD COLUMN     "zipCode" TEXT;
