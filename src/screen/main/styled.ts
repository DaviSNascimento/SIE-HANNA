import styled from "styled-components";

export const Container = styled.div`
    background-color: rgba(128, 128, 128, 0.488);
    display: grid;
    grid-template-columns: 200px repeat(3, 1fr);
    grid-template-rows: 50px 1fr;
    grid-template-areas: 
    'sidebar header header header'
    'sidebar dashboard dashboard dashboard'
    'sidebar dashboard dashboard dashboard';
`

export const Sidebar = styled.div`
    grid-area: sidebar;
    background-color: rgba(255, 0, 0, 0.329);
    display: fixed;
    width: 200px;
    margin: 0;
    height: 100vh;
`
export const SidebarBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
`
export const Logo = styled.img`
    width: 150px;
    height: 150px;
`

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    margin: 40px 0px 40px 0px;
`
export const Header = styled.div`
    grid-area: header;
    background-color: rgba(0, 128, 0, 0);
    display: flex;
    align-items: flex-end;
    padding-left: 30px;
    margin-top: 100px;
`
export const Dashboard = styled.div`
    grid-area: dashboard;
    background-color: rgba(0, 0, 255, 0);
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6,1fr);
    grid-gap: 20px;
`