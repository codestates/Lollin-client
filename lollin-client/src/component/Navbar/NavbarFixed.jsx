import React, { useState } from 'react'
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn, NavLoginBtn, NavSignupBtn } from './NavbarFixedElements';
import SignupModal from "../../modals/SignupModal";
import Login from "../../pages/User/Login";


const Navbar = ({ toggle, loginModalOn, setLoginModalOn, signUpModalOn, setSignUpModalOn }) => {
    const [isLogin, setLogin] = useState(false)
    const [isSignup, setSignup] = useState(false)

    

    return (
        <>
            <Nav>
                <Bars onClick={toggle} />
                <Logo to="/" activeStyle>
                    <h1>Lollin</h1>
                </Logo>
                <NavMenu>
                    <NavLink to="/items/all">
                        Item DB
                    </NavLink>
                    <NavLink to="/champions/all">
                        Champ DB
                    </NavLink>
                    <NavLink to="/utils/search?name=${name}">
                        Matching Info
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavLoginBtn to="/user/login" onClick={() => setLoginModalOn(true)}>
                        {setLogin ? "Login" : "Logout"}
                    </NavLoginBtn>
                    <NavSignupBtn to="/user/signup" onClick={() => setSignUpModalOn(true)}>
                        {setSignup ? "Signup" : "MyInfo"}
                    </NavSignupBtn>
                </NavBtn>
            </Nav>
            {/* <Sidebar /> */}
        </>
    )
}


export default Navbar;
