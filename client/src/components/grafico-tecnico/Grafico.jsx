import React from 'react'
import "./Grafico.css"
import { useContext } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { FaArrowUpLong } from "react-icons/fa6";
const data = [
    {
        month: "Jan",
        consertou: 70,
        orçamentos: 100,
    },
    {
        month: "Fev",
        consertou: 55,
        orçamentos: 85,
    },
    {
        month: "Mar",
        consertou: 35,
        orçamentos: 90,
    },
    {
        month: "Abril",
        consertou: 90,
        orçamentos: 70,
    },
    {
        month: "Maio",
        consertou: 55,
        orçamentos: 80,
    },
    {
        month: "Jun",
        consertou: 30,
        orçamentos: 50,
    },
    {
        month: "Jul",
        consertou: 32,
        orçamentos: 75,
    },
    {
        month: "Ago",
        consertou: 62,
        orçamentos: 86,
    },
    {
        month: "Set",
        consertou: 55,
        orçamentos: 78,
    },
];

export const Grafico = () => {
    const formatTooltipValue = (value) => {
        return `${value}`;
    };

    const formatYAxisLabel = (value) => {
        return `${value}`;
    };

    const formatLegendValue = (value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    return (
        <div className="bar-chart">
            <div className="bar-chart-info">
                <h5 className="bar-chart-title">Reparos e Orçamentos</h5>
                <div className="chart-info-data">
                    <div className="info-data-value">Reparos: 350</div>
                    <div className="info-data-text">
                        <FaArrowUpLong />
                        <p>5% a mais do que o último mês.</p>
                    </div>
                </div>
            </div>
            <div className="bar-chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={200}
                        data={data}
                        margin={{
                            top: 5,
                            right: 5,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <XAxis
                            padding={{ left: 10 }}
                            dataKey="month"
                            tickSize={0}
                            axisLine={false}
                            tick={{
                                fill: "#676767",
                                fontSize: 14,
                            }}
                        />
                        <YAxis
                            padding={{ bottom: 10, top: 10 }}
                            tickFormatter={formatYAxisLabel}
                            tickCount={6}
                            axisLine={false}
                            tickSize={0}
                            tick={{
                                fill: "#676767",
                            }}
                        />
                        <Tooltip
                            formatter={formatTooltipValue}
                            cursor={{ fill: "transparent" }}
                        />
                        <Legend
                            iconType="circle"
                            iconSize={10}
                            verticalAlign="top"
                            align="right"
                            formatter={formatLegendValue}
                        />
                        <Bar
                            dataKey="orçamentos"
                            fill="#475be8"
                            activeBar={false}
                            isAnimationActive={false}
                            barSize={24}
                            radius={[4, 4, 4, 4]}
                        />
                        <Bar
                            dataKey="consertou"
                            fill="#e3e7fc"
                            activeBar={false}
                            isAnimationActive={false}
                            barSize={24}
                            radius={[4, 4, 4, 4]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}


