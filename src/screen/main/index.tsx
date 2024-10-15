import { FaBell } from "react-icons/fa";
import { Container, TopContainerSidebar, BottomContainerSidebar, Header, Icon, Logo, Sidebar, SidebarBlock, AnimatedIcon, LogoContainer, Line } from "./styled";
import { RiMenuFill } from "react-icons/ri";
import { IoPersonOutline, IoSettingsSharp } from "react-icons/io5";
import { useState } from "react";

// Fazer o yarn para puxar a biblioteca de icons "yarn"

export default function Main() {

    const [isRotated, setIsRotated] = useState(false);

    const handleIconClick = () => {
        setIsRotated(!isRotated);
    };

    return (
        <Container>
            <Sidebar>
                <SidebarBlock>
                    <TopContainerSidebar>
                        <LogoContainer>
                            <Logo src="../../../public/Logo-Hanna.png" alt="Logo" />
                            <Line />
                        </LogoContainer>
                        <AnimatedIcon onClick={handleIconClick} isRotated={isRotated}>
                            <RiMenuFill style={{ height: 20, width: 20 }} />
                        </AnimatedIcon>
                    </TopContainerSidebar>

                    <BottomContainerSidebar>
                        <Icon>
                            <FaBell style={{ height: 20, width: 20 }} />
                        </Icon>
                        <Icon>
                            <IoSettingsSharp style={{ height: 20, width: 20 }} />
                        </Icon>
                        <Icon>
                            <IoPersonOutline style={{ height: 25, width: 25 }} />
                        </Icon>
                    </BottomContainerSidebar>
                </SidebarBlock>
            </Sidebar>
            <Header>
            </Header>
        </Container>
    );
}
