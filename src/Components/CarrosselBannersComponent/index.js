import React, { useEffect } from "react";
import './style.css'

const CarrosselBannersComponent = (props) => {

    const Banners = [
        { id: 1, banner: 'https://img.imageboss.me/qb-content/width/1920/quality:95,dpr:1/ff35cf14-04a0-4af6-9648-feec2e2c6f48.png' },
        { id: 2, banner: 'https://img.imageboss.me/qb-content/width/1920/quality:95,dpr:1/dc949b6a-938d-4f63-aa1e-e2a72d15aae9.png' },
        { id: 3, banner: 'https://img.imageboss.me/qb-content/width/1920/quality:95,dpr:1/dc949b6a-938d-4f63-aa1e-e2a72d15aae9.png' }
    ]

    useEffect(() => {
        function slide1() {
            document.querySelectorAll('.banner')[0].setAttribute('style', `transform: translateX(0)`)
            document.querySelectorAll('.banner')[1].setAttribute('style', `transform: translateX(0)`)
            document.querySelectorAll('.banner')[2].setAttribute('style', `transform: translateX(0)`)
            setTimeout(() => {
                slide2()
            }, props.timer);
        } slide1()

        function slide2() {
            document.querySelectorAll('.banner')[0].setAttribute('style', `transform: translateX(-100%)`)
            document.querySelectorAll('.banner')[1].setAttribute('style', `transform: translateX(-100%)`)
            document.querySelectorAll('.banner')[2].setAttribute('style', `transform: translateX(-100%)`)
            setTimeout(() => {
                slide3()
            }, props.timer);
        }
        function slide3() {
            document.querySelectorAll('.banner')[0].setAttribute('style', `transform: translateX(-200%)`)
            document.querySelectorAll('.banner')[1].setAttribute('style', `transform: translateX(-200%)`)
            document.querySelectorAll('.banner')[2].setAttribute('style', `transform: translateX(-200%)`)
            setTimeout(() => {
                slide1()
            }, props.timer);
        }
    })


    return (
        <section className="containerCarrossel">
            <div className="banneritem">
                {
                    Banners.map(item => {
                        return (
                            <img key={item.id} className="banner" src={item.banner} alt='Banners'></img>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default CarrosselBannersComponent;