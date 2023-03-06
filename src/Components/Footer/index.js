import React from "react";
import "./style.css";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import logo from "../../assets/logo2.png";

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
          <a>Instituições</a>
          <a>Cursos livres</a>
          <a>Categorias</a>
        </div>
        <div className="box-btns-nav-footer">
          <h4>Casa do Universitário</h4>
          <a href="#">Sobre-nos</a>
          <a href="#">Contatos</a>
          <a href="#">Política de privacidade</a>
          <a href="#">Perguntas frequentes</a>
        </div>
        <img src={logo}></img>
      </div>

      <div className="copy">
        <h4>©️2023 Todos Direitos reservados á Casa do Universitário</h4>
        <p onClick={() => (window.location.href = "https://tecwebcod.netlify.app/")}>
          Desenvolvido por TecWebCod
        </p>
      </div>
    </footer>
  );
}
