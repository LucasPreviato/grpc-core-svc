-- CreateEnum
CREATE TYPE "GeneralStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'DELETED');

-- CreateTable
CREATE TABLE "companies" (
    "resourceId" TEXT NOT NULL,
    "companyId" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "tradingName" TEXT NOT NULL,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipCode" TEXT,
    "country" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("companyId")
);

-- CreateTable
CREATE TABLE "units" (
    "resourceId" TEXT NOT NULL,
    "unitId" SERIAL NOT NULL,
    "tableId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" INTEGER,

    CONSTRAINT "units_pkey" PRIMARY KEY ("unitId")
);

-- CreateTable
CREATE TABLE "departments" (
    "resourceId" TEXT NOT NULL,
    "departmentId" SERIAL NOT NULL,
    "tableId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "unitId" INTEGER,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("departmentId")
);

-- CreateTable
CREATE TABLE "employees" (
    "resourceId" TEXT NOT NULL,
    "employeeId" SERIAL NOT NULL,
    "tableId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "companyId" INTEGER,
    "unitId" INTEGER,
    "departmentDepartmentId" INTEGER,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("employeeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_companyId_key" ON "companies"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "companies_cnpj_companyName_key" ON "companies"("cnpj", "companyName");

-- CreateIndex
CREATE UNIQUE INDEX "units_name_companyId_unitId_key" ON "units"("name", "companyId", "unitId");

-- CreateIndex
CREATE UNIQUE INDEX "departments_name_unitId_departmentId_tableId_key" ON "departments"("name", "unitId", "departmentId", "tableId");

-- CreateIndex
CREATE UNIQUE INDEX "employees_firstName_lastName_companyId_unitId_departmentDep_key" ON "employees"("firstName", "lastName", "companyId", "unitId", "departmentDepartmentId");

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("companyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "units"("unitId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("companyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "units"("unitId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_departmentDepartmentId_fkey" FOREIGN KEY ("departmentDepartmentId") REFERENCES "departments"("departmentId") ON DELETE SET NULL ON UPDATE CASCADE;
