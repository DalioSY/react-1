import styled from 'styled-components'
import Background from '../../assets/background1.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 40px;
    height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
    background: linear-gradient(
    157deg, 
    rgba(255, 255, 255, 0.60) 0.84%, 
    rgba(255, 255, 255, 0.60) 0.85%, 
    rgba(255, 255, 255, 0.15) 100%);

    border-radius: 61px 61px 0px 0px;

    padding: 50px 36px;

    display: flex;
    flex-direction: column;

    gap: 20px;

    height: 100vh;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: normal;
    text-align: center;

    color: #FFF;

    margin-bottom: 80px;
`;

export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: #EEE;

    padding-left: 10px;
    
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 58px;

    border: none;
    outline: none;

    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;

    color: #ffffff;
    
    padding-left: 10px;
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 130px;

    border-radius: 14px;
    background: rgba(0, 0, 0, 0.80);
    border: none;

    color: #FFF;
    font-size: 17px;
    font-style: normal;
    font-weight: bold;
    line-height: 28px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;
