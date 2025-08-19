/*
  Warnings:

  - Added the required column `category` to the `menu_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."menu_items" ADD COLUMN     "category" TEXT NOT NULL;
