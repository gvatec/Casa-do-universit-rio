import React from "react";
import '../Cadastro/style.css'
import logo from '../../assets/logo2.png'
import ilustracao from '../../assets/ilustracaomoca.png'

const Cadastro = () => {
    return (
        <div className="container-cadastro">
            <div className="container-form">
                <img src={logo}></img>
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
    )
}
export default Cadastro;