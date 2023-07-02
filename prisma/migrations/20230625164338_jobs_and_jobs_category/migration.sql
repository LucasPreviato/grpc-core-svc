-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "jobsJobId" INTEGER;

-- CreateTable
CREATE TABLE "job_categories" (
    "resourceId" TEXT NOT NULL,
    "jobCategoryId" SERIAL NOT NULL,
    "tableId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "job_categories_pkey" PRIMARY KEY ("jobCategoryId")
);

-- CreateTable
CREATE TABLE "jobs" (
    "resourceId" TEXT NOT NULL,
    "jobId" SERIAL NOT NULL,
    "tableId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "jobCategoryId" INTEGER,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("jobId")
);

-- CreateIndex
CREATE UNIQUE INDEX "job_categories_name_jobCategoryId_companyId_key" ON "job_categories"("name", "jobCategoryId", "companyId");

-- CreateIndex
CREATE UNIQUE INDEX "jobs_name_jobCategoryId_key" ON "jobs"("name", "jobCategoryId");

-- AddForeignKey
ALTER TABLE "job_categories" ADD CONSTRAINT "job_categories_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("companyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_jobCategoryId_fkey" FOREIGN KEY ("jobCategoryId") REFERENCES "job_categories"("jobCategoryId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_jobsJobId_fkey" FOREIGN KEY ("jobsJobId") REFERENCES "jobs"("jobId") ON DELETE SET NULL ON UPDATE CASCADE;
