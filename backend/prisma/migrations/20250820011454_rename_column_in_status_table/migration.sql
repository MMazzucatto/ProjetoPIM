/*
  Warnings:

  - You are about to drop the column `nome` on the `Status` table. All the data in the column will be lost.
  - Added the required column `descricaoStatus` to the `Status` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Status" RENAME COLUMN "nome" TO "descricaoStatus";