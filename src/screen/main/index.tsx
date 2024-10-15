import { Container, Header, Icon, Logo, Sidebar, SidebarBlock } from "./styled";
import { useState } from 'react';
import { GiSupersonicBullet } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";

//Fazer o yarn para puxar a bibliteca de icons "yarn"

export default function Main() {
    const [user] = useState('Davi');
    return (
        <Container>
            <Sidebar>
                <SidebarBlock>
                    <Logo src="../../../public/Logo-Hanna.png" alt="Logo" />
                    <Icon>
                        <IoPersonOutline/>
                    </Icon>
                    <Icon>
                        <GiSupersonicBullet />
                    </Icon>
                    <Icon>⚙️</Icon>
                    <Icon>👤</Icon>
                </SidebarBlock>
            </Sidebar>
            <Header>
                <h1>Olá {user}!</h1>
            </Header>
        </Container>
    );
}
