import React from "react";
function Boletos({ contas }) {

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            {contas ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {contas.map((conta, index) => (
                        <div key={index} className="col">
                            <div className={`card text-white bg-${index % 2 === 0 ? 'primary' : 'info'} mb-3`} style={{ maxWidth: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Nº da Cliente: {conta.cliente_id}</h5>
                                    <p className="card-text">{conta.cliente.nome}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className={`list-group-item bg-${index % 2 === 0 ? 'primary' : 'info'}`}>Nº da Unidade: {conta.unidade.id}</li>
                                    <li className={`list-group-item bg-${index % 2 === 0 ? 'primary' : 'info'}`}>Endereço: {conta.unidade.endereco}</li>
                                    <li className={`list-group-item bg-${index % 2 === 0 ? 'primary' : 'info'}`}>Reference: {conta.reference}</li>
                                    <li className={`list-group-item bg-${index % 2 === 0 ? 'primary' : 'info'}`}>kwh: {conta.kwh}</li>
                                    <li className={`list-group-item bg-${index % 2 === 0 ? 'primary' : 'info'}`}>Vencimento: {conta.vecimento}</li>
                                    <li className={`list-group-item bg-${index % 2 === 0 ? 'primary' : 'info'}`}>Valor: {conta.valor}</li>
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