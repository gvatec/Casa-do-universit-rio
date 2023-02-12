import React from "react";
import './style.css'
import { BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import logo from '../../assets/logo2.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="redes-sociais-footer">
                <BsInstagram color="#fff" size={25}></BsInstagram>
                <BsFacebook color="#fff" size={25}></BsFacebook>
                <BsWhatsapp color="#fff" size={25}></BsWhatsapp>

                <label>Siga nossas redes sociais!</label>
            </div>

            <div className="box-nav-footer">
                <div className="box-btns-nav-footer">
                    <h4>Bolsas</h4>
                    <a>Cursos</a>
                    <a>Intituições</a>
                    <a>Cursos livres</a>
                    <a>Categorias</a>
                </div>
                <div className="box-btns-nav-footer">
                    <h4>Casa do Universitário</h4>
                    <a>Sobre-nos</a>
                    <a>Contatos</a>
                    <a>Política de privacidade</a>
                    <a>Perguntas frequentes</a>
                </div>
                <img src={logo}></img>
            </div>

            <div className="copy">
                <h4>Todos Direitos reservados á Casa do Universitário</h4>
                <p onClick={()=>window.location.href='https://tecwebcod.netlify.app/'}>Desenvolvido por TecWebCod</p>
            </div>
        </footer>
    )
}