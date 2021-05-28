import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #000;
  opacity: 0.865;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 3000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-self: start;
  text-decoration: none;
  margin-left: 30px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #bce55c;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const NavLink = styled(Link)`
  color: #ebebeb;
  font-weight: bold;
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-self: start;
  text-decoration: none;
  margin-left: 30px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 40px;
  padding: 0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLoginBtn = styled(Link)`
  border-radius: 4px;
  background: #000000;
  margin-left: 10px;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff67b9;
    color: #010606;
  }
`;

export const NavSignupBtn = styled(Link)`
    border-radius: 4px;
    background: #5A5AFF;
    margin-left: 10px;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #00ff80;
        color: #010606;
    }
`;
