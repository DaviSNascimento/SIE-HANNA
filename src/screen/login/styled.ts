import styled from "styled-components";

interface ContainerProps {
    backgroundColor: string;
    flex?: number;
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex: ${({ flex }: ContainerProps) => flex};
    height: 100%;
    width: 100%;
    background-color: ${({ backgroundColor }: ContainerProps) => backgroundColor};
    align-items: center;
    justify-content: center;
`

interface TitleProps {
    fontSize?: number;
    color?: string;
    fontWeight?: string;
    fontFamily?: string;
}
export const Title = styled.h2<TitleProps>`
    font-size: ${({ fontSize }: TitleProps) => fontSize};
    color: ${({ color }: TitleProps) => color};
    font-weight: ${({ fontWeight }: TitleProps) => fontWeight};
    font-family: ${({ fontFamily }: TitleProps) => fontFamily};
`

interface ContainerLoginProps {
    backgroundColor?: string;
}
export const ContainerLogin = styled.div<ContainerLoginProps>`
    background-color: ${({ backgroundColor }: ContainerLoginProps) => backgroundColor};
    max-width: 30%;
    border-radius: 3px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    flex-direction: row;
    align-items: center;
`

export const ContainerForm = styled.form`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 10px;
    width: 100vh;
    margin: 20px;
`
interface InputFormProps{
    size?: number;
}
export const InputForm = styled.input<InputFormProps>`
    margin: 10px;
    max-width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 3px;
    border: 2px solid #000;
    background-color: rgba(255, 255, 255, 0.1);
    color: #000;
`