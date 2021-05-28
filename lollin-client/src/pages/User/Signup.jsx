import React, { useState } from 'react';
import useForm from "../../validation/useForm";
import validate from "../../validation/validate";
import axios from 'axios';
import { Container, Form, InputArea, Errors, InputBox, LabelName, SignupBtn,
    Title } from "../../validation/formElements";


const Signup = ({ submitForm, username, password, nickname, email }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    function submitForm() {
        setIsSubmitted(true);
    }

    const handleSignup = async () => {
        console.log("회원가입 접속", username, password, nickname, email);
        await axios
        .post(
            '/user/signup',
            {
                username,
                password,
                nickname,
                email
            },
            {
                "Content-Type" : "application/json",
                withCredentials: true,
            })
        .then((res) => {
            console.log(res);
            if(res.data.message === "successfully sign up") {
                console.log("회원가입 성공");
            } else if(res.data.message === "duplicated nickname") {
                console.log("중복됨");
            } else if(res.data.message === "insufficient datas") {
                console.log("불충분한 데이터")
            }
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return (
        <>
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Sign Up</Title>
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
                            placeholder="8 characters or more Password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <Errors>{errors.password}</Errors>}
                </InputArea>
                <InputArea>
                    <LabelName htmlFor="nickname">
                    LoL-Nickname
                    </LabelName>
                    <br />
                        <InputBox
                            id="nickname"
                            type="text"
                            name="nickname"
                            placeholder="Enter your LoL-Nickname"
                            value={values.nickname}
                            onChange={handleChange}
                        />
                        {errors.nickname && <Errors>{errors.nickname}</Errors>}
                </InputArea>
                <InputArea>
                    <LabelName htmlFor="email">
                    E-mail
                    </LabelName>
                    <br />
                        <InputBox
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your E-mail"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <Errors>{errors.email}</Errors>}
                </InputArea>
                <SignupBtn type="submit" onClick={handleSignup}>
                    {!isSubmitted ? "Sign up" : "Succeed!"}
                </SignupBtn>
            </Form>
            </Container>
        </>
    )
}

export default Signup;
