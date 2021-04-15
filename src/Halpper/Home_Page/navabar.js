/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * This is Footer page of zeel-codder web site.
 * Functions:
 * @name:Navbar
 * @type:React Component
 * @param:none
 * @returns:JSX of Navbar component
 * @functionality : This Component is Navbar of  zeel-codder web site.
 */



// Imports
// ====================================
// import react from 'react'
// import {Link} from 'react-dom
import { Link } from 'react-router-dom';
import Navdata from '../../Data/Home/data'
// import { AiOutlineFacebook , AiFillGithub ,AiFillLinkedin ,AiFillTwitterCircle } from 'react-icons/ai';
// import { FaBeer } from 'react-icons/fa';
import { VscListFlat } from 'react-icons/vsc'
import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { FaUserSecret } from 'react-icons/fa';
// ====================================



function Navbar() {


    let value = useRef(true);
    const linksRef = useRef(null);
    const linksRefs = useRef(null);
    const first = useRef(true);
    const linksContainerRef = useRef(null);

    const [showLinks, setLinkopen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const { UserState, Login } = useGlobalContext();

    // console.log(Userstate);

    //=============================
    // @name:NavbarDisplay
    // @type:Javascript Function
    // @param:none
    // @return:none
    // @functionality: Function is used add rotetor class in icon and add the height in navbar link. ====>More this Function is Used in Mobile responsive navbar<=====
    //=============================

    const NavbarDisplay = () => {
        document.querySelector(".icon").classList.toggle("rotetor");
        setLinkopen(!showLinks);
    }

    //=============================
    // @name:ShowLogin
    // @type:Javascript Function
    // @param:none
    // @return:none
    // @functionality: Function is used add Login Component in Web Site.
    //=============================

    const ShowLogin = (data) => {
        // console.log(data.textContent);
        value.current = data.textContent;
        setIsLoginOpen(true);

    }

    //=============================
    // @name:closeLogin
    // @type:Javascript Function
    // @param:none
    // @return:none
    // @functionality: Function is used remove Login Component in Web Site.
    //=============================

    const closeLogin = () => {
        setIsLoginOpen(false);
    }


    //=============================
    // @name:useEffect
    // @type:React Hook UseEffect
    // @param:none
    // @return:none
    // @functionality: UseEffect is set Heigh of Navbar-ul in Mobile View.
    //=============================

    useEffect(() => {
        // console.log(isLoginOpen, 1);
        if (!first.current) {

            const linksHeight = linksRef.current.getBoundingClientRect().height;
            // const linksHeight1 = linksRefs.current.getBoundingClientRect().height;
            if (showLinks) {
                linksContainerRef.current.style.height = `${linksHeight}px`;
            } else {
                linksContainerRef.current.style.height = '0px';
            }
        } else {
            first.current = false
        }
        // console.log('cc')
    }, [showLinks])


    return (
        <div className="navbar">
            <div className={`icon`} onClick={NavbarDisplay}> <VscListFlat></VscListFlat></div>
            <div className="navbar-item" ref={linksContainerRef}>

                <ul className="navabar-ul" ref={linksRef}>
                    <div>

                        {
                            Navdata.map((data) => {
                                const { id, title, link } = data
                                return (
                                    <li key={id}>
                                        <Link to={link} title={title}>
                                            {title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </div>
                    {/* <li className="Login-Page" ref={linksRefs}>

                        {
                            !UserState.isUserIn
                                ?
                                <>
                                    <li className="login"><a onClick={(e) => {
                                        ShowLogin(e.target);
                                    }} title="Sing In">Sing In</a></li>
                                    <li className="login"><a onClick={(e) => {
                                        ShowLogin(e.target);
                                    }} title="Log In">Log In</a></li>
                                </>
                                :
                                <li className="icons"><Link to={`/user/${UserState.UserInfo._id}`} title="User"><FaUserSecret></FaUserSecret></Link></li>
                        }
                    </li> */}
                </ul>
                {/* {
                    isLoginOpen && <Login choice={value.current} closeLogin={closeLogin}></Login>

                } */}
            </div>
        </div>

    );
}

export default Navbar;