import React, { useEffect, useState } from "react";
import './style.css'
import { bolsas } from "../Home";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function PageInfoCurso() {
    const { id } = useParams()

    const [curso, setCurso] = useState([])

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

                                <div className="cardBoxDetails">
                                    
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