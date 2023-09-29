import React from "react";

function Boletos({ contas }) {

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            {contas ? (
                <div className="row">
                    {contas.map((conta, index) => (
                        <div key={index} className="col">
                            <div className="card ">
                                <div className="card-body bg-info text-white">
                                    <h5 className="card-title">Nº da Cliente: {conta.cliente_id}</h5>
                                    <p className="card-text">{conta.cliente.nome}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Nº da Unidade: {conta.unidade.id}</li>
                                    <li className="list-group-item">Endereço: {conta.unidade.endereco}</li>
                                    <li className="list-group-item">Reference: {conta.reference}</li>
                                    <li className="list-group-item">kwh: {conta.kwh}</li>
                                    <li className="list-group-item">Vencimento: {conta.vecimento}</li>
                                    <li className="list-group-item">Valor: {conta.valor}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </div>

    )
}

export default Boletos;