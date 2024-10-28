import styled from "styled-components";

export const ContainerHeader = styled.div`
    align-items: center;
    justify-content: flex_start;
    display: flex;
    padding: 10px;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 5px;
    }
`;

export const ContainerInput = styled.div`
    height: 40px;
    max-width: 200px;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    border-bottom: 1px solid #fff;
    @media (max-width: 768px) {
        max-width: 100%;
        margin-top: 10px;
    }
`;

export const Searchbox = styled.input`
    background-color: transparent;
    border: none;
    font-size: 12px;
    font-weight: bold;
    color: #fff;

    &:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }

    &:hover, &:active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

export const IMG = styled.img`
    height: 60px;
    width: 60px;
    margin: 10px;
    background-color: #fff;
    border-radius: 50%;

    @media (max-width: 768px) {
        height: 50px;
        width: 50px;
        margin: 5px;
    }
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Garante que o conteúdo fique alinhado à esquerda */
  padding: 10px;
  flex-direction: row;
  width: 100%; /* Garante que ele ocupe toda a largura disponível */
  margin: 0; /* Remove qualquer margem que esteja afastando o texto da borda */
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: bold;
  margin: 0;
  font-size: 20px;
  text-align: left; /* Garante que o texto esteja alinhado à esquerda */
  margin-left: 0; /* Remove a margem à esquerda */
`;

export const ContainerComand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  max-width: 100%;
  padding: 10px;
  padding-bottom: 30px;
  box-sizing: border-box;
  overflow-y: auto; /* Adiciona o comportamento de scroll */
  max-height: 100%;

  /* Estilizando a barra de rolagem */
  &::-webkit-scrollbar {
    width: 8px; /* Define a largura da barra de rolagem */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Remove o fundo da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor da barra de rolagem */
    border-radius: 10px; /* Deixa a barra mais arredondada */
    border: 2px solid transparent; /* Dá um espaço interno ao redor da barra */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor da barra quando o mouse passa por cima */
  }

  @media (max-width: 768px) {
    padding-bottom: 20px;
  }

  @media (max-width: 480px) {
    padding-bottom: 15px;
  }
`;


export const Comand = styled.div`
  flex: 1;
  min-height: 40px;
  width: 100%;
  max-width: 400px;
  background-color: #494949;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

export const TextComando = styled.h2`
  color: #BABABA;
  font-weight: bold;
  margin: 0;
  font-size: 12px;
  padding: 0;
  text-align: center;
  margin-left: 10px;
  overflow-wrap: break-word; /* Garante que o texto quebre se for muito longo */
`;
