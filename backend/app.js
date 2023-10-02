const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require('cors');


const prisma = new PrismaClient();

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.post("/clientes", async (req, res) => {
    try {
        const retorno = await prisma.cliente.create({ data: req.body });

        res.send(retorno);
    } catch (error) {
        res.send(error);
    }
});

app.get("/clientes", async (req, res) => {
    try {
        const retorno = await prisma.cliente.findMany();

        res.send(retorno);
    } catch (error) {
        res.send(error);
    }
});

app.post("/unidades", async (req, res) => {
    try {
        const retorno = await prisma.unidade.create({ data: req.body });

        res.send(retorno);
    } catch (error) {
        res.send(error.message);
    }
});
//post cosumo n rodou 
app.post("/consumos", async (req, res) => {
    try {
        console.log({ data: req.body })
        const retorno = await prisma.consumo.create({ data: req.body });

        res.send(retorno);
    } catch (error) {
        res.send(error.message);
    }
});

app.get("/clientes/:id/consumos", async (req, res) => {
    try {
        const idCliente = Number(req.params.id);

        const retorno = await prisma.consumo.findMany({
            where: { cliente_id: idCliente },
            include: {
                cliente: true,
                unidade: true,
            },
        });

        res.send(retorno);
    } catch (error) {
        res.send(error.message);
    }
});

app.get("/clientes/:idCliente/unidades/:idUnidade/consumos",
    async (req, res) => {
        try {
            const idCliente = Number(req.params.idCliente);
            const idUnidade = Number(req.params.idUnidade);

            const retorno = await prisma.consumo.findMany({
                where: { cliente_id: idCliente, unidade_id: idUnidade },
                include: {
                    cliente: true,
                    unidade: true,
                },
            });

            res.send(retorno);
        } catch (error) {
            res.send(error);
        }
    }
);

app.listen(8080, () => {
    console.log("Example app listening on port 8080!");
});
