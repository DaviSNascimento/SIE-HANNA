import { FaBell } from "react-icons/fa";
import { Container, ContainerSidebar, Header, Icon, Logo, Sidebar, SidebarBlock } from "./styled";
import { useState } from 'react';
import { GiSupersonicBullet } from "react-icons/gi";
import { IoPersonOutline, IoSettingsSharp } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";

//Fazer o yarn para puxar a bibliteca de icons "yarn"

export default function Main() {
    const [user] = useState('Davi');
    return (
        <Container>
            <Sidebar>
                <SidebarBlock>
                    <ContainerSidebar>
                        <Logo src="../../../public/Logo-Hanna.png" alt="Logo" />
                        <Icon>
                            <RiMenuFill style={{height: 30, width: 30}}/>
                        </Icon>
                    </ContainerSidebar>
                    <ContainerSidebar>
                        <Icon>
                            <FaBell style={{height: 30, width: 30}}/>
                        </Icon>
                        <Icon>
                            <IoSettingsSharp style={{height: 30, width: 30}}/>
                        </Icon>
                        <Icon>
                            <IoPersonOutline style={{height: 40, width: 40}}/>
                        </Icon>
                    </ContainerSidebar>
                </SidebarBlock>
            </Sidebar>
            <Header>
            </Header>
        </Container>
    );
}
