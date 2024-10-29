import { TiMicrophoneOutline } from "react-icons/ti";
import { Comand, ContainerComand, ContainerHeader, ContainerInput, ContainerTitle, IMG, Searchbox, TextComando, Title } from "./styled";
import { PiLightbulbLight, PiLightningFill } from "react-icons/pi";
import React, { useState, useEffect } from 'react';





export default function AssistenteAI() {

    const VoiceRecognition: React.FC = () =>{

        const [transcript, setTranscript] = useState<string>('');
        const [isListening, setIsListening] = useState<boolean>(false);
        let recognition: SpeechRecognition | null = null;
    
        useEffect(() => {
            if ('webkitSpeechRecognition' in window) {
                recognition = new window.webkitSpeechRecognition();
                recognition.lang = 'pt-BR';
                recognition.continuous = true;
                recognition.interimResults = false;
    
    
                recognition.onresult = (event: SpeechRecognitionEvent) => {
                    const currentTranscript = event.results[event.results.length - 1][0].transcript;
                    setTranscript('')
                    setTranscript((prev) => prev + ' ' + currentTranscript);
                  };
    
                  recognition.onstart = () => {
                    console.log('Reconhecimento de voz iniciado');
                  };
    
                  recognition.onend = () => {
                    console.log('Reconhecimento de voz encerrado');
                    setIsListening(false);
                  };
            } else {
                console.log('esse navegador não suporta web Speech API');
            }
            return () => {
                if (recognition) {
                    recognition.stop();
                }
            };
        }, []);
        // Função para iniciar/parar o reconhecimento
      const toggleListening = () => {
        if (recognition) {
          if (isListening) {
            recognition.stop();
            setIsListening(false);
          } else {
            recognition.start();
            setIsListening(true);
          }
        }
      };
    };

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
