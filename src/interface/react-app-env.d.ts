// src/react-app-env.d.ts
interface SpeechRecognition {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
    onstart: (() => void) | null;
    onend: (() => void) | null;
    start(): void;
    stop(): void;
  }
  
  interface SpeechRecognitionEvent {
    results: {
      [key: number]: SpeechRecognitionResult;
      length: number;
    };
  }
  
  interface SpeechRecognitionResult {
    [key: number]: SpeechRecognitionAlternative;
    length: number;
  }
  
  interface SpeechRecognitionAlternative {
    transcript: string;
  }
  
  interface Window {
    webkitSpeechRecognition: {
      new (): SpeechRecognition;
    };
  }
  