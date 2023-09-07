/*
  Warnings:

  - You are about to drop the `_ProductToQuotation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToQuotation" DROP CONSTRAINT "_ProductToQuotation_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToQuotation" DROP CONSTRAINT "_ProductToQuotation_B_fkey";

-- DropTable
DROP TABLE "_ProductToQuotation";

-- CreateTable
CREATE TABLE "ProductQuotation" (
    "id" TEXT NOT NULL,
    "productId" TEXT,
    "quotationId" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "ProductQuotation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductQuotation_productId_quotationId_key" ON "ProductQuotation"("productId", "quotationId");

-- AddForeignKey
ALTER TABLE "ProductQuotation" ADD CONSTRAINT "ProductQuotation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductQuotation" ADD CONSTRAINT "ProductQuotation_quotationId_fkey" FOREIGN KEY ("quotationId") REFERENCES "Quotation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
