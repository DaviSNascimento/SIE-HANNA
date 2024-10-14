import styled from "styled-components";

interface ContainerProps {
    backgroundColor: string;
    flex?: number;
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex: ${({ flex }) => flex || 1};
    height: 100vh;
    width: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    align-items: center;
    justify-content: center;
`;

interface TitleProps {
    fontSize?: number;
    color?: string;
    fontWeight?: string;
    fontFamily?: string;
}
export const Title = styled.h2<TitleProps>`
    font-size: ${({ fontSize }) => fontSize || 24}px;
    color: ${({ color }) => color || "#000"};
    font-weight: ${({ fontWeight }) => fontWeight || "bold"};
    font-family: ${({ fontFamily }) => fontFamily || "Arial, sans-serif"};
    margin-bottom: 20px;
`;

interface ContainerLoginProps {
    backgroundColor?: string;
}
export const ContainerLogin = styled.div<ContainerLoginProps>`
    background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
    width: 90%;
    max-width: 400px;
    height: 500px;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
`;

interface InputFormProps {
    size?: number;
}
export const InputForm = styled.input<InputFormProps>`
    margin: 10px 0;
    width: 100%;
    max-width: 320px;
    padding: 5px;
    border-radius: 4px;
    border: 1.3px solid #000;
    background-color: rgba(255, 255, 255, 0.9);
    color: #000;
    font-family: Montserrat;
    font-weight: 600;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

interface LabelsProps {
    fontSize?: number;
    color?: string;
    fontWeight?: string;
    fontFamily?: string;
    cursor?: string;
}
export const Labels = styled.label<LabelsProps>`
    font-size: ${({ fontSize }) => fontSize || 16}px;
    color: ${({ color }) => color || "#000"};
    font-weight: ${({ fontWeight }) => fontWeight || "bold"};
    font-family: ${({ fontFamily }) => fontFamily || "Arial, sans-serif"};
    cursor: ${({ cursor }) => cursor || "default"};
    margin-bottom: 10px;
`;

export const Button = styled.button`
    border: 1.3px solid #000;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 4px;
    transition: transform 0.1s, background-color 0.3s;
    cursor: pointer;

    &:hover {
        border-color: #000;
    }

    &:active {
        background-color: #999;
        transform: scale(1.05);
        transition: transform 0.1s, background-color 0.1s;
    }
`;
