/*
  Warnings:

  - Added the required column `destination` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderDetail" ADD COLUMN     "destination" VARCHAR(50) NOT NULL;
