/*
  Warnings:

  - Added the required column `tipoPerfil` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Usuario" ADD COLUMN     "tipoPerfil" VARCHAR(100) NOT NULL;
