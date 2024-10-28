import { useState } from "react";
import { api } from "../../components/api/API";
import { Button, Container, ContainerForm, ContainerLogin, Img, InputForm, Labels, Title, ForgotPassword } from "./styled";

export default function Login () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SendUser = (email: string, password: string) => {
        api.post('/Login', {
            email: email,
            password: password
        })
        .then((response) => {
            const result = response.data;
            const success = result.success;
            if(success) {
                // Redirecionar para a página principal
                alert('Login efetuado com sucesso!');
            } else {
                alert('Falha no login. Verifique suas credenciais.');
            }
        }).catch((error) => {
            alert('Erro ao conectar com a API. Tente novamente.');
            console.log(error.message);
            
        });
    };

    return (
        <Container 
            backgroundColor="#5D675B" 
            flex={1}
        >
            <Img src="../../../public/LOGO(PNG).png"/>
            <ContainerLogin
                backgroundColor="#F5F5F5" 
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
                    <Labels fontSize={14} fontFamily="Montserrat" fontWeight="500" color="#4A4A4A">
                        Email or mobile phone number
                    </Labels>
                    <InputForm 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />

                    <br/>
                    
                    <Labels fontSize={14} color="#4A4A4A" fontFamily="Montserrat" fontWeight="500">
                        Your password
                    </Labels>
                    <InputForm 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    
                </ContainerForm>

                <Button onClick={() => SendUser(email, password)}>
                    <Labels fontSize={18} color="#fff" fontFamily="Montserrat" cursor="pointer">
                        Enter
                    </Labels>
                </Button>

                <ForgotPassword fontSize={12} fontFamily="Montserrat" fontWeight="400" color="#707070" cursor="pointer" style={{ marginTop: '10px' }}>
                    Forgot your password?
                </ForgotPassword>

            </ContainerLogin>
        </Container>
    )
}
