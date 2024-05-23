import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
    return (
        <section className="content-area-cards">
            <AreaCard
                colors={["#e4e8ef", "#475be8"]}
                percentFillValue={80}
                cardInfo={{
                    title: "Reparos Concluídos Hoje",
                    value: "4",
                    text: "Total de reparos concluídos hoje.",
                }}
            />
            <AreaCard
                colors={["#e4e8ef", "#4ce13f"]}
                percentFillValue={50}
                cardInfo={{
                    title: "Receita do Dia",
                    value: "$500",
                    text: "Total de receita gerada hoje.",
                }}
            />
            <AreaCard
                colors={["#e4e8ef", "#f29a2e"]}
                percentFillValue={40}
                cardInfo={{
                    title: "Aguardando Peças",
                    value: "10",
                    text: "Número de reparos aguardando chegada de peças.",
                }}
            />

        </section>
    )
}

export default AreaCards;