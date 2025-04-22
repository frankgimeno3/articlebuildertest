// interfaces.ts

export interface SoloFotoFormato {
    idAltFoto: string;
    srcFoto: string;
    widthFoto: string;
    heightFoto: string;
  }
  
  export interface SoloTextoFormato {
    contenido0: string;
  }
  
  export interface TextoImagenFormato {
    foto: SoloFotoFormato;
    texto: SoloTextoFormato;
  }
  
  export interface Formatos {
    solofoto: SoloFotoFormato;
    solotexto: SoloTextoFormato;
    textoLeft: TextoImagenFormato;
    textoRight: TextoImagenFormato;
  }
  