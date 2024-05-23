import React, { useState } from "react";
import "./Value.css";
import data from "../accordion"; // Importe os dados do arquivo accordion
import { BsQuestionCircleFill } from "react-icons/bs";

const Value = () => {
    const [visibleItems, setVisibleItems] = useState([]);

    const toggleAccordion = (index) => {
        const updatedVisibleItems = [...visibleItems];
        updatedVisibleItems[index] = !updatedVisibleItems[index];
        setVisibleItems(updatedVisibleItems);
    }

    return (
        <div className="accordionCard">
            {data.map((item, index) => (
                <div key={index} className="accordion" onClick={() => toggleAccordion(index)}>
                    <div className="item">
                        <div className="number"><BsQuestionCircleFill /></div>
                        <div className="text">{item.heading}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`icon ${visibleItems[index] ? "rotate" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        <div className={`hidden-box ${visibleItems[index] ? "active-box" : ""}`}>
                            <p>{item.detail}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Value;
