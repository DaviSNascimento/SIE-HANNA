import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
  flex?: number;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex: ${({ flex }) => flex || 1};
  min-height: 100vh; 
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor || "#596e56"};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Img = styled.img`
  height: 150px;
  width: 150px;  // Reduzido ainda mais

  @media (max-width: 768px) {
    height: 80px;
    width: 80px;
  }

  @media (max-width: 480px) {
    height: 60px;
    width: 60px;
  }
`;

interface TitleProps {
  fontSize?: number;
  color?: string;
  fontWeight?: string;
  fontFamily?: string;
}
export const Title = styled.h2<TitleProps>`
  font-size: ${({ fontSize }) => fontSize || 24}px;  // Diminuído o tamanho da fonte
  color: ${({ color }) => color || "#000"};
  font-weight: ${({ fontWeight }) => fontWeight || "bold"};
  font-family: ${({ fontFamily }) => fontFamily || "Arial, sans-serif"};
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

interface ContainerLoginProps {
  backgroundColor?: string;
}
export const ContainerLogin = styled.div<ContainerLoginProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  width: 100%;
  max-width: 350px;  // Reduzido ainda mais
  padding: 20px;  // Diminuído o padding
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);  // Ajustada a sombra
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 80%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 15px;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

interface InputFormProps {
  size?: number;
}
export const InputForm = styled.input<InputFormProps>`
  margin: 10px 0;
  width: 100%;
  max-width: 300px;  // Diminuído ainda mais
  padding: 8px;  // Diminuído o padding dos inputs
  border-radius: 8px;
  border: 1.5px solid rgba(0,0,0,0.3);
  background-color: #F5F5F5;
  color: #000;
  font-family: Montserrat;
  font-weight: 600;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 6px;
  }
`;

interface LabelsProps {
  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
  cursor?: string;
}
export const Labels = styled.label<LabelsProps>`
  font-size: ${({ fontSize }) => fontSize || 12}px;  // Diminuído o tamanho da fonte
  color: ${({ color }) => color || "rgba(0,0,0,0.3)"};
  font-weight: ${({ fontWeight }) => fontWeight || "bold"};
  font-family: ${({ fontFamily }) => fontFamily || "Arial, sans-serif"};
  cursor: ${({ cursor }) => cursor || "default"};
  margin-bottom: 2px;
  width: 100%;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Button = styled.button`
  border: 1.5px solid #888;
  background-color: #888;
  margin-top: 15px;
  border-radius: 12px;  // Ajustado para bordas menores
  transition: transform 0.1s, background-color 0.3s;
  cursor: pointer;
  min-width: 250px;
  max-width: 300px;  // Diminuído ainda mais
  padding: 10px;  // Diminuído o padding do botão
  font-weight: bold;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 8px;
  }

  &:hover {
    border-color: #888;
  }

  &:active {
    background-color: #888;
    transform: scale(1.05);
    transition: transform 0.1s, background-color 0.1s;
  }
`;

export const ForgotPassword = styled.label<LabelsProps>`
  font-size: ${({ fontSize }) => fontSize || 10}px;  // Diminuído ainda mais
  color: ${({ color }) => color || "#707070"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  font-family: ${({ fontFamily }) => fontFamily || "Arial, sans-serif"};
  cursor: ${({ cursor }) => cursor || "pointer"};
  text-align: center;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 480px) {
    font-size: 8px;
  }
`;
