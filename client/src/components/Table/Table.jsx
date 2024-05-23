import React from 'react'
import "./Table.css"

const TABLE_HEADS = [
    "Modelo",
    "ID do Serviço",
    "Data",
    "Cliente",
    "Status",
    "Valor"
];

const TABLE_DATA = [
    {
        "id": 100,
        "model": "iPhone 12",
        "order_id": 11232,
        "date": "29 de Junho de 2022",
        "customer": "Afaq Karim",
        "status": "Concluído",
        "amount": 300
    },
    {
        "id": 101,
        "model": "Samsung Galaxy S20",
        "order_id": 11232,
        "date": "29 de Junho de 2022",
        "customer": "John Doe",
        "status": "andamento",
        "amount": 250
    },
    {
        "id": 102,
        "model": "Google Pixel 5",
        "order_id": 11232,
        "date": "29 de Junho de 2022",
        "customer": "Jane Smith",
        "status": "Pendente",
        "amount": 200
    },
    {
        "id": 103,
        "model": "OnePlus 9 Pro",
        "order_id": 11232,
        "date": "29 de Junho de 2022",
        "customer": "Emily Johnson",
        "status": "andamento",
        "amount": 350
    },
    {
        "id": 104,
        "model": "iPhone 13",
        "order_id": 11233,
        "date": "30 de Junho de 2022",
        "customer": "Carlos Silva",
        "status": "Concluído",
        "amount": 400
    },
    {
        "id": 105,
        "model": "Samsung Galaxy S21",
        "order_id": 11234,
        "date": "1 de Julho de 2022",
        "customer": "Maria Garcia",
        "status": "andamento",
        "amount": 450
    },
    {
        "id": 106,
        "model": "Google Pixel 6",
        "order_id": 11235,
        "date": "2 de Julho de 2022",
        "customer": "James Brown",
        "status": "Pendente",
        "amount": 500
    },
    {
        "id": 107,
        "model": "OnePlus 8T",
        "order_id": 11236,
        "date": "3 de Julho de 2022",
        "customer": "Anna Wilson",
        "status": "Concluído",
        "amount": 380
    },
    {
        "id": 108,
        "model": "iPhone SE",
        "order_id": 11237,
        "date": "4 de Julho de 2022",
        "customer": "Michael Scott",
        "status": "andamento",
        "amount": 300
    },
    {
        "id": 109,
        "model": "Samsung Galaxy Note 20",
        "order_id": 11238,
        "date": "5 de Julho de 2022",
        "customer": "Dwight Schrute",
        "status": "Pendente",
        "amount": 600
    },
    {
        "id": 110,
        "model": "Google Pixel 4a",
        "order_id": 11239,
        "date": "6 de Julho de 2022",
        "customer": "Pam Beesly",
        "status": "Concluído",
        "amount": 350
    },
    {
        "id": 111,
        "model": "OnePlus Nord",
        "order_id": 11240,
        "date": "7 de Julho de 2022",
        "customer": "Jim Halpert",
        "status": "andamento",
        "amount": 320
    },
    {
        "id": 112,
        "model": "iPhone 11",
        "order_id": 11241,
        "date": "8 de Julho de 2022",
        "customer": "Angela Martin",
        "status": "Pendente",
        "amount": 450
    }
];

export const Table = () => {
    return (
        <section className="content-area-table table">
            <div className="data-table-info">
                <h4 className="data-table-title">Histórico de Serviços</h4>
            </div>
            <div className="data-table-diagram">
                <table>
                    <thead>
                        <tr>
                            {TABLE_HEADS?.map((th, index) => (
                                <th key={index}>{th}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_DATA?.map((dataItem) => {
                            return (
                                <tr key={dataItem.id}>
                                    <td>{dataItem.model}</td>
                                    <td>{dataItem.order_id}</td>
                                    <td>{dataItem.date}</td>
                                    <td>{dataItem.customer}</td>
                                    <td>
                                        <div className="dt-status">
                                            <span
                                                className={`dt-status-dot dot-${dataItem.status}`}
                                            ></span>
                                            <span className="dt-status-text">{dataItem.status}</span>
                                        </div>
                                    </td>
                                    <td className='center'>R${dataItem.amount.toFixed(2)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
