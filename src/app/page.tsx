"use client"

import ArticleMiniature from "./components/ArticleMiniature";

// Simulamos un array de artículos
const articlesArray = [
  {
    articleId:"001",
    articleCountries:["Spain"],
    articleCategories:["cat1", "cat2", "cat3", "cat4"],
    miniatureSrc: "img1.jpg",
    selectedSrc: "https://previews.123rf.com/images/elenavdovina/elenavdovina1702/elenavdovina170200009/70843685-fondo-transparente-azul-categor%C3%ADas-de-productos-tienda-en-l%C3%ADnea-fondo-azul-sin-fisuras-con-los.jpg",
    tituloMiniatura: "Artículo 1",
    subtituloMiniatura: "Subtítulo 1"
  },
  {    
    articleId:"002",
    articleCountries:["Spain"],
    articleCategories:["cat1", "cat2"],
    miniatureSrc: "img2.jpg",
    selectedSrc: "https://previews.123rf.com/images/elenavdovina/elenavdovina1702/elenavdovina170200009/70843685-fondo-transparente-azul-categor%C3%ADas-de-productos-tienda-en-l%C3%ADnea-fondo-azul-sin-fisuras-con-los.jpg",
    tituloMiniatura: "Artículo 2",
    subtituloMiniatura: "Subtítulo 2"
  },
  {
    articleId:"003",
    articleCountries:["Spain"],
    articleCategories:["cat1"],
    miniatureSrc: "img3.jpg",
    selectedSrc: "https://previews.123rf.com/images/elenavdovina/elenavdovina1702/elenavdovina170200009/70843685-fondo-transparente-azul-categor%C3%ADas-de-productos-tienda-en-l%C3%ADnea-fondo-azul-sin-fisuras-con-los.jpg",
    tituloMiniatura: "Artículo 3",
    subtituloMiniatura: "Subtítulo 3"
  },
  {
    articleId:"004",
    articleCountries:["Portugal"],
    articleCategories:["cat2", "cat3", "cat4"],
    miniatureSrc: "img4.jpg",
    selectedSrc: "https://previews.123rf.com/images/elenavdovina/elenavdovina1702/elenavdovina170200009/70843685-fondo-transparente-azul-categor%C3%ADas-de-productos-tienda-en-l%C3%ADnea-fondo-azul-sin-fisuras-con-los.jpg",
    tituloMiniatura: "Artículo 4",
    subtituloMiniatura: "Subtítulo 4"
  },
  {
    articleId:"005",
    articleCountries:["Portugal"],
    articleCategories:["cat3", "cat4"],
    miniatureSrc: "img5.jpg",
    selectedSrc: "https://previews.123rf.com/images/elenavdovina/elenavdovina1702/elenavdovina170200009/70843685-fondo-transparente-azul-categor%C3%ADas-de-productos-tienda-en-l%C3%ADnea-fondo-azul-sin-fisuras-con-los.jpg",
    tituloMiniatura: "Artículo 5",
    subtituloMiniatura: "Subtítulo 5"
  },
  {
    articleId:"006",
    articleCountries:["Spain","Portugal"],
    articleCategories:["cat3", "cat4"],
    miniatureSrc: "img6.jpg",
    selectedSrc: "https://previews.123rf.com/images/elenavdovina/elenavdovina1702/elenavdovina170200009/70843685-fondo-transparente-azul-categor%C3%ADas-de-productos-tienda-en-l%C3%ADnea-fondo-azul-sin-fisuras-con-los.jpg",
    tituloMiniatura: "Artículo 6",
    subtituloMiniatura: "Subtítulo 6"
  },
  {
    articleId:"007",
    articleCountries:["Spain", "Portugal"],
    articleCategories:["cat3", "cat4"],
    miniatureSrc: "img7.jpg",
    selectedSrc: "https://previews.123rf.com/images/elenavdovina/elenavdovina1702/elenavdovina170200009/70843685-fondo-transparente-azul-categor%C3%ADas-de-productos-tienda-en-l%C3%ADnea-fondo-azul-sin-fisuras-con-los.jpg",
    tituloMiniatura: "Artículo 7",
    subtituloMiniatura: "Subtítulo 7"
  },
];

export default function Home() {
  // Dividimos en filas de 3
  const chunkedArticles = [];
  for (let i = 0; i < Math.min(articlesArray.length, 15); i += 3) {
    chunkedArticles.push(articlesArray.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col min-h-screen gap-6 p-4 bg-white text-gray-500 ">
      <div className="flex flex-row justify-between items-center">
        <p className="text-xl font-bold">Galería de artículos</p>
        <div className="bg-transparent border border-gray-100  rounded shadow px-2 py-1 flex gap-2 items-center">
          <input
            className="w-full bg-transparent outline-none"
            placeholder="Buscar por coincidencias"
          />
          <button className="bg-white px-2 py-1 rounded hover:bg-gray-100">
            Buscar
          </button>
        </div>
      </div>

      {/* Renderizado en filas */}
      {chunkedArticles.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row gap-4">
          {row.map((article, index) => (
            <ArticleMiniature
              key={index}
              miniatureSrc={article.miniatureSrc}
              selectedSrc={article.selectedSrc}
              tituloMiniatura={article.tituloMiniatura}
              subtituloMiniatura={article.subtituloMiniatura}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
