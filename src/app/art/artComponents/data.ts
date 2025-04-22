// data.ts

import { Formatos } from './interfaces';

export const parrafosArray: {
  [year: string]: {
    [month: string]: {
      [day: string]: {
        [articleSerial: string]: {
          [paragraphSerial: string]: {
            formato: keyof Formatos;
            contenido: Formatos[keyof Formatos];
          };
        };
      };
    };
  };
} = {
  "2024": {
    "12": {
      "23": {
        "4": {
          "0": {
            formato: "solotexto",
            contenido: { contenido0: "Este es un párrafo de solo texto." },
          },
          "1": {
            formato: "solofoto",
            contenido: {
              idAltFoto: "foto1",
              srcFoto: "/images/pic1.jpg",
              widthFoto: "600",
              heightFoto: "400",
            },
          },
          "2": {
            formato: "textoLeft",
            contenido: {
              foto: {
                idAltFoto: "foto2",
                srcFoto: "/images/pic2.jpg",
                widthFoto: "300",
                heightFoto: "300",
              },
              texto: {
                contenido0: "Texto al lado izquierdo de la imagen.",
              },
            },
          },
          "3": {
            formato: "textoRight",
            contenido: {
              foto: {
                idAltFoto: "foto3",
                srcFoto: "/images/pic3.jpg",
                widthFoto: "300",
                heightFoto: "300",
              },
              texto: {
                contenido0: "Texto al lado derecho de la imagen.",
              },
            },
          },
          "4": {
            formato: "solotexto",
            contenido: { contenido0: "Otro párrafo más de solo texto." },
          },
        },
      },
    },
  },
};
