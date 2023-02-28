import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouterApp from "./services/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import api from "./services/api";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState('')
  const idsessao = JSON.parse(localStorage.getItem("sessionCasaUniversitarioLogin"))

  let timer = 10
  let interval


  if(idsessao != [] || idsessao != null){
    function Start() {
      interval = setInterval(() => {
        timer --
        //console.log(timer --)
        
        if(timer === 0){
          clearInterval(interval)
          api.delete(`/session/${idsessao.idsessao}`).then(() => {
            localStorage.setItem("sessionCasaUniversitarioLogin", JSON.stringify([]));
            window.location.href = "/";
          })
        }
      }, 1000);
  
    }
    Start();

  }




 





  return (
    <div className="App">
      <h1>{display}</h1>
      <BrowserRouter>
        <ToastContainer autoClose={2000} position="top-center"></ToastContainer>
        <RouterApp></RouterApp>
      </BrowserRouter>
    </div>
  );
}

export default App;


