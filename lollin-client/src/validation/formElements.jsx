import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
    margin: 100px auto;
    width: 800px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    border-radius: 10px;
    height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #121212;

    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const Form = styled.form`
    background-color: #121212;
    position: absolute;
    top: 50%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    width: 97%;
    height: 97%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const Title = styled.h1`
    font-size: 48px;
    text-align: start;
    width: 80%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #fff;
`;

export const InputArea = styled.div`
    background-color: #121212;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    width: 80%;
`;

export const LabelName = styled.label`
	display: inline-block;
    margin-bottom: 6px;
    color: #fff;
    font-size: 22px;
`;
export const InputBox = styled.input`
	display: block;

    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 96.6%;
    border: none;

    ::placeholder {
    color: #595959;
    font-size: 17px;
}
`;

export const Errors = styled.p`
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
`;

export const LoginBtn = styled.button`
    width: 78.5%;
    height: 50px;
    margin-top: 15px;
    border-radius: 2px;
    background: #0080FF;
    outline: none;
    border: none;
    color: #000;
    font-size: 1.5rem;

    &:hover {
        cursor: pointer;
        background-color: #00ffff;
    }
`;

export const KakaoBtn = styled.button`
    width: 78.5%;
    height: 50px;
    margin-top: 10px;
    border-radius: 2px;
    background: #121212;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;

    &:hover {
        cursor: pointer;
        background-color: #ffff00;
        color: #000
    }
`;

export const NaverBtn = styled.button`
    width: 78.5%;
    height: 50px;
    margin-top: 10px;
    border-radius: 2px;
    background: #121212;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    
    &:hover {
        cursor: pointer;
        background-color: #00ff00;
        color: #000;
    }
`;

export const SignupBtn = styled.button`
    width: 81.3%;
    height: 50px;
    margin-top: 15px;
    border-radius: 2px;
    background: #0080FF;
    outline: none;
    border: none;
    color: #000;
    font-size: 1.5rem;

    &:hover {
        cursor: pointer;
        background-color: #00ffff;
    }
`;

export const UpdateBtn = styled.button`
    width: 81.3%;
    height: 50px;
    margin-top: 15px;
    border-radius: 2px;
    background: #0080FF;
    outline: none;
    border: none;
    color: #000;
    font-size: 1.5rem;

    &:hover {
        cursor: pointer;
        background-color: #00ffff;
    }
`;

export const LeaveBtn = styled.button`
    width: 81.3%;
    height: 50px;
    margin-top: 10px;
    border-radius: 2px;
    background: #121212;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;

    &:hover {
        cursor: pointer;
        background-color: #e0e0e0;
        color: #000;
    }
`;