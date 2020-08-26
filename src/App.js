import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import Header from "./component/Header";
import shirt from './assets/t-shirt.png'
import {ReactComponent as Facebok} from "./assets/facebook.svg";
import {ReactComponent as Instagram} from "./assets/instagram-logo.svg";
import {ReactComponent as NextArrow} from "./assets/next.svg";
import {ReactComponent as DownArrow} from "./assets/down-arrow.svg";
import {ReactComponent as PrevArrow} from "./assets/left-arrow.svg";
import {ReactComponent as RightArrow} from "./assets/right-arrow.svg";

import {Link} from "react-router-dom";
import gsap, {Power1, TimelineMax, TweenLite} from 'gsap'
import {CSSRulePlugin} from "gsap/CSSRulePlugin";


function App() {

    let tl = gsap.timeline();
    gsap.registerPlugin(CSSRulePlugin);

    useEffect(() => {

        const tlCan = new TimelineMax({repeat: -1});
        tlCan
            //move top left
            .to('.img > img', 3, {y: '-=30', x: '+=20', rotation: '-=5', ease: Power1.easeInOut})

            //move down right
            .to('.img > img', 2, {y: '+=30', x: '-=20', rotation: '-=5', ease: Power1.easeInOut})


            .to('.img > img', 3, {y: '-=20', rotation: '+=5', ease: Power1.easeInOut})

            .to('.img > img', 3, {y: '+=20', rotation: '+=5', ease: Power1.easeInOut})


            .to('.img > imgn', 3, {y: '-=50', ease: Power1.easeInOut})

            .to('.img > img', 3, {y: '+=50', ease: Power1.easeInOut})


            .to('.img > img', 3, {y: '-=30', ease: Power1.easeInOut})

            .to('.img > img', 3, {y: '+=30', ease: Power1.easeInOut})


            .to('.img > img', 2, {y: '-=30', ease: Power1.easeInOut})

            .to('.img > img', 2, {y: '+=30', ease: Power1.easeInOut})


        tl.from('h2 .line span', {duration: 1.6, y: 100, stagger: {amount: .4}, skewX: 7, ease: "power4.out"})
            .to(".intro-overlay .overlay", {duration: 1.6, height: 0, ease: "expo.inOut", stagger: 0.4})
            .to('.intro-overlay', {duration: 0, css: {display: 'none'}})
            .from('.social-icons a ', {
                duration: 1.6,
                y: 100,
                css: {opacity: 0},
                stagger: {amount: .4},
                skewX: 7,
                ease: "power4.out"
            })
            .to(tlCan, {duration: 27, ease: Power1.easeInOut})


    }, [])
    const [cururentSlide, setCurrentSlide] = useState(1);

    const nextSlide = (c) => {
        var child = document.querySelectorAll(`.main-overlay .child:nth-child(${c})`)
        gsap.to(child, {duration: 1.4, width: '100%', ease: "expo.inOut", stagger: 0.4})
        setCurrentSlide(cururentSlide + 1)
    }
    const prevSlide = (c) => {
        console.log('cl')
        var child = document.querySelectorAll(`.main-overlay .child:nth-child(${c})`)
        gsap.to(child, {duration: 1.4, width: '0', ease: "expo.inOut", stagger: 0.4})
        setCurrentSlide(cururentSlide - 1)
    }

    return (
        <>
            <Header/>
            <div className="App">
                <div className="intro-overlay">
                    <div className="overlay"/>
                    <div className="overlay"/>
                    <div className="overlay"/>
                </div>
                <div className="main-overlay">
                    <div className="overlay">
                        <div className="child"></div>
                        <div className="child"></div>
                        <div className="child"></div>
                    </div>
                    <div className="overlay">
                        <div className="child">
                            <div className="child"></div>
                            <div className="child"></div>
                            <div className="child"></div>
                        </div>
                    </div>
                    <div className="overlay">
                        <div className="child">
                            <div className="child"></div>
                            <div className="child"></div>
                            <div className="child"></div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="info">
                                <div className="info-inner">
                                    <span>
                                        hot new
                                    </span>
                                    <h2>
                                        <div className="line">
                                            <span>
                                                T-shirt
                                            </span>
                                        </div>
                                        <div className="line">
                                            <span>
                                                Collection
                                            </span>
                                        </div>
                                    </h2>
                                    <div className="btn">
                                        <Link>
                                            View collection <RightArrow/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="arrows">
                                    <Link to={'/'} className={cururentSlide === 1 ? 'disabled' : ''} onClick={() => {
                                        prevSlide(cururentSlide - 1)
                                    }}>
                                        <PrevArrow/>
                                    </Link>
                                    <Link className={cururentSlide === 4 ? 'disabled' : ''} onClick={() => {
                                        nextSlide(cururentSlide)
                                    }}>
                                        <NextArrow/>
                                    </Link>
                                </div>
                            </div>
                            <div className="img">
                                <img src={shirt} alt="t-shirt"/>
                                <img src={shirt} alt="t-shirt"/>
                                <div className="social-icons">
                                    <Link to={''}>
                                        <Instagram/>
                                    </Link>
                                    <Link to={''}>
                                        <Facebok/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
