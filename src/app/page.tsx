"use client"

import ArticleMiniature from "./components/ArticleMiniature";

// Simulamos un array de artículos
const articlesArray = [
  {
    miniatureSrc: "img1.jpg",
    selectedSrc: "img1_large.jpg",
    tituloMiniatura: "Artículo 1",
    subtituloMiniatura: "Subtítulo 1"
  },
  {
    miniatureSrc: "img2.jpg",
    selectedSrc: "img2_large.jpg",
    tituloMiniatura: "Artículo 2",
    subtituloMiniatura: "Subtítulo 2"
  },
  // ... puedes seguir agregando más artículos
];

export default function Home() {
  // Dividimos en filas de 3
  const chunkedArticles = [];
  for (let i = 0; i < Math.min(articlesArray.length, 15); i += 3) {
    chunkedArticles.push(articlesArray.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col min-h-screen gap-6 p-4">
      <div className="flex flex-row justify-between items-center">
        <p className="text-xl font-bold">Galería de artículos</p>
        <div className="bg-transparent border border-gray-100 text-gray-500 rounded shadow px-2 py-1 flex gap-2 items-center">
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
