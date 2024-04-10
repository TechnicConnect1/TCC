import React from "react";
import "./Orcamento.css"

export const Orcamento = () => {
    return (
        <>
            <section className="orcamento">
                <div className="container-orcamento">
                    <div className="content-text">
                        <h1>
                            Preços mais  <br /> <span>acessíveis</span>
                        </h1>

                        <p>Solicite um orçamento agora e deixe que nossa plataforma conecte você aos melhores técnicos de smartphones da região. Na Technic Connect, facilitamos a busca por especialistas qualificados para atender às suas necessidades de reparo.</p>

                        <button className="btn2">
                            Veja serviços
                        </button>
                    </div>

                    <div className="content-form">
                        <div className="form-orcamento">
                            <h2>Orçamento</h2>

                            <div className="input-area">
                                <input type="text" placeholder="Nome" />
                            </div>

                            <div className="input-area">
                                <input type="email" placeholder="E-mail" />
                            </div>

                            <textarea name="
                            " id="servico-area" placeholder="Descreva o problema"></textarea>

                            <button className="btn">
                                Solicitar orçamento
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="orcamento2">
                <div className="container-orcamento2">
                    <h1>Como solicitar um <span>orçamento?</span></h1>

                    <div className="content-text-orcamento">
                        <div className="box-content">
                            <div className="num">
                                <p>1</p>
                            </div>
                            <div className="box">
                                <h3>Passo 1: Descreva o Problema</h3>
                                <p>Forneça uma descrição detalhada do problema que está enfrentando com o dispositivo. Isso permite que os técnicos entendam a natureza do reparo necessário.</p>
                            </div>
                        </div>

                        <div className="box-content">
                            <div className="num">
                                <p>2</p>
                            </div>
                            <div className="box">
                                <h3>Passo 2: Informações do Dispositivo</h3>
                                <p>Forneça informações específicas sobre o dispositivo que precisa de reparo. Isso pode incluir a marca, modelo e qualquer outra informação relevante.</p>
                            </div>
                        </div>

                        <div className="box-content">
                            <div className="num">
                                <p>3</p>
                            </div>
                            <div className="box">
                                <h3>Passo 3: Envio da solicitação</h3>
                                <p>Após revisar e confirmar as informações, você poderá enviar a solicitação de orçamento.</p>
                            </div>
                        </div>

                        <div className="box-content">
                            <div className="num">
                                <p>4</p>
                            </div>
                            <div className="box">
                                <h3>Passo 4: Confirmação e Acompanhamento</h3>
                                <p>Depois de enviar a solicitação, o cliente receberá uma confirmação na tela indicando que a solicitação foi enviada com sucesso. Eles também receberam um e-mail com os detalhes do orçamento feito pelo técnico, onde poderão aceitar ou recusar o mesmo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="orcamento3">
                <div className="container-orcamento3">
                    <h1>Porque escolher a <span>Technic Connect?</span> </h1>
                    <div className="content-orcamento3">
                        <div className="box-2">
                            <h3>Segurança e confiabilidade</h3>
                            <p>Sua segurança é importante para nós. Todos os técnicos da nossa plataforma passam por verificações rigorosas antes de se cadastrarem. </p>
                        </div>

                        <div className="box-2">
                            <h3>Economia de Tempo e Dinheiro</h3>
                            <p>   Evite desperdiçar tempo procurando por técnicos e comparando orçamentos. Economize tempo e dinheiro com nosso processo simplificado.</p>
                        </div>

                        <div className="box-2">
                            <h3>Avaliações de Clientes</h3>
                            <p> Leia avaliações de clientes anteriores sobre os técnicos para tomar decisões informadas e escolher o técnico certo para o trabalho.</p>
                        </div>

                        <div className="box-2">
                            <h3>Garantia de Qualidade</h3>
                            <p>Garantimos a qualidade de todos os serviços prestados. Se você não ficar satisfeito, estamos aqui para resolver quaisquer problemas.</p>
                        </div>

                        <div className="box-2">
                            <h3>Preços Transparentes</h3>
                            <p>Fornecemos preços transparentes para que você saiba exatamente quanto pagará pelo serviço antes de concordar com o orçamento.</p>
                        </div>

                        <div className="box-2">
                            <h3>Técnicos Qualificados</h3>
                            <p>Conectamos você a técnicos altamente qualificados e certificados, garantindo que seu dispositivo seja tratado por profissionais experientes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}