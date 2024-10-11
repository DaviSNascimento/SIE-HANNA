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
    /* height: 100vh; */
`
export const SidebarBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border: 1px solid black;
    padding: 15px;
`
