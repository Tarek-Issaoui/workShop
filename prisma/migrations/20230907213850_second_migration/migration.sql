/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "tarif" INTEGER NOT NULL,
    "published" BOOLEAN DEFAULT false,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quotation" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Quotation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToQuotation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToQuotation_AB_unique" ON "_ProductToQuotation"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToQuotation_B_index" ON "_ProductToQuotation"("B");

-- AddForeignKey
ALTER TABLE "_ProductToQuotation" ADD CONSTRAINT "_ProductToQuotation_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToQuotation" ADD CONSTRAINT "_ProductToQuotation_B_fkey" FOREIGN KEY ("B") REFERENCES "Quotation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
