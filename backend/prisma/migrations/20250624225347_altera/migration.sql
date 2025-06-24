/*
  Warnings:

  - You are about to alter the column `addition` on the `products_characteristics` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "products_characteristics" ALTER COLUMN "addition" SET DATA TYPE INTEGER;
