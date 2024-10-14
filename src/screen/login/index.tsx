import { Button, Container, ContainerForm, ContainerLogin, InputForm, Labels, Title } from "./styled";

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
                    <Labels fontSize={24} color="#000" fontFamily="Montserrat" fontWeight="500">Name</Labels>
                    <InputForm type="text"/>
                    <br/>
                    <Labels fontSize={24} color="#000" fontFamily="Montserrat" fontWeight="500">Password</Labels>
                    <InputForm type="text"/>
                </ContainerForm>

                <Button>
                    <Labels fontSize={24} color="#000" fontFamily="Montserrat" cursor="pointer">Enviar</Labels>
                </Button>

            </ContainerLogin>
        </Container>

    )
}