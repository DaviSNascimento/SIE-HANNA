import { FaBell } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { IoPersonOutline, IoSettingsSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import {
  Container,
  TopContainerSidebar,
  BottomContainerSidebar,
  Header,
  Icon,
  Logo,
  Sidebar,
  SidebarBlock,
  AnimatedIcon,
  LogoContainer,
  Line,
  Dashboard,
  Title,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  ProgressoContainer,
  ProgressoBloco,
  TitleProgress,
  ProgressBar,
} from "./styled";
import Transacao from "../../components/transacao";
import { useLocation } from "react-router-dom";
import AssistenteAI from "../../components/AI";
import { keywordActions } from "../../components/keywordActions/keywordActions";

export default function Main() {
  const [isRotated, setIsRotated] = useState(false);

  const [transcript, setTranscript] = useState<string>('')
  const [toggleOnOff, setToggleOnOff] = useState<boolean>(false)

  let recognition: SpeechRecognition | null = null

  useEffect(() => {
    if('webkitSpeechRecognition' in window){
      recognition =  new window.webkitSpeechRecognition()
      recognition.lang = 'pt-BR'
      recognition.continuous = true
      recognition.interimResults = false
  
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        setTranscript('')
        const current = event.results[event.results.length - 1][0].transcript
        setTranscript((prev) => prev + ' ' + current)
      }
  
      recognition.onstart = () => {
        console.log('speech recognition started')
      }
  
      recognition.onend = () => {
        console.log('speech recognition ended');
        setToggleOnOff(false)
      }
    }else{
      console.log('Este navegador não suporta a web Speech API');
    }

    return () => {
      if(recognition){
        recognition.stop()
      }
    }

  }, [])

  useEffect(() => {
    if(recognition){
      if(toggleOnOff){
        recognition.stop()
      }else{
        recognition.start()
      }
    }
  }, [])

  useEffect(() => {
    if(transcript.trim() !== ' '){
      keywordActions.forEach(({keyword, action}) => {
        if(transcript.includes(keyword)){
          action();
        }
      })
    }
  }, [transcript])

  function nome(nome:string){
    return 
  }

  const [number, setNumber] = useState(1);

  useEffect(() => {

  }, [])



  const location = useLocation();
  const user = location.state?.user || {};

  const firstName = user.nome?.split(' ')[0] || 'Usuario';

  const handleIconClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <Container>
      <Sidebar>
        <SidebarBlock>
          <TopContainerSidebar>
            <LogoContainer>
              <Logo src="../../../public/LOGO(PNG).png" alt="Logo" />
              <Line />
            </LogoContainer>
            <AnimatedIcon onClick={handleIconClick} isRotated={isRotated} >
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
        <Title fontSize={42}>Olá {firstName}!</Title>
      </Header>

      <Dashboard>
        <Item1>
            <Transacao/>
        </Item1>
        <Item2>
          <h1>Gerar relatório</h1>
        </Item2>
        <Item3>
          <h1>Histórico</h1>
        </Item3>
        <Item4>
          <AssistenteAI/>
        </Item4>
        <Item5>
          <ProgressoContainer>
          <ProgressoBloco>
              <ProgressBar backgroundColor="2D4C33" progress={75}/>
              <TitleProgress>Entrada de Caixa</TitleProgress>
            </ProgressoBloco>
          </ProgressoContainer>
          <ProgressoContainer>
            <ProgressoBloco>
              <ProgressBar backgroundColor="5F2C2C" progress={25}/>
              <TitleProgress>Saida de Caixa</TitleProgress>
            </ProgressoBloco>
          </ProgressoContainer>
        </Item5>
      </Dashboard>
    </Container>
  );
}
