"use client";
import React, { FC } from "react";
import Image from "next/image"; 
import { parrafosArray } from "./artComponents/data";
import { Formatos } from "./artComponents/interfaces";

interface ArticleContent {
  mainImageSrc: string;
  mainTitle: string;
  subtitle: string;
  arrayContenidos: string[];
}

const Art: FC = () => {
  const articleContent: ArticleContent = {
    mainImageSrc: "/images/main.jpg",
    mainTitle: "Título principal del artículo",
    subtitle: "Subtítulo principal del artículo, subtítulo principal del artículo, subtítulo principal del artículo",
    arrayContenidos: [
      "2024-12-23-4-0-solotexto",
      "2024-12-23-4-1-solofoto",
      "2024-12-23-4-2-textoLeft",
      "2024-12-23-4-3-textoRight",
      "2024-12-23-4-4-solotexto",
    ],
  };

  const renderParagraph = (id: string) => {
    const [year, month, day, articleSerial, paragraphSerial, formato] = id.split("-");
    const data = parrafosArray?.[year]?.[month]?.[day]?.[articleSerial]?.[paragraphSerial];
    if (!data) return null;

    const { contenido } = data;

    switch (formato) {
      case "solotexto":
        return (
          <p key={id} className="text-center text-lg my-4">
            {(contenido as Formatos["solotexto"]).contenido0}
          </p>
        );
      case "solofoto":
        const soloFoto = contenido as Formatos["solofoto"];
        return (
          <div key={id} className="flex justify-center my-6">
            <Image
              src={soloFoto.srcFoto}
              alt={soloFoto.idAltFoto}
              width={parseInt(soloFoto.widthFoto)}
              height={parseInt(soloFoto.heightFoto)}
            />
          </div>
        );
      case "textoLeft":
      case "textoRight":
        const { foto, texto } = contenido as Formatos["textoLeft"];
        const isRight = formato === "textoRight";
        return (
          <div
            key={id}
            className={`flex flex-col md:flex-row items-center my-8 ${isRight ? "md:flex-row-reverse" : ""}`}
          >
            <Image
              src={foto.srcFoto}
              alt={foto.idAltFoto}
              width={parseInt(foto.widthFoto)}
              height={parseInt(foto.heightFoto)}
              className="m-4"
            />
            <p className="text-lg text-center md:text-left m-4 max-w-md">{texto.contenido0}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <Image
        src={articleContent.mainImageSrc}
        alt="articleMainImage"
        height={300}
        width={600}
        className="mx-auto"
      />
      <h1 className="text-3xl text-center font-bold my-4">{articleContent.mainTitle}</h1>
      <h2 className="text-xl text-center text-gray-600 mb-6">{articleContent.subtitle}</h2>

      {articleContent.arrayContenidos.map((id) => renderParagraph(id))}
    </div>
  );
};

export default Art;
