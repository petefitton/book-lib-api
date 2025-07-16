/*
  Warnings:

  - You are about to drop the column `authorid` on the `books` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_authorid_fkey";

-- AlterTable
ALTER TABLE "books" DROP COLUMN "authorid",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
