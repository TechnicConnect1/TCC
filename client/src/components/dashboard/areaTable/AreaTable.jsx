import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Modelo",
  "ID do Serviço",
  "Data",
  "Cliente",
  "Status",
  "Valor",
  "Ação",
];

const TABLE_DATA = [
  {
    id: 100,
    model: "iPhone 12",
    order_id: 11232,
    date: "29 de Junho de 2022",
    customer: "Afaq Karim",
    status: "Concluído",
    amount: 300,
  },
  {
    id: 101,
    model: "Samsung Galaxy S20",
    order_id: 11232,
    date: "29 de Junho de 2022",
    customer: "John Doe",
    status: "andamento",
    amount: 250,
  },
  {
    id: 102,
    model: "Google Pixel 5",
    order_id: 11232,
    date: "29 de Junho de 2022",
    customer: "Jane Smith",
    status: "Pendente",
    amount: 200,
  },
  {
    id: 103,
    model: "OnePlus 9 Pro",
    order_id: 11232,
    date: "29 de Junho de 2022",
    customer: "Emily Johnson",
    status: "andamento",
    amount: 350,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Últimos Consertos de Celular</h4>
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
                  <td>R${dataItem.amount.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;

