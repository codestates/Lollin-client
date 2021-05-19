import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 999;
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
`;

export const NavLink = styled(Link)`
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

export const NavLoginBtnLink = styled(Link)`
  border-radius: 4px;
  background: #5a5aff;
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
    background: #ffb9b9;
    color: #010606;
  }
`;

export const NavSignupBtnLink = styled(Link)`
  border-radius: 4px;
  background: #5a5aff;
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
    background: #dbffd5;
    color: #010606;
  }
`;