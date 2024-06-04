import React from "react";
import girl from "../../assets/feed-girl.png";
import "./Feed.css"

export const Feed = () => {
    return (
        <>
            <section className="feed-1">
                <div className="circle"></div>
                <div className="circle5"></div>
                <div className="container-feed">
                    <div className="content-feed">
                        <h1><span className="underline">B</span>e<span className="underline">m-</span>vindo ao nosso feed!</h1>

                        <p>Fique por dentro das novidades, mantenha-se informado sobre os lançamentos de novos recursos, integrações, melhorias que estamos implementando em nossa plataforma. Aqui compartilhamos histórias de sucesso de nossos usuários. Leia depoimentos inspiradores sobre pessoas que alcançaram seus objetivos com o auxílio da nossa plataforma.</p>

                        <button className="btn-feed">
                            Solicite um orçamento
                        </button>
                    </div>

                    <img src={girl} alt="" className="feed-girl"/>
                </div>
            </section>

            <section className="feed-2">
                
            </section>
        </>
    )
}