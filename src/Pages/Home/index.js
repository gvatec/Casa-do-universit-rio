import React, { useEffect, useState } from "react";
import './style.css'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import banner from '../../assets/banners/banner.png'
import bannermobile from '../../assets/banners/bannermobile.gif'
import enf from '../../assets/enfermagem.png'
import tec from '../../assets/tecnologia.png'
import eng from '../../assets/engenharia.png'
import inst1 from '../../assets/anhe.png'
import inst2 from '../../assets/anha.png'
import inst3 from '../../assets/cru.png'
import inst4 from '../../assets/unici.png'
import inst5 from '../../assets/esta.png'
import inst6 from '../../assets/uno.png'

export default function Home() {

    const [valor, setValor] = useState(100)

    useEffect(() => {
        document.querySelectorAll('.item-categoria-setor')[0].setAttribute('style', `background-image:url(${enf})`)
        document.querySelectorAll('.item-categoria-setor')[1].setAttribute('style', `background-image:url(${tec})`)
        document.querySelectorAll('.item-categoria-setor')[2].setAttribute('style', `background-image:url(${eng})`)
        document.querySelectorAll('.item-categoria-setor')[3].setAttribute('style', `background-image:url(${enf})`)
        document.querySelectorAll('.item-categoria-setor')[4].setAttribute('style', `background-image:url(${tec})`)
        document.querySelectorAll('.item-categoria-setor')[5].setAttribute('style', `background-image:url(${eng})`)
    }, [])
    return (
        <div className="container-home">
            <Header></Header>
            <section className="section1">
                {window.screen.width > 500 ? <div className="banner"><img src={banner}></img></div> :
                    <div className="banner"><img src={bannermobile}></img></div>}
            </section>
            <section className="section2">
                <div className="title">
                    <h2>Procurar por setor</h2>
                </div>

                <div className="box-categorias-setor">
                    <div className="item-categoria-setor"><h4>SAÚDE</h4></div>
                    <div className="item-categoria-setor"><h4>TECNOLOGIA</h4></div>
                    <div className="item-categoria-setor"><h4>ENGENHARIA</h4></div>
                </div>
                <div className="box-categorias-setor">
                    <div className="item-categoria-setor"><h4>SAÚDE</h4></div>
                    <div className="item-categoria-setor"><h4>TECNOLOGIA</h4></div>
                    <div className="item-categoria-setor"><h4>ENGENHARIA</h4></div>
                </div>

            </section>
            <section className="section3">
                <div className="title">
                    <h2>Novidades Casa do Universitário</h2>
                </div>
                <div className="container-novidades">
                    <div className="novidade1"></div>
                    <div className="container-novidade2e3">
                        <div className="novidade23"></div>
                        <div className="novidade23"></div>

                    </div>
                </div>
            </section>
            <section className="section4">
                <div className="title">
                    <h2>Intituições Parceiras</h2>
                </div>

                <div className="container-instituicoes">
                    <img src={inst1}></img>
                    <img src={inst2}></img>
                    <img src={inst3}></img>
                    <img src={inst4}></img>
                    <img src={inst5}></img>
                    <img src={inst6}></img>
                </div>
            </section>

            <section className="section5">
                <div className="container-search-cursos">
                    <div className="title">
                        <h2 style={{ color: '#fff' }}>Encontre sua bolsa de estudos com até 80% de desconto!</h2>
                    </div>
                    <div className="box-pai-search">
                        <div className="btns-tipo-graduacao">
                            <button>Graduação</button>
                            <button>Pós Graduação</button>
                            <button>Cursos livres</button>
                        </div>

                        <div className="box-inputs-escolha">
                            <div className="label-box-escolha">
                                <label>Qual curso quer estudar?</label>
                                <input type={'text'} placeholder='Digite o nome do curso'></input>
                            </div>
                            <div className="label-box-escolha">
                                <label>Em que Estado?</label>
                                <select>
                                    <option>Selecione o estado</option>
                                    <option>São Paulo</option>
                                    <option>Rio de janeiro</option>
                                    <option>Minas Gerais</option>
                                    <option>Santa Catarina</option>
                                    <option>Rio Grande do Sul</option>

                                </select>
                            </div>
                            <div className="label-box-escolha">
                                <label>Escolha a instituição</label>
                                <select>
                                    <option>Selecione a instituição</option>
                                    <option>Fam</option>
                                    <option>Unicid</option>
                                    <option>Cruzeiro do Sul</option>
                                    <option>Uninove</option>
                                </select>
                            </div>
                        </div>
                        <div className="box-input-progress">
                            <div className="label-box-escolha">
                                <label>Até quanto pode pagar? R${valor},00</label>
                                <input min={100} max={5000} value={valor} onChange={(e) => setValor(e.target.value)} type={'range'}></input>
                            </div>
                            <div style={window.screen.width > 500 ? { display: "flex", width: "60%", alignItems: "end", gap: '20px' } : { display: "flex", width: "100%", justifyContent: "center", gap: '20px' }}>
                                <div className="label-box-chekbox">
                                    <input type={'checkbox'}></input>
                                    <label>Presencial</label>
                                </div>
                                <div className="label-box-chekbox">
                                    <input type={'checkbox'}></input>
                                    <label>Semi-Presencial</label>
                                </div>
                                <div className="label-box-chekbox">
                                    <input type={'checkbox'}></input>
                                    <label>Ead</label>
                                </div>
                            </div>
                        </div>
                        <button id="btn-encontrar">ENCONTRAR</button>
                    </div>

                </div>
                <div className="ilustracao-container-search">

                </div>
            </section>

            <Footer></Footer>



        </div>
    )
}