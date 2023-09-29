import { useState } from "react";
import { API } from "../Api";



const Iniciar = () => {
    const [cliente_id, setCliente_id] = useState("");
    const [unidade_id, setUnidade_id] = useState("");

    const [contas, setContas] = useState(null);

    async function buscar(evento) {
        try {
            evento.preventDefault();

            const dados = { cliente_id, unidade_id };

            const response = await API.get(`/clientes/${dados.cliente_id}/unidades/${dados.unidade_id}/consumos`)
            setContas(response.data)
        } catch (error) {
            alert(error.response.data.error)
        }
    }
    return (<>
        <form onSubmit={buscar} method="POST" className="max-width-40 mx-auto p-3 bg-info   col-6">

            <div className="d-flex justify-content-center ">
                <div className="input-group mb-3">
                    <span className="input-group-text">Numero do Cliente</span>
                    <input
                        onChange={(evento) => setCliente_id(evento.target.value)}
                        type="number"
                        className="form-control"
                        aria-label="Input 1" />
                </div>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="input-group mb-3">
                    <span className="input-group-text">Numero da Unidade</span>
                    <input
                        onChange={(evento) => setUnidade_id(evento.target.value)}
                        type="number"
                        className="form-control"
                        aria-label="Input 2" />
                </div>
            </div>
            <button type="submit" className="btn btn-light btn-lg">Boletos</button>
        </form>
        {contas.length > 0 && (
            <div>
                <h1>Contas:</h1>
                <ul>
                    {contas.map((conta, index) => (
                        <li key={index}>
                            <p>Reference: {conta.reference}</p>
                            <p>Vencimento: {conta.vecimento}</p>
                            <p>Valor: {conta.valor}</p>
                            <p>KWH: {conta.kwh}</p>
                            <p>Cliente ID: {conta.cliente_id}</p>
                            <p>Nome: {conta.cliente.nome}</p>
                            <p>Unidade ID: {conta.unidade.id}</p>
                            <p>Endereço: {conta.unidade.endereco}</p>
                            <p>Tipo de Fornecimento: {conta.unidade.tipo_fornecimento}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </>
    )
}

export default Iniciar