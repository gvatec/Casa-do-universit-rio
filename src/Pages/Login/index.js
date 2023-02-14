import React from "react";
import './style.css'
import logo from '../../assets/logo2.png'
import ilustracao from '../../assets/ilustracaomoca.png'


export default function Login() {
    return (
        <div className="container-cadastro">
            <div className="container-form">
                <img src={logo}></img>
                <form className="form-cadastro">
                    <h2>Cadastre-se</h2>
                    <div className="box-input-cadastro">
                        <input type={'text'} placeholder='Nome'></input>
                        <input type={'text'} placeholder='Sobrenome'></input>
                    </div>
                    <div className="box-input-cadastro">
                        <input type={'text'} placeholder='Email'></input>
                        <input type={'date'} ></input>
                    </div>
                    <input type={'text'} placeholder='telefone'></input>
                    <div className="box-input-cadastro">
                        <input type={'password'} placeholder='Senha'></input>
                        <input type={'text'} placeholder='Repita a senha' ></input>
                    </div>
                    <button id="btnsubmit" type="submit">Cadastre-se</button>
                </form>
            </div>
            <div className="ilustracao-cad">
                <h2>BOLSAS DE ESTUDO COM ATÉ 80% DE DESCONTO!😎</h2>
                <img src={ilustracao}></img>
            </div>
        </div>
    )
}