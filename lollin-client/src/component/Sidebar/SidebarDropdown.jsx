import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import sidebarMenu from '../Sidebar/SidebarMenu';
import { LoginButton, SignupButton } from './Button';
import SignupModal from "../../modals/SignupModal";
import LoginModal from "../../modals/LoginModal";



const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0' )};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%' )};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
        background-color: #a0a0a0;
    }
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const SidebarDropdown = ({ isOpen, toggle, loginModalOn, setLoginModalOn, signUpModalOn, setSignUpModalOn }) => {
    // const [loginModalOn, setLoginModalOn] = useState(false);
    // const [signUpModalOn, setSignUpModalOn] = useState(false);
    // console.log(loginModalOn);
    const [isLogin, setLogin] = useState(false)
    const [isSignup, setSignup] = useState(false)

    return (
        <>
        {/* {loginModalOn ? (<LoginModal show={loginModalOn} onHide={() => setLoginModalOn(false)} />)
        : ""}
        {signUpModalOn ? (<SignupModal show={signUpModalOn} onHide={() => setSignUpModalOn(false)} />) : ""} */}
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {sidebarMenu.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <LoginButton onClick={() => setLoginModalOn(true)}>
                        {setLogin ? "Login" : "Logout"}
                    </LoginButton>
                    <SignupButton onClick={() => setSignUpModalOn(true)}>
                        {setSignup ? "Signup" : "MyInfo"}
                    </SignupButton>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
        </>
    )
}

export default SidebarDropdown;
