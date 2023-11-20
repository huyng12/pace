/*
  Warnings:

  - Added the required column `maxDuration` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "maxDuration" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "Activity_deletedAt_idx" ON "Activity"("deletedAt");

-- CreateIndex
CREATE INDEX "ActivityLog_endedAt_idx" ON "ActivityLog"("endedAt");

-- CreateIndex
CREATE INDEX "ActivityLog_startedAt_idx" ON "ActivityLog"("startedAt");
