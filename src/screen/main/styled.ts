import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: #1F1F1F;
  display: grid;
  grid-template-columns: 100px 1fr 2fr 1fr;
  grid-template-rows: 20px 1fr;
  grid-template-areas: 
    'sidebar header header header'
    'sidebar dashboard dashboard dashboard'
    'sidebar dashboard dashboard dashboard';
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    grid-template-columns: 150px repeat(2, 1fr);
    grid-template-areas: 
      'sidebar header header'
      'sidebar dashboard dashboard'
      'sidebar dashboard dashboard';
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
      'header'
      'sidebar'
      'dashboard';
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
      'header'
      'dashboard'
      'sidebar';
  }
`;

export const Sidebar = styled.div`
  grid-area: sidebar;
  background-color: #5D675B;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 45px;
  margin:0;
  height: 100vh;

  @media (max-width: 768px) {
    width: 80px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    justify-content: center;
  }
`;

export const SidebarBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ContainerSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopContainerSidebar = styled(ContainerSidebar)`
  justify-content: flex-start;
`;

export const BottomContainerSidebar = styled(ContainerSidebar)`
  justify-content: flex-end;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const Line = styled.div`
  width: 115%;
  height: 1px;
  background-color: #000;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 50%;
  }
`;

export const Icon = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

export const Header = styled.div`
  grid-area: header;
  background-color: rgba(0, 128, 0, 0);
  display: flex;
  align-items: flex-end;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 10px;
    padding-left: 10px;
  }

  @media (max-width: 480px) {
    margin-top: 5px;
    padding-left: 5px;
  }
`;


interface TitleProps {
  fontSize?: number;
  color?: string;
  fontWeight?: string;
  fontFamily?: string;
}

export const Title = styled.h2<TitleProps>`
  font-size: ${({ fontSize }) => fontSize || 24}px;
  color: rgba(${({ color }) => color || "#fff"});
  font-weight: ${({ fontWeight }) => fontWeight || "bold"};
  font-family: ${({ fontFamily }) => fontFamily || "Arial, sans-serif"};
  margin-bottom: 15px;
  margin-left: 20px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
interface IconProps {
  isRotated?: boolean;
}
export const AnimatedIcon = styled.div<IconProps>`
  display: flex;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  ${(props) =>
    props.isRotated &&
    css`
      transform: rotate(90deg);
    `}

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

export const Dashboard = styled.div`
  grid-area: dashboard;
  background-color: rgba(0, 0, 255, 0);
  padding: 50px;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 3px; 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 5px;
    padding: 2px;
  }
`;


export const Bloco = styled.div`
  background-color: #333;
  border-radius: 13px;
  margin: 10px;
`;

export const Item1 = styled(Bloco)`
  grid-column: 1 / 5;
  grid-row: 1 / 4;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Item2 = styled(Bloco)`
  grid-column: 1 / 3;
  grid-row: span 6;
`;

export const Item3 = styled(Bloco)`
  grid-column: 3 / 5;
  grid-row: span 6;
`;

export const Item4 = styled(Bloco)`
  grid-column: 5 / 8;
  grid-row: 1 / 5;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Impede o conteúdo de sair */
  align-items: center;
  justify-content: center;
  padding: 20px; /* Ajuste o padding conforme necessário */
  box-sizing: border-box; /* Garante que o padding seja contabilizado no tamanho total */
`;

export const Item5 = styled(Bloco)`
  grid-column: 5 / 8;
  grid-row: span 5;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  overflow: hidden; /* Impede o vazamento de conteúdo */
    box-sizing: border-box;
  justify-content: space-between; /* Distribui os elementos uniformemente */
  gap: 20px; /* Adiciona um espaçamento entre os blocos de progresso */

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: auto;
  }

  @media (max-width: 480px) {
    grid-column: 1 / -1;
    grid-row: auto;
    padding: 10px;
  }
`;

export const ProgressoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export const ProgressoBloco = styled.div`
  flex-grow: 1; /* Garante que ambos os blocos cresçam igualmente */
  width: 100%;
  background-color: #333;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ProgressBar = styled.div<ProgressProps>`
  width: ${({ progress }: ProgressProps) => progress}%;
  height: 100%; /* Define uma altura fixa para a barra de progresso */
  border-radius: 15px;
  background-color: #${({ backgroundColor }: ProgressProps) => backgroundColor};
`;

export const TitleProgress = styled.h2`
  color: #fff;
  font-size: 50PX;
  font-weight: bold;
  margin: 0;
  padding-left: 10px;
  margin-bottom: 10px;
  position: absolute;
`;


interface ProgressProps{
  backgroundColor: string;
  progress: number;
}