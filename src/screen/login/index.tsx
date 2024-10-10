import { Container, ContainerForm, ContainerLogin, InputForm, Title } from "./styled";

export default function Login () {
    return (
        <Container 
            backgroundColor="#999"
            flex={1}
        >
            <ContainerLogin
                backgroundColor="#fff"
            >
                <Title
                    fontSize={32}
                    fontFamily="Montserrat"
                    color="#000"
                    fontWeight="500"
                >
                    LogIn
                </Title>

                <ContainerForm>
                    <InputForm type="text"/>
                </ContainerForm>

            </ContainerLogin>
        </Container>

    )
}