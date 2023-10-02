-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unidade" (
    "id" SERIAL NOT NULL,
    "endereco" TEXT NOT NULL,
    "tipo_fornecimento" TEXT NOT NULL,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "Unidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consumo" (
    "id" SERIAL NOT NULL,
    "reference" TEXT NOT NULL,
    "vecimento" TIMESTAMP(3) NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "kwh" DECIMAL(65,30) NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "unidade_id" INTEGER NOT NULL,

    CONSTRAINT "Consumo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_key" ON "Cliente"("cpf");

-- AddForeignKey
ALTER TABLE "Unidade" ADD CONSTRAINT "Unidade_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consumo" ADD CONSTRAINT "Consumo_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consumo" ADD CONSTRAINT "Consumo_unidade_id_fkey" FOREIGN KEY ("unidade_id") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
