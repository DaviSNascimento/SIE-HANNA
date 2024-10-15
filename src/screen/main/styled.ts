import styled from "styled-components";

export const Container = styled.div`
  background-color: #1F1F1F;
  display: grid;
  grid-template-columns: 200px repeat(3, 1fr);
  grid-template-rows: 50px 1fr;
  grid-template-areas: 
    'sidebar header header header'
    'sidebar dashboard dashboard dashboard';
  height: 100vh;  /* Garantir que ocupe 100% da altura da viewport */
  width: 100vw;   /* Garantir que ocupe 100% da largura da viewport */
  overflow: hidden; /* Remover qualquer overflow que possa causar scroll */
  
  @media (max-width: 1024px) {
    grid-template-columns: 150px repeat(2, 1fr);
    grid-template-areas: 
      'sidebar header header'
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
  display: fixed;
  width: 100px;
  margin: 0;
  height: 100vh;  /* Sidebar também ocupa a altura total da tela */

  @media (max-width: 768px) {
    width: 80px;
    height: auto;
  }

  @media (max-width: 480px) {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const SidebarBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 350px;
  align-items: center;
  padding: 15px;

  @media (max-width: 768px) {
    gap: 150px;
  }

  @media (max-width: 480px) {
    gap: 50px;
    flex-direction: row;
  }
`;

export const ContainerSidebar = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const Icon = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  margin: 10px 0px 10px 0px;
  align-items: center;
  justify-content: center;

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
  padding-left: 30px;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
    padding-left: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    padding-left: 10px;
  }
`;

export const Dashboard = styled.div`
  grid-area: dashboard;
  background-color: rgba(0, 0, 255, 0);
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
  }
`;
