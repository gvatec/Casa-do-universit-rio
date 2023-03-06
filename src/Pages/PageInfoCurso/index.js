import React, { useEffect, useState } from "react";
import './style.css'
import { bolsas } from "../Home";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { margin } from "@mui/system";
import UrlmapComponent from "../../Components/UrlmapComponent";

export default function PageInfoCurso() {
    const { id } = useParams()

    const [curso, setCurso] = useState([])
    const [modalidade, setModalidade] = useState('')

    useEffect(() => {
        setCurso(bolsas.filter(item => item.id == id))
        console.log(curso)
    }, [])


    return (
        <div className="container-page-info-curso">
            <Header></Header>

            <div className="containerCursoInfoDetails">
                {
                    curso.map(item => {
                        return (
                            <div key={item.id} className='cursoDetailBox'>
                                <div className="box-details-curso">
                                    <UrlmapComponent urlname={window.location.pathname} url={window.location.pathname}></UrlmapComponent>
                                    <img src={item.logo} alt='logo Universidade'></img>
                                    <h2>{item.title} na faculdade {item.instituicao}</h2>
                                    <div style={{ display: "flex", gap: "5px" }}>
                                        <strong style={{ fontWeight: "600" }}>Tipo:</strong>
                                        <p>{item.tipo}</p>
                                    </div>
                                    <div style={{ display: "flex", gap: "5px" }}>
                                        <strong style={{ fontWeight: "600" }}>Duração:</strong>
                                        <p>{item.duracao}</p>
                                    </div>
                                    <div className="Box-info-details-curso">
                                        <strong style={{ fontWeight: "600" }}>Sobre:</strong>
                                        <p>{item.sobre}</p>

                                    </div>
                                </div>

                                <div className="box-details-matricula">
                                    <div className="cardBoxDetails">
                                        <div style={{ width: "100%", display: 'flex', justifyContent: "center", marginBottom: "1rem" }}><img src={item.logo} alt='logo instituição'></img></div>
                                        <p>Escolha a Modalidade</p>
                                        <div className="modalidadebox">
                                            {item.modalidade.map(mod => {
                                                return (
                                                    <>
                                                        <button className="btnMod">{mod}</button>
                                                    </>
                                                )
                                            })}
                                        </div>
                                        <p style={{ fontWeight: "600", marginTop: "2rem", fontSize: "20px" }}>{item.localidades}/sp</p>
                                        <hr style={{ border: "1px solid silver", marginTop: "10px", marginBottom: "1rem" }}></hr>

                                        <h2>{Number(item.mensalidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                                        <br></br>
                                        <h2>Ultimas vagas!</h2>

                                        <button id="btnGarantirbolsa">Garantir esta bolsa</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <Footer></Footer>
        </div>
    )
}