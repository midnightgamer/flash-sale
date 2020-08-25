import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {TimelineMax, TweenLite, Power1} from "gsap";
import '../styles/App.scss'
import {ReactComponent as Heart} from "../assets/heart.svg";
import {ReactComponent as User} from "../assets/user.svg";
import {ReactComponent as Notepad} from "../assets/notepad.svg";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-inner">
                    <div className="logo">
                        <Link to={'/'}>
                            Halfmoon
                        </Link>
                    </div>
                    <div className="header-links">
                        <ul>
                            <li>
                                <Link to={'/shop'}>
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to={'/wishlist'}>
                                    <Heart/>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/order'}>
                                    <Notepad/>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/user'}>
                                    <User/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
