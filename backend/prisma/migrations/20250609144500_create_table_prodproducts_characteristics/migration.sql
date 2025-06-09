-- CreateTable
CREATE TABLE "products_characteristics" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "characteristicId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "addition" INTEGER NOT NULL,
    "hex_value" TEXT NOT NULL,

    CONSTRAINT "products_characteristics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products_characteristics" ADD CONSTRAINT "products_characteristics_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_characteristics" ADD CONSTRAINT "products_characteristics_characteristicId_fkey" FOREIGN KEY ("characteristicId") REFERENCES "characteristics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
