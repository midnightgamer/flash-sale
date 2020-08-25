import React, {useEffect} from 'react';
import './styles/App.scss';
import Header from "./component/Header";
import shirt from './assets/t-shirt.png'
import {ReactComponent as Facebok} from "./assets/facebook.svg";
import {ReactComponent as Instagram} from "./assets/instagram-logo.svg";
import {ReactComponent as NextArrow} from "./assets/next.svg";
import {ReactComponent as DownArrow} from "./assets/down-arrow.svg";
import {ReactComponent as PrevArrow} from "./assets/left-arrow.svg";
import {Link} from "react-router-dom";
import gsap, {Power1, TimelineMax, TweenLite} from 'gsap'

function App() {
    let tl = gsap.timeline();
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
            .to(tlCan, {duration: 27, ease: Power1.easeInOut})

    })
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
                    <div className="overlay"/>
                    <div className="overlay"/>
                    <div className="overlay"/>
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
                                            View collection
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="img">
                                <img src={shirt} alt="t-shirt"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
