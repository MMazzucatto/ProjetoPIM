-- CreateTable
CREATE TABLE "public"."Avaliacao" (
    "idAvaliacao" SERIAL NOT NULL,
    "idRelato" INTEGER NOT NULL,
    "descricao" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("idAvaliacao")
);

-- CreateTable
CREATE TABLE "public"."Funcionario" (
    "idFuncionario" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "cargo" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("idFuncionario")
);

-- CreateTable
CREATE TABLE "public"."Relato" (
    "idRelato" SERIAL NOT NULL,
    "titulo" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(500) NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "idStatus" INTEGER NOT NULL,
    "idResponsavel" INTEGER,
    "dataStatus" DATE,
    "dataFechamento" DATE,

    CONSTRAINT "Relato_pkey" PRIMARY KEY ("idRelato")
);

-- CreateTable
CREATE TABLE "public"."Responsavel" (
    "idResponsavel" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Responsavel_pkey" PRIMARY KEY ("idResponsavel")
);

-- CreateTable
CREATE TABLE "public"."Resposta" (
    "idResposta" SERIAL NOT NULL,
    "idRelato" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Resposta_pkey" PRIMARY KEY ("idResposta")
);

-- CreateTable
CREATE TABLE "public"."Status" (
    "idStatus" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "tabela" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("idStatus")
);

-- CreateTable
CREATE TABLE "public"."Tarefa" (
    "idTarefa" SERIAL NOT NULL,
    "descricao" VARCHAR(200) NOT NULL,
    "prazo" TIMESTAMPTZ(6),
    "idFuncionario" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Tarefa_pkey" PRIMARY KEY ("idTarefa")
);

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "Responsavel_email_key" ON "public"."Responsavel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- AddForeignKey
ALTER TABLE "public"."Avaliacao" ADD CONSTRAINT "Avaliacao_idRelato_fkey" FOREIGN KEY ("idRelato") REFERENCES "public"."Relato"("idRelato") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Relato" ADD CONSTRAINT "Relato_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "public"."Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Relato" ADD CONSTRAINT "fk_idresponsavel" FOREIGN KEY ("idResponsavel") REFERENCES "public"."Responsavel"("idResponsavel") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."Relato" ADD CONSTRAINT "fk_idstatus" FOREIGN KEY ("idStatus") REFERENCES "public"."Status"("idStatus") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."Resposta" ADD CONSTRAINT "Resposta_idRelato_fkey" FOREIGN KEY ("idRelato") REFERENCES "public"."Relato"("idRelato") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tarefa" ADD CONSTRAINT "Tarefa_idFuncionario_fkey" FOREIGN KEY ("idFuncionario") REFERENCES "public"."Funcionario"("idFuncionario") ON DELETE CASCADE ON UPDATE CASCADE;
