import React, { useState } from 'react';
import useForm from "../../validation/useForm";
import validate from "../../validation/validate";
import axios from 'axios';
import { Container, Form, Title, Errors, LabelName,
    UpdateBtn, InputBox, LeaveBtn, InputArea } from "../../validation/formElements";
import HorizonLine from '../../modals/HorizonLine';


const MyInfo = (nickname, newpassword) => {
    const { handleChange, values, handleSubmit, errors } = useForm(validate);
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false);
    const [isLeaved, setIsLeaved] = useState(false);

    const handleUpdate = async () => {
        console.log("정보변경 접속", nickname, newpassword);
        await axios
        .post(
            '/user/update',
            {
                nickname,
                newpassword
            },
            {
                "Content-Type" : "application/json",
                withCredentials: true,
            })
        .then((res) => {
            console.log(res);
            if(res.data.message === "successfully updated") {
                console.log("정보변경 성공")
            } else if(res.data.message ==="insufficient datas") {
                console.log("불충분한 데이터")
            }
        })
        .catch((err) => {
            console.error(err);
        })
    }

    const handleLeave = () => {
        setIsLeaved(true)
    }
    return (
        <>
            <Container>
            <Form onSubmit={handleSubmit}>
                <Title>My Info</Title>
                <InputArea>
                    <LabelName htmlFor="nickname">
                    LoL-Nickname
                    </LabelName>
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
                    <LabelName htmlFor="password">
                    Password
                    </LabelName>
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
                <UpdateBtn type="submit" onClick={handleUpdate}>
                    {!isSubmitted ? "Update" : "Succeed!"}
                </UpdateBtn>
                <br />
                <HorizonLine />
                <LeaveBtn type="submit" onClick={handleLeave}>
                    Leave
                </LeaveBtn>
            </Form>
            </Container>
        </>
    )
}

export default MyInfo
