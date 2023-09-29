import React from "react";
function Boletos({ contas }) {
    return (
        <div>
            <h1>Contas:</h1>
            {contas ? (
                <div>
                    {contas.map((conta, index) => (

                        <div key={index}>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Nº da Cliente: {conta.cliente_id}</h5>
                                    <p class="card-text">{conta.cliente.nome}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Nº da Unidade: {conta.unidade.id}</li>
                                    <li class="list-group-item">Endereço: {conta.unidade.endereco}</li>
                                    <li class="list-group-item">Reference: {conta.reference}</li>
                                    <li class="list-group-item">KWH: {conta.kwh}</li>
                                    <li class="list-group-item">Vencimento: {conta.vecimento}</li>
                                    <li class="list-group-item">Valor: {conta.valor}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <></>
            )}
            <hr />
        </div>
    );
}

export default Boletos;