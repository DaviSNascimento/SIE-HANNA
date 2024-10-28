import styled from "styled-components";

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: left;
    margin: 0 20px;
    gap: 10px;
`

export const Title = styled.h1`
    color: #fff;
    font-weight: bold;
    font-size: 32px;
`

export const Date = styled.p`
    color: #fff;
    font-weight: 300;
    font-size: 16px;
`

export const ContainerSaldo = styled.div`
    display: flex;
    align-items: flex-end; 
    justify-content: center;
    text-align: center;
    margin: -30px 0 0 20px;
    gap: 45px;
`;

export const SubTitles = styled.h2`
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
    padding-right: 10px;
    align-self: flex-end;
    margin-bottom: 20px;
`;

export const Saldo = styled.h3`
    color: #fff;
    font-weight: 700;
    font-size: 70px;
    margin: 0;
    text-align: center;
`;

export const ContainerLine = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const Line = styled.div`
  width: 95%;
  height: 1px;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 50%;
  }
`;