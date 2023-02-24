import React, { useEffect, useState } from "react";
import './style.css'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import inst1 from '../../assets/anhe.png'
import inst2 from '../../assets/anha.png'
import inst3 from '../../assets/cru.png'
import inst4 from '../../assets/unici.png'
import inst5 from '../../assets/esta.png'
import inst6 from '../../assets/uno.png'
import SearchBoxComponent from "../../Components/SearchBoxComponent";
import CarrosselBannersComponent from "../../Components/CarrosselBannersComponent";
import { BsWhatsapp } from "react-icons/bs";
import BolsasListComponent from "../../Components/BolsasListComponent";

const bolsas = [
    { id: 1, instituicao: 'impacta', duracao: '4 semestres', tipo: 'tecnólogo', sobre: 'O curso de Análise e Desenvolvimento de Sistemas forma profissionais capazes de desenvolver, analisar, projetar, implementar e atualizar sistemas de informação para diversos setores de atividades.', logo: 'https://qb-assets.querobolsa.com.br/logos/colorido/large/20/logo_1489432740.png', title: "Análise e desenvolvimento de sistemas", localidades: ['são paulo'], modalidade: ['ead', 'presencial', 'semi-presencial'], mensalidade: 250.00 },
    { id: 2, instituicao: 'impacta', duracao: '4 semestres', tipo: 'tecnólogo', sobre: 'O curso de Análise e Desenvolvimento de Sistemas forma profissionais capazes de desenvolver, analisar, projetar, implementar e atualizar sistemas de informação para diversos setores de atividades.', logo: 'https://qb-assets.querobolsa.com.br/logos/colorido/large/20/logo_1489432740.png', title: "Análise e desenvolvimento de sistemas", localidades: ['são paulo'], modalidade: ['ead', 'presencial', 'semi-presencial'], mensalidade: 250.00 },
    { id: 3, instituicao: 'impacta', duracao: '4 semestres', tipo: 'tecnólogo', sobre: 'O curso de Análise e Desenvolvimento de Sistemas forma profissionais capazes de desenvolver, analisar, projetar, implementar e atualizar sistemas de informação para diversos setores de atividades.', logo: 'https://qb-assets.querobolsa.com.br/logos/colorido/large/20/logo_1489432740.png', title: "Análise e desenvolvimento de sistemas", localidades: ['são paulo'], modalidade: ['ead', 'presencial', 'semi-presencial'], mensalidade: 250.00 },
    { id: 4, instituicao: 'impacta', duracao: '4 semestres', tipo: 'tecnólogo', sobre: 'O curso de Análise e Desenvolvimento de Sistemas forma profissionais capazes de desenvolver, analisar, projetar, implementar e atualizar sistemas de informação para diversos setores de atividades.', logo: 'https://qb-assets.querobolsa.com.br/logos/colorido/large/20/logo_1489432740.png', title: "Análise e desenvolvimento de sistemas", localidades: ['são paulo'], modalidade: ['ead', 'presencial', 'semi-presencial'], mensalidade: 250.00 },
    { id: 5, instituicao: 'impacta', duracao: '4 semestres', tipo: 'tecnólogo', sobre: 'O curso de Análise e Desenvolvimento de Sistemas forma profissionais capazes de desenvolver, analisar, projetar, implementar e atualizar sistemas de informação para diversos setores de atividades.', logo: 'https://qb-assets.querobolsa.com.br/logos/colorido/large/20/logo_1489432740.png', title: "Análise e desenvolvimento de sistemas", localidades: ['são paulo'], modalidade: ['ead', 'presencial', 'semi-presencial'], mensalidade: 250.00 },
]
export { bolsas }



export default function Home() {


    return (
        <div className="container-home">
            <Header></Header>
            <section className="section1">
                <CarrosselBannersComponent></CarrosselBannersComponent>
                <SearchBoxComponent></SearchBoxComponent>
            </section>

            <section className="section2">
                <BolsasListComponent></BolsasListComponent>
            </section>


            <section className="section4">
                <div className="title">
                    <h2>Intituições Parceiras</h2>
                </div>

                <div className="container-instituicoes">
                    <img src={inst1}></img>
                    <img src={inst2}></img>
                    <img src={inst3}></img>
                    <img src={inst4}></img>
                    <img src={inst5}></img>
                    <img src={inst6}></img>
                </div>
            </section>

            <section className="section5">
                <div className="title">
                    <h2>Novidades Casa do Universitário</h2>
                </div>
                <div className="container-novidades">
                    <div className="novidade1"></div>
                    <div className="container-novidade2e3">
                        <div className="novidade23"></div>
                        <div className="novidade23"></div>
                    </div>
                </div>
            </section>
            <button id="btnwhats"><BsWhatsapp size={40} color='#fff'></BsWhatsapp></button>
            <Footer></Footer>
        </div>
    )
}