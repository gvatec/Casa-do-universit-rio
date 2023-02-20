import React from "react";
import './style.css'
import { bolsas } from "../../Pages/Home";

const BolsasListComponent = () => {
    return (
        <div className="bolsasInteressantes">
            <h2>Bolsas interessantes para você</h2>
            <div className="carrosselSlideBolsas">
                {
                    bolsas.map(item => {
                        return (
                            <div key={item.id}>
                                <div className="bolsaItem" onClick={() => window.location.href=`/curso/${item.id}`}>
                                    <img src={item.logo} alt='logo Universidade'></img>
                                    <h2>{item.title}</h2>
                                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: 'space-between' }}>
                                        <div className="box-modalidades-localidades">
                                            {item.modalidade.map(mod => {
                                                return (
                                                    <p>{mod}</p>
                                                )
                                            })}
                                            <p>{item.localidades}</p>
                                        </div>
                                        <h3 style={{ fontWeight: "600" }}>R${item.mensalidade},00</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BolsasListComponent;