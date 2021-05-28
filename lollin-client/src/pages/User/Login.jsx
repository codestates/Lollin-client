import axios from 'axios';
import React, { useState, useEffect } from 'react';
import HorizonLine from '../../modals/HorizonLine';
import validate from "../../validation/validate";
import useForm from "../../validation/useForm";
import { Container, Form, Title, Errors, LoginBtn, KakaoBtn, 
    NaverBtn, InputArea, LabelName, InputBox} from "../../validation/formElements";

const Login = ({ submitForm, username, password }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = async () => {
        console.log("로그인 성공!", username, password);
        await axios
        .post(
            '/user/login',
            {
                username,
                password,
            },
            {
                headers: {
                    "Content-Type" : "application/json"
                },
                withCredentials: true,
            })
        .then((res) => {
            console.log(res);
            if(res.data.message === "successfully logined!!") {
                console.log("로그인 성공");
            } else if(res.data.message === "user not found or wrong password") 
                console.log("로그인 실패");
        })
        .catch((err) => {
            console.error(err);
        })
    }

    const handleKakao = async () => {
        console.log("로그인 접속성공!");
        await axios
        .post(
            '/auth/kakao',
            {
                username,
                password,
            },
            {
                "Content-Type" : "application/json",
                withCredentials: true,
            })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        })
    }

    const handleNaver = async () => {
        console.log("로그인 성공!");
        await axios
        .post(
            '/auth/naver',
            {
                username,
                password,
            },
            {
                "Content-Type" : "application/json",
                withCredentials: true,
            })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return (
        <>
            <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Login</Title>
                <InputArea>
                    <LabelName htmlFor="username">
                    ID
                    </LabelName>
                    <br />
                    <InputBox
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter your Id"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <Errors>{errors.username}</Errors>}
                </InputArea>
                <InputArea>
                    <LabelName htmlFor="password">
                    Password
                    </LabelName>
                    <br />
                        <InputBox
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your Password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <Errors>{errors.password}</Errors>}
                </InputArea>
                <LoginBtn onClick={handleLogin}>
                    {!isLogin ? "Login" : "Succeed!"}
                </LoginBtn>
                <br />
                <HorizonLine />
                <KakaoBtn onClick={handleKakao}>
                    카카오 로그인
                </KakaoBtn>
                <br />
                <NaverBtn onClick={handleNaver}>
                    네이버 로그인
                </NaverBtn>
            </Form>
            </Container>
        </>
    )
}

export default Login;