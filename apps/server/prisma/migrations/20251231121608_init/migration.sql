/*
  Warnings:

  - You are about to drop the column `categoryId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_categoryId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "categoryId";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "categoryId";

-- DropTable
DROP TABLE "categories";

-- DropEnum
DROP TYPE "CategoryType";
