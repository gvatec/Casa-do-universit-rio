import React from "react";
import './style.css'
import logo from '../../assets/logo2.png'
import ilustracao from '../../assets/ilustracaomoca.png'
import { BsArrowLeft } from 'react-icons/bs'

export default function Login() {
    return (
        <div className="container-cadastro">
            <div className="container-cadastro">
                <div className="container-form">
                    <a href="/" className="btn-back"><BsArrowLeft color="#fff" size={30}></BsArrowLeft></a>
                    <img src={logo} alt='ilustração'></img>
                    <form className="form-cadastro">
                        <h2>Login</h2>

                        <div className="box-input-cadastro">
                            <input type={'text'} placeholder='Email'></input>

                        </div>

                        <div className="box-input-cadastro">
                            <input type={'password'} placeholder='Senha'></input>

                        </div>
                        <button id="btnsubmit" type="submit">Entrar</button>
                        <a href="">Esqueci minha senha.</a>
                    </form>
                </div>
                <div className="ilustracao-cad">
                    <h2>BOLSAS DE ESTUDO COM ATÉ 80% DE DESCONTO!😎</h2>
                    <img src={ilustracao}></img>
                </div>
            </div>

        </div>
    )
}