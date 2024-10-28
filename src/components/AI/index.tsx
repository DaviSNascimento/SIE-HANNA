import { TiMicrophoneOutline } from "react-icons/ti";
import { Comand, ContainerComand, ContainerHeader, ContainerInput, ContainerTitle, IMG, Searchbox, TextComando, Title } from "./styled";
import { PiLightbulbLight, PiLightningFill } from "react-icons/pi";

export default function AssistenteAI() {
    return (
        <>
            <ContainerHeader>
                <IMG src="../../../public/LOGO(PNG).png" />
                <ContainerInput>
                    <TiMicrophoneOutline style={{ height: 25, width: 25 }} />
                    <Searchbox placeholder="Pergunte Aqui..." />
                </ContainerInput>
            </ContainerHeader>
            <ContainerTitle>
                <PiLightningFill style={{ height: 25, width: 25 }} />
                <Title>Mais Usadas!</Title>
            </ContainerTitle>
            <ContainerComand>
                <Comand>
                    <TextComando>Hi Hanna! Exiba o relatório de vendas</TextComando>
                    <PiLightbulbLight style={{ marginRight: 10, height: 20, width: 20 }} />
                </Comand>
                <Comand>
                    <TextComando>Hi Hanna! Mostre a tela tal</TextComando>
                    <PiLightbulbLight style={{ marginRight: 10, height: 20, width: 20 }} />
                </Comand>
                <Comand>
                    <TextComando>Hi Hanna! Editar usuario</TextComando>
                    <PiLightbulbLight style={{ marginRight: 10, height: 20, width: 20 }} />
                </Comand>
            </ContainerComand>
        </>
    )
}
