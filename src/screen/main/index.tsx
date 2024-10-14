import { Container, Header, Icon, Logo, Sidebar, SidebarBlock } from "./styled";
import { useState } from 'react';
export default function Main () {
    const [user] = useState('Davi');
    return (
        <Container>
            <Sidebar>
                <SidebarBlock>
                    <Logo src="../../assets/Logo_Hanna_2.png" alt="Logo"/>
                    <Icon>☰</Icon>
                    <Icon>🔔</Icon>
                    <Icon>⚙️</Icon>
                    <Icon>👤</Icon>
                </SidebarBlock>
            </Sidebar>
            <Header>
                <h1>Olá {user}!</h1>
            </Header>

        </Container>
    )
}