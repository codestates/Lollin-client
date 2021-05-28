import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
    padding: 20px 10px;
    background: #000;
    color: #fff;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const Logo = styled.div`
    color: #FFBB72;
    font-weight: bold;
    font-size: 21px;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-left: 10px;
    padding: 0;
    height: 50px;
`;


export const Wrapper= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 40px;
    color: #fff;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 14px;
    font-size: 15.5px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: #BBFF72;
        transition: 200ms ease-in;
    }
`;

export const Title = styled.div`
    font-size: 24px;
    color: #fff;
    margin-bottom: 27px;
    font-weight: bold;
    text-align: center;
`;

export const Copyright = styled.div`
    text-align: end;
    font-size: 13px;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;