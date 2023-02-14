import React from "react";
import './style.css'
import logo from '../../assets/logo.png'
import { FiUser, FiMenu } from 'react-icons/fi'

export default function Header() {
    return (
        <header className="header">
            <div className="titlebolsa">
                <h2>BOLSAS DE ESTUDO DE ATÉ 80% DE DESCONTO!</h2>
            </div>
            <nav className="header-main">
                <img src={logo} onClick={() => window.location.href = '/'}></img>

                <div className="nav-btns">
                    <button>Faculdades</button>
                    <button>Cursos</button>
                    <button>Profissões</button>
                    <button>Ajuda</button>
                </div>
                <input type={'search'} placeholder='Pesquisar cursos ou instituições'></input>
                {window.screen.width < 500 ? <button onClick={() => document.querySelector('.menu-mobile').setAttribute('style', 'display:flex')} id="menubtnmobile"><FiMenu color="#fff" size={35}></FiMenu></button> : ''}
                {window.screen.width < 500 ? <nav className="menu-mobile">
                    <button id="close-btn-mobile" onClick={() => document.querySelector('.menu-mobile').setAttribute('style', 'display:none')}>X</button>
                    <h3>✌️Olá casadouniversitário@gmail.com</h3>
                    <div className="btn-area-mobile">
                    <a href="/login">Entrar</a>
                    <a href="/cadastro">Cadastre-se</a>
                        <button>Faculdades</button>
                        <button>Cursos</button>
                        <button>Profissões</button>
                        <button>Ajuda</button>
                    </div>
                </nav> : ''}

                <div className="user-nav">
                    <FiUser size={20} color="#fff"></FiUser>
                    <a href="/login">Entrar</a>
                    <a href="/cadastro">Cadastre-se</a>
                </div>
            </nav>
        </header>
    )
}