import React, { useState } from "react";
import '../Cadastro/style.css'
import logo from '../../assets/logo2.png'
import ilustracao from '../../assets/ilustracaomoca.png'
import { BsArrowLeft } from 'react-icons/bs'
import api from '../../services/api'




const Cadastro = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [password, setPassword] = useState('')
    const [repetpassword, setRepetpassword] = useState('')
    const [datanascimento, setDatanascimento] = useState('')


    async function singup(e) {
        e.preventDefault();

        if (password !== repetpassword) {
            document.getElementById('error').setAttribute('style', 'color:red;transition: color 0.5s ease;font-Weight:600')
            document.getElementById('error').innerText = 'Senhas não conferem!'
            document.querySelector('.error').setAttribute('style', 'border:1px solid red')
            setTimeout(() => {
                document.getElementById('error').setAttribute('style', 'color:#000')
                document.getElementById('error').innerText = ''
                document.querySelectorAll('.error').setAttribute('style', 'border:0')
            }, 5000);
            return
        }

        await api.post('/users', {
            name: nome,
            email: email,
            telefone: telefone,
            datanascimento: datanascimento,
            password: password
        })
            .then(() => {
                document.getElementById('error').setAttribute('style', 'color:green;transition: color background 0.5s ease;font-Weight:600;background:rgb(172, 255, 172);padding:5px;')
                document.getElementById('error').innerText = 'Cadastro realizado com Sucesso!'
                setTimeout(() => {
                    window.location.href = '/login'
                }, 3000);
            })
    }


    return (
        <div className="container-cadastro">
            <div className="container-form">
                <a href="/" className="btn-back"><BsArrowLeft color="#fff"
                    size={30}></BsArrowLeft></a>
                <img src={logo} alt='logo'></img>
                <form className="form-cadastro" onSubmit={singup}>
                    <h2>Cadastre-se</h2>
                    <div className="box-input-cadastro">
                        <input type={'text'} name='name' onChange={(e) => setNome(e.target.value)} placeholder='Nome Completo'></input>
                    </div>
                    <div className="box-input-cadastro">
                        <input type={'text'} name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email'></input>
                        <input type={'date'} name='data' onChange={(e) => setDatanascimento(e.target.value)}></input>
                    </div>
                    <input type={'text'} onChange={(e) => setTelefone(e.target.value)} placeholder='telefone'></input>
                    <div className="box-input-cadastro">
                        <input name='password' className="error" type={'password'} onChange={(e) => setPassword(e.target.value)} placeholder='Senha'></input>
                        <input className="error" type={'password'} onChange={(e) => setRepetpassword(e.target.value)} placeholder='Repita a senha' ></input>
                    </div>
                    <span id="error"></span>
                    <button id="btnsubmit" type="submit">Cadastre-se</button>
                </form>
            </div>
            <div className="ilustracao-cad">
                <h2>BOLSAS DE ESTUDO COM ATÉ 85% DE DESCONTO!😎</h2>
                <img src={ilustracao} alt='ilustração'></img>
            </div>
        </div>
    )
}
export default Cadastro;

