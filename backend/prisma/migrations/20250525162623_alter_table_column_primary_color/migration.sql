/*
  Warnings:

  - You are about to drop the column `primaryColor` on the `stores` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "stores" DROP COLUMN "primaryColor",
ADD COLUMN     "color" TEXT;
