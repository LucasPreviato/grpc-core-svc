-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "unitId" INTEGER;

-- CreateTable
CREATE TABLE "units" (
    "id" TEXT NOT NULL,
    "uniqueId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "GeneralStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "units_uniqueId_key" ON "units"("uniqueId");

-- CreateIndex
CREATE UNIQUE INDEX "units_companyId_name_key" ON "units"("companyId", "name");

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("uniqueId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "units"("uniqueId") ON DELETE SET NULL ON UPDATE CASCADE;
