import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import UrlmapComponent from "../../Components/UrlmapComponent";
import api from "../../services/api";

export default function MinhaConta() {
  const [fotopreview, setFotopreview] = useState("");
  const [fotopreview2, setFotopreview2] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [datanascimento, setDatanascimento] = useState("");
  const [rg, setRg] = useState("");
  const [nomemae, setNomemae] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([JSON.parse(localStorage.getItem("sessionCasaUniversitarioLogin"))]);
  }, []);


  useEffect(() => {
    if (data.length !== 0) {
      api.get(`/files/${data.map((item) => item.urlfoto)[0]}`).then((value) => {
        setFotopreview(value.config.baseURL + "files/" + data.map((item) => item.urlfoto)[0]);

      });
      setNome(data.map((item) => item.name)[0])
      setEmail(data.map((item) => item.email)[0])
      setTelefone(data.map((item) => item.telefone)[0])
      setNomemae(data.map((item) => item.nomemae)[0])
      setRg(data.map((item) => item.rg)[0])
      setCpf(data.map((item) => item.cpf)[0])
      setCep(data.map((item) => item.cep)[0])
    }
  }, [data]);


  async function upload(e) {
    const foto1url = e.target.files[0];
    setFotopreview(URL.createObjectURL(foto1url));
    setFotopreview2(URL.createObjectURL(foto1url));

    const formdata1 = new FormData();
    formdata1.append("file", foto1url);

    await api.put(`/profile/${data.map((item) => item.id)[0]}`, formdata1)
      .then(() => {
        let dateUser = {
          id: data.map((item) => item.id)[0],
          name: data.map((item) => item.name)[0],
          email: data.map((item) => item.email)[0],
          telefone: data.map((item) => item.telefone)[0],
          datanascimento: data.map((item) => item.datanascimento)[0],
          nomemae: data.map((item) => item.nomemae)[0],
          rg: data.map((item) => item.rg)[0],
          cpf: data.map((item) => item.cpf)[0],
          cep: data.map((item) => item.cep)[0],
          urlfoto: foto1url.name,
        };
        localStorage.setItem("sessionCasaUniversitarioLogin", JSON.stringify(dateUser));
        alert('imagem atualziada com sucesso')
        window.location.reload();
      })
      .catch((err)=>{
        console.log(err)
      })

  }

  async function updateprofile() {

    const formdata = new FormData();
    formdata.append("name", nome == "" ? data.map((item) => item.name)[0] : nome);
    formdata.append("email", email == "" ? data.map((item) => item.email)[0] : email);
    formdata.append("telefone", telefone == "" ? data.map((item) => item.telefone)[0] : telefone);
    formdata.append("nomemae", nomemae == "" ? data.map((item) => item.nomemae)[0] : nomemae);
    formdata.append("datanascimento", datanascimento == "" ? data.map((item) => item.datanascimento)[0] : datanascimento);
    formdata.append("rg", rg == "" ? data.map((item) => item.rg)[0] : rg);
    formdata.append("cpf", cpf == "" ? data.map((item) => item.cpf)[0] : cpf);
    formdata.append("cep", cep == "" ? data.map((item) => item.cep)[0] : cep);

    await api
      .put(`/users/${data.map((item) => item.id)[0]}`, formdata)
      .then((value) => {
        let dateUser = {
          id: value.data.id,
          name: value.data.name,
          email: value.data.email,
          telefone: value.data.telefone,
          datanascimento: value.data.datanascimento,
          nomemae: value.data.nomemae,
          rg: value.data.rg,
          cpf: value.data.cpf,
          cep: value.data.cep,
          urlfoto: data.map((item) => item.urlfoto)[0],
        };
        //console.log(value)
        localStorage.setItem("sessionCasaUniversitarioLogin", JSON.stringify(dateUser));
        alert("atualizado com sucesso");
       // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert('Ops, tente novamente mais tarde!')
      });
  }

  return (
    <div className="container-minhaconta">
      <Header></Header>

      <div className="content-minhaconta">
        <div className="title-minhaconta">
          <UrlmapComponent
            url={window.location.pathname}
            urlname={window.location.pathname}
          ></UrlmapComponent>
          <h1>Meus Dados</h1>
          <br></br>
          <p>Confira e atualize seus dados para agilizar a conquista da sua bolsa.</p>
        </div>

        <div className="box-forms-dados">
          <h2>Dados Pessoais</h2>
          <div className="profile-minhaconta">
            <img
              src={fotopreview2 == "" ? fotopreview : fotopreview2}
              alt="perfil"
              id="img-profile"
            ></img>
            <div className="input-file-minhaconta">
              <input onChange={upload} type={"file"}></input>
              <label>Alterar foto</label>
            </div>
          </div>
          <div className="box-input-label">
            <div className="input-label">
              <label>Nome Completo</label>
              <input value={nome} onChange={(e) => setNome(e.target.value)} type="text"></input>
            </div>
            <div className="input-label">
              <label>Data de Nascimento</label>
              <input onChange={(e) => setDatanascimento(e.target.value)} type="date"></input>
            </div>
          </div>
          <div className="box-input-label">
            <div className="input-label">
              <label>Cpf</label>
              <input value={cpf} className="err" onChange={(e) => setCpf(e.target.value)} type="text"></input>
            </div>
            <div className="input-label">
              <label>Rg</label>
              <input value={rg} className="err" onChange={(e) => setRg(e.target.value)} type="text"></input>
            </div>
          </div>
          <div className="box-input-label">
            <div className="input-label">
              <label>Nome da Mãe</label>
              <input
                value={nomemae}
                onChange={(e) => setNomemae(e.target.value)}
                type="text"
              ></input>
            </div>
          </div>
        </div>
        <div className="box-forms-dados">
          <h2>Informações de contato</h2>
          <div className="box-input-label">
            <div className="input-label">
              <label>E-mail</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"></input>
            </div>
            <div className="input-label">
              <label>Telefone</label>
              <input
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                type="tel"
              ></input>
            </div>
          </div>
        </div>
        <div className="box-forms-dados">
          <h2>Endereço</h2>
          <div className="box-input-label">
            <div className="input-label">
              <label>Cep</label>
              <input value={cep} onChange={(e) => setCep(e.target.value)} type="text"></input>
            </div>
          </div>
        </div>
        <button onClick={updateprofile} id="btnsalvarminhaconta">
          Salvar
        </button>
      </div>

      <Footer></Footer>
    </div>
  );
}
