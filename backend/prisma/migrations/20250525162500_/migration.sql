/*
  Warnings:

  - You are about to drop the column `description` on the `stores` table. All the data in the column will be lost.
  - You are about to drop the column `logoUrl` on the `stores` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "stores" DROP COLUMN "description",
DROP COLUMN "logoUrl",
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "title" TEXT;
