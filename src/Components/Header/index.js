import React, { useEffect, useState } from "react";
import './style.css'
import logo from '../../assets/logo.png'
import { FiUser, FiMenu } from 'react-icons/fi'
import api from '../../services/api'


export default function Header() {

    const [user, setUser] = useState({})
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('sessionCasaUniversitarioLogin')))

    }, [])

    async function logout() {
        await api.delete(`/session/${user.id}`)
            .then(() => {
                localStorage.removeItem('sessionCasaUniversitarioLogin')
                window.location.reload();
            })
    }


    return (
        <header className="header">
            <div className="titlebolsa">
                <h2>BOLSAS DE ESTUDO DE ATÉ 85% DE DESCONTO!</h2>
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
                    <h3>✌️Olá {String(user.name).slice(0, 10)}...</h3>
                    <div className="btn-area-mobile">
                        <a href="/login">Entrar</a>
                        <a href="/cadastro">Cadastre-se</a>
                        <button>Faculdades</button>
                        <button>Cursos</button>
                        <button>Profissões</button>
                        <button>Ajuda</button>
                    </div>
                </nav> : ''}

                {!user ? <div className="user-nav">
                    <FiUser size={20} color="#fff"></FiUser>
                    <a href="/login">Entrar</a>
                    <a href="/cadastro">Cadastre-se</a>
                </div> :
                    <div className="profile-box">
                        <div onClick={() => setMenu(menu === false ? true : false)} className="profile-user"><FiUser color='#fff'></FiUser></div>
                        <span title={user.name}>✌️Olá {String(user.name).slice(0, 10)}...</span>
                    </div>}
            </nav>
            {menu !== false ?
                <div className="menu-profile">
                    <div className="profile-user"><FiUser color='#fff'></FiUser></div>
                    <a href="/minha-conta">Editar Perfil</a>
                    <button id="btnlogout" type="button" onClick={logout}>Sair</button>
                </div> : ''}
        </header>
    )
}