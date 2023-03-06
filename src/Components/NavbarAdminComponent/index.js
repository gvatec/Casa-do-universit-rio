import React, { useEffect } from "react";
import './style.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

export function NavbarAdminComponent() {

    useEffect(() => {
        const url = window.location.pathname

        switch (url) {
            case '/admin':
                document.querySelectorAll('.box-btn-nav-admin')[0].setAttribute('style', 'background:#4f8dff; transition:0.3s ease')

                break
            case '/admin/cadastrar-cursos':
                document.querySelectorAll('.box-btn-nav-admin')[1].setAttribute('style', 'background:#4f8dff; transition:0.3s ease')
                break
        }
    }, [])


    return (
        <div>
            <nav className="nav-admin">
                <div>
                    <img src={logo} alt='logo'></img>
                </div>
                <div className="box-btn-nav-admin">
                    <Link to="/admin">Dashboard</Link>
                </div>
                <div className="box-btn-nav-admin">
                    <Link to="/admin/cadastrar-cursos">Cadastro de Cursos</Link>
                </div>
            </nav>
        </div>
    )
}