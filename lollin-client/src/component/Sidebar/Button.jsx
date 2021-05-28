import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginButton = styled(Link)`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '14px')};

    &:hover {
        transform: translateY(-5px);
        background: #ff67b9;
        color: #010606;
    };
`;

export const SignupButton = styled(Link)`
    border-radius: 4px;
    background: #5A5AFF;
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '14px')};
    margin-left: 20px;

    &:hover {
        transform: translateY(-5px);
        background: #00ff80;
        color: #010606;
    };
`;