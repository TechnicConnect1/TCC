import Samsung from "../../../assets/images/Samsung_Logo.svg.png"
import Iphone from "../../../assets/images/apple.png"
import motorola from "../../../assets/images/motorola.png"
import xiaomi from "../../../assets/images/xiaomi.png"
import servico from "../../../assets/images/image 1.png";
import Carrossel from "../../../components/Carrossel/Carrossel";
import "./Servico.css"
import "./Orcamento.css"

export const Servico = () => {
    return (
        <>
            <section className="servico">
                <div className="container-servico">
                    <h1>Serviços</h1>

                    <p>Nossos técnicos altamente especializados realizam diagnósticos precisos para identificar e resolver os problemas do seu smartphone. Além disso, oferecemos reparos transparentes a preços justos, para que você saiba exatamente o que esperar em termos de qualidade e custo.</p>

                    <div className="botoes">
                        <button>Solicitar orçamento</button>
                        <button>Ver serviços</button>
                    </div>
                </div>
            </section>

            <section className="servico2">
                <h1> Soluções <span>Profissionais</span> para Seu Smartphone</h1>
                <Carrossel />

            </section>

            <section className="servico3">
                <h1><span class="underline">Tec</span>h<span className="underline">n</span>ic Connect</h1>


                <div className="container-servico3">
                    <div className="content-servico3">
                        <div className="box-img">
                            <img src={servico} alt="" className="img-section" />
                        </div>


                        <div className="circle4"></div>
                        <div className="circle3"></div>

                        <div className="content-text-servico3">
                            <p>A plataforma conecta os clientes a técnicos qualificados prontos para resolver os problemas do seu smartphones, como reparo de tela quebrada, troca de bateria, solução de problemas de software e muito mais. O compromisso da Technic Connect é oferecer um serviço confiável e eficiente que permita que os clientes voltem a usar seus smartphones rapidamente.</p>

                            <button className="btn">
                                Saiba mais
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

            <section className="servico4">
                <div className="container-servico4">
                    <h2>A Plataforma trabalha com todas as marcas de celulares</h2>
                    <p>De Samsung a iPhone, de Xiaomi a Huawei atendemos a todas as marcas, garantindo que você nunca fique de fora da revolução móvel.</p>
                    <div className="imagens">
                        <img src={Iphone} alt="" className="img2-s" />
                        <img src={Samsung} alt="" className="img1" />

                        <img src={xiaomi} alt="" className="img3" />

                        <img src={motorola} alt="" className="img4" />
                    </div>
                </div>
            </section>
        </>
    )
}