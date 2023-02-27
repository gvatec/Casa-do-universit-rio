import React, { useEffect, useState, useSyncExternalStore } from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import { FiUser, FiMenu } from "react-icons/fi";
import api from "../../services/api";
import { bolsas } from "../../Pages/Home";

export default function Header() {
  const [user, setUser] = useState([]);
  const [menu, setMenu] = useState(false);
  const [modalFaculdades, setModalFaculdades] = useState(false);
  const [modalcursos, setModalcursos] = useState(false);
  const [modalprofissoes, setModalprofissoes] = useState(false);
  const [load, setLoad] = useState(true);
  const [fotopreview, setFotopreview] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([JSON.parse(localStorage.getItem("sessionCasaUniversitarioLogin"))]);
  }, []);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("sessionCasaUniversitarioLogin")) || []);
    if (user.length !== 0) {
      api.get(`/files/${data.map((item) => item.urlfoto)[0]}`).then((value) => {
        setFotopreview(value.config.baseURL + "files/" + data.map((item) => item.urlfoto)[0]);
        setLoad(false);
      });
    }
    console.log(user.length);
  }, [data]);

  async function logout() {
    await api.delete(`/session/${user.idsessao}`).then(() => {
      localStorage.setItem("sessionCasaUniversitarioLogin", JSON.stringify([]));
      window.location.href = "/";
    });
  }

  function showMenu1() {
    document.querySelectorAll('.btnSelectedNav')[0].setAttribute('style', 'background:#fff;padding:10px;color:#1d4a9c')
    document.querySelectorAll('.btnSelectedNav')[1].setAttribute('style', 'background:transparent;')
    document.querySelectorAll('.btnSelectedNav')[2].setAttribute('style', 'background:transparent;')
    setModalFaculdades(true)
    setModalcursos(false)
    setModalprofissoes(false)
  }
  function showMenu2() {
    document.querySelectorAll('.btnSelectedNav')[1].setAttribute('style', 'background:#fff;padding:10px;color:#1d4a9c')
    document.querySelectorAll('.btnSelectedNav')[0].setAttribute('style', 'background:transparent;')
    document.querySelectorAll('.btnSelectedNav')[2].setAttribute('style', 'background:transparent;')

    setModalcursos(true)
    setModalFaculdades(false)
    setModalprofissoes(false)
  }
  function showMenu3() {
    document.querySelectorAll('.btnSelectedNav')[2].setAttribute('style', 'background:#fff;padding:10px;color:#1d4a9c')
    document.querySelectorAll('.btnSelectedNav')[1].setAttribute('style', 'background:transparent;')
    document.querySelectorAll('.btnSelectedNav')[0].setAttribute('style', 'background:transparent;')

    setModalprofissoes(true)
    setModalcursos(false)
    setModalFaculdades(false)
  }


  return (
    <header className="header">
      <div className="titlebolsa">
        <h2>BOLSAS DE ESTUDO DE ATÉ 85% DE DESCONTO!</h2>
      </div>
      <nav className="header-main">
        <img src={logo} onClick={() => (window.location.href = "/")}></img>

        <div className="nav-btns">
          <button className="btnSelectedNav" onMouseEnter={showMenu1}>Faculdades</button>
          <button className="btnSelectedNav" onMouseEnter={showMenu2}>Cursos</button>
          <button className="btnSelectedNav" onMouseEnter={showMenu3}>Profissões</button>
          <button>Ajuda</button>
        </div>
        {window.screen.width > 500 ? <input type={"search"} placeholder="Pesquisar cursos ou instituições"></input> : <input style={{ visibility: 'hidden' }} type={"search"} placeholder="Pesquisar cursos ou instituições"></input>}
        {window.screen.width < 500 ? (
          <button
            onClick={() =>
              document.querySelector(".menu-mobile").setAttribute("style", "display:flex")
            }
            id="menubtnmobile"
          >
            <FiMenu color={"#fff"} size={30}></FiMenu>
          </button>
        ) : (
          ""
        )}
        {window.screen.width < 500 ? (
          <nav className="menu-mobile">
            <button
              id="close-btn-mobile"
              onClick={() =>
                document.querySelector(".menu-mobile").setAttribute("style", "display:none")
              }
            >
              X
            </button>
            {user.length == 0 ?
              <div className="btn-area-mobile">
                <a href="/login">Entrar</a>
                <a href="/cadastro">Cadastre-se</a>
                <button>Faculdades</button>
                <button>Cursos</button>
                <button>Profissões</button>
                <button>Ajuda</button>
              </div> :
              <div className="btn-area-mobile">
                <img onClick={() => window.location.href = '/minha-conta'} style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover" }} src={fotopreview} alt="profile user"></img>
                <h3 style={{ marginBottom: "2rem" }}>✌️Olá {user.name}</h3>
                <button onClick={() => window.location.href = '/minha-conta'}>Editar perfil</button>
                <button>Faculdades</button>
                <button>Cursos</button>
                <button>Profissões</button>
                <button>Ajuda</button>
                <button id="btnlogout" type="button" onClick={logout}>
                  sair
                </button>
              </div>
            }
          </nav>
        ) : (
          ""
        )}

        {user.length == 0 ? (
          <div className="user-nav">
            <FiUser size={20} color="#fff"></FiUser>
            <a href="/login">Entrar</a>
            <a href="/cadastro">Cadastre-se</a>
          </div>
        ) : (
          <div className="profile-box">
            <div onMouseEnter={() => setMenu(menu === false ? true : false)} className="profile-user">
              {fotopreview == "" ? (
                <FiUser color={"#fff"} size={35}></FiUser>
              ) : (
                <img style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }} src={fotopreview} alt="profile user"></img>
              )}
            </div>
            <span title={user.name}>✌️Olá {String(user.name).slice(0, 10)}...</span>

          </div>
        )}
      </nav>
      {menu !== false ? (
        <div onMouseLeave={() => setMenu(false)} className="menu-profile">
          <div className="profile-user">
            {fotopreview == "" ? (
              <FiUser color="#fff" size={35}></FiUser>
            ) : (
              <img onClick={() => window.location.href = '/minha-conta'} style={{ width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover" }} src={fotopreview} alt="profile user"></img>
            )}
          </div>
          <a href="/minha-conta">Editar Perfil</a>
          <div style={{
            display: "flex",
            flexDirection: "column",
            textAlign: 'start',
            marginTop: "2rem"
          }}>
            <a href="#">Faculdades</a>
            <a href="#">Cursos</a>
            <a href="#">Profissões</a>
            <a href="#">Ajuda</a>
          </div>
          <button id="btnlogout" type="button" onClick={logout}>
            sair
          </button>
        </div>
      ) : (
        ""
      )}


      {modalFaculdades != false ? <nav onMouseLeave={() => setModalFaculdades(false)} className="container-nav-menu">
        <div className="title-nav-menu"><h2>Lista de Faculdades</h2> <a href="#">ver tudo</a></div>
        <div className="content-menu-nav">
          <button className="btn-nav-btn">Faculdades com bolsa de estudos</button>
          <button className="btn-nav-btn">Faculdades na minha cidade</button>
        </div>
      </nav> : ''}
      {modalcursos != false ? <nav onMouseLeave={() => setModalcursos(false)} className="container-nav-menu">
        <div className="title-nav-menu"><h2>Lista de Cursos</h2> <a href="#">ver tudo</a></div>
        <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "4rem" }}>
          <div className="box-group-nav-btn">
            <h3>Graduação</h3>
            <button className="btn-nav-btn">Cursos de Graduação</button>
            <button className="btn-nav-btn">Cursos tecnólogos</button>
            <button className="btn-nav-btn">Cursos bacharelado</button>
          </div>
          <div className="box-group-nav-btn">
            <h3>Pós-Graduação</h3>
            <button className="btn-nav-btn">Cursos de Graduação</button>
            <button className="btn-nav-btn">Cursos tecnólogos</button>
            <button className="btn-nav-btn">Cursos bacharelado</button>
          </div>
          <div className="box-group-nav-btn">
            <h3>Cursos livres</h3>
            <button className="btn-nav-btn">Cursos de Graduação</button>
            <button className="btn-nav-btn">Cursos tecnólogos</button>
            <button className="btn-nav-btn">Cursos bacharelado</button>
          </div>
        </div>
      </nav> : ''}
      {modalprofissoes != false ? <nav onMouseLeave={() => setModalprofissoes(false)} className="container-nav-menu">
        <div className="title-nav-menu"><h2>Lista de Profissões</h2> <a href="#">ver tudo</a></div>
        <div className="content-menu-nav">
          <button className="btn-nav-btn">Maiores salários</button>
        </div>
      </nav> : ''}

    </header>
  );
}
