import React, { useState } from "react";
import './style.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import UrlmapComponent from '../../Components/UrlmapComponent'

export default function MinhaConta() {

    const [fotoperfil, setFotoperfil] = useState('')
    return (
        <div className="container-minhaconta">
            <Header></Header>

            <div className="content-minhaconta">
                <div className="title-minhaconta">
                    <UrlmapComponent url={window.location.pathname} urlname={window.location.pathname}></UrlmapComponent>
                    <h1>Meus Dados</h1><br></br>
                    <p>Confira e atualize seus dados para agilizar a conquista da sua bolsa.</p>
                </div>

                <div className="box-forms-dados">
                    <h2>Dados Pessoais</h2>
                    <div className="profile-minhaconta">
                        <img src={''} alt='perfil' id="img-profile"></img>
                        <div className="input-file-minhaconta">
                            <input type={'file'} ></input>
                            <label>Alterar foto</label>
                        </div>
                    </div>
                    <div className="box-input-label">
                        <div className="input-label">
                            <label>Nome Completo</label>
                            <input type='text'></input>
                        </div>
                        <div className="input-label">
                            <label>Data de Nascimento</label>
                            <input type='date'></input>
                        </div>
                    </div>
                    <div className="box-input-label">
                        <div className="input-label">
                            <label>Cpf</label>
                            <input type='text'></input>
                        </div>
                        <div className="input-label">
                            <label>Rg</label>
                            <input type='text'></input>
                        </div>
                    </div>
                    <div className="box-input-label">
                        <div className="input-label">
                            <label>Nome da Mãe</label>
                            <input type='text'></input>
                        </div>

                    </div>
                </div>
                <div className="box-forms-dados">
                    <h2>Informações de contato</h2>
                    <div className="box-input-label">
                        <div className="input-label">
                            <label>E-mail</label>
                            <input type='email'></input>
                        </div>
                        <div className="input-label">
                            <label>Telefone</label>
                            <input type='tel'></input>
                        </div>
                    </div>
                </div>
                <div className="box-forms-dados">
                    <h2>Endereço</h2>
                    <div className="box-input-label">
                        <div className="input-label">
                            <label>Cep</label>
                            <input type='text'></input>
                        </div>
                    </div>
                </div>
               <button id="btnsalvarminhaconta">Salvar</button>
            </div>


            <Footer></Footer>
        </div>
    )
}