import React, { useState } from "react";
import './style.css'
import { GoMortarBoard } from 'react-icons/go'
import { MdWork } from 'react-icons/md'
import { FaPencilRuler,FaTools } from 'react-icons/fa'

const SearchBoxComponent = () => {

    const [valor, setValor] = useState(100)

    return (
        <div className="container-search-cursos">
            {/*  <div className="title">
                <h2 style={{ color: '#fff' }}>Encontre sua bolsa de estudos com até 80% de desconto!</h2>
    </div>*/}
            <div className="box-pai-search">
                <div className="btns-tipo-graduacao">
                    <button><GoMortarBoard color='#fff'></GoMortarBoard>Graduação</button>
                    <button><MdWork color="#fff"></MdWork>Pós-Graduação</button>
                    <button><FaPencilRuler color="#fff"></FaPencilRuler>Cursos livres</button>
                    <button><FaTools color="#fff"></FaTools>Cursos Técnicos</button>
                </div>

                <div className="box-inputs-escolha">
                    <div className="label-box-escolha">
                        <label>Qual curso quer estudar?</label>
                        <input type={'text'} placeholder='Digite o nome do curso'></input>
                    </div>
                    <div className="label-box-escolha">
                        <label>Em que Estado?</label>
                        <select>
                            <option>Selecione o estado</option>
                            <option>São Paulo</option>
                            <option>Rio de janeiro</option>
                            <option>Minas Gerais</option>
                            <option>Santa Catarina</option>
                            <option>Rio Grande do Sul</option>
                        </select>
                    </div>
                    <div className="label-box-escolha">
                        <label>Escolha a instituição</label>
                        <select>
                            <option>Selecione a instituição</option>
                            <option>Fam</option>
                            <option>Unicid</option>
                            <option>Cruzeiro do Sul</option>
                            <option>Uninove</option>
                        </select>
                    </div>
                </div>
                <div className="box-input-progress">
                    <div className="label-box-escolha">
                        <label>Até quanto pode pagar? R${valor},00</label>
                        <input min={100} max={5000} value={valor} onChange={(e) => setValor(e.target.value)} type={'range'}></input>
                    </div>
                    <div style={window.screen.width > 500 ? { display: "flex", width: "60%", alignItems: "end", gap: '20px' } : { display: "flex", width: "100%", justifyContent: "center", gap: '20px' }}>
                        <div className="label-box-chekbox">
                            <input type={'checkbox'}></input>
                            <label>Presencial</label>
                        </div>
                        <div className="label-box-chekbox">
                            <input type={'checkbox'}></input>
                            <label>Semi-Presencial</label>
                        </div>
                        <div className="label-box-chekbox">
                            <input type={'checkbox'}></input>
                            <label>Ead</label>
                        </div>
                    </div>
                </div>
                <button id="btn-encontrar">ENCONTRAR</button>
            </div>

        </div>
    )
}

export default SearchBoxComponent;