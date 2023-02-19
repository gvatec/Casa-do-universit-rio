import React, { useState } from "react";
import './style.css'
import logo from '../../assets/logo2.png'
import ilustracao from '../../assets/ilustracaomoca.png'
import { BsArrowLeft } from 'react-icons/bs'
import api from "../../services/api";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login(e) {
        e.preventDefault();

        await api.post('/session', {
            email: email,
            password: password
        })
            .then((data) => {
                document.getElementById('errorORsucsses').setAttribute('style', 'color:green')
                document.getElementById('errorORsucsses').innerText = 'Login efetuado com sucesso!'

                let dateUser = {
                    id: data.data.iduser,
                    name: data.data.name,
                    email: data.data.email,
                    telefone: data.data.telefone,
                    datanascimento: data.data.datanascimento,
                }

                //console.log(data.data.name)
                localStorage.setItem('sessionCasaUniversitarioLogin', JSON.stringify(dateUser))

                setTimeout(() => {
                    window.location.href = '/'
                }, 3000);
            })
            .catch(() => {
                document.getElementById('errorORsucsses').setAttribute('style', 'color:red')
                document.getElementById('errorORsucsses').innerText = 'Dados incorretos ou não cadastrados!'
            })
    }

    return (
        <div className="container-cadastro">
            <div className="container-cadastro">
                <div className="container-form">
                    <a href="/" className="btn-back"><BsArrowLeft color="#fff" size={30}></BsArrowLeft></a>
                    <img src={logo} alt='ilustração'></img>
                    <form className="form-cadastro" onSubmit={login}>
                        <h2>Login</h2>

                        <div className="box-input-cadastro">
                            <input onChange={(e) => setEmail(e.target.value)} type={'email'} placeholder='Email'></input>
                        </div>

                        <div className="box-input-cadastro">
                            <input onChange={(e) => setPassword(e.target.value)} type={'password'} placeholder='Senha'></input>
                        </div>
                        <span id="errorORsucsses"></span>
                        <button id="btnsubmit" type="submit">Entrar</button>
                        <a href="">Esqueci minha senha.</a>
                    </form>
                </div>
                <div className="ilustracao-cad">
                    <h2>BOLSAS DE ESTUDO COM ATÉ 85% DE DESCONTO!😎</h2>
                    <img src={ilustracao} alt='ilustração'></img>
                </div>
            </div>

        </div>
    )
}