"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Loja() {
  const searchParams = useSearchParams();
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [aberto, setAberto] = useState<number | null>(null);

  useEffect(() => {
    const categoria = searchParams.get("categoria");
    if (categoria) setCategoriaAtiva(categoria);
  }, [searchParams]);

  const produtos = [
    {
      nome: "Cachecol Preto do Eremes",
      preco: "4,99",
      imagem: "/produtos/eremes preto.png",
      categoria: "baixo",
      descricao: "Visual clássico usado por Eremes.",
      detalhes: ["Tipo: Visual", "Equipa em: Baixo"],
      linkPix: "https://link.mercadopago.com.br/4sstore",
    },
    {
      nome: "Cachecol Azul do Eremes",
      preco: "4,99",
      imagem: "/produtos/eremes azul.png",
      categoria: "baixo",
      descricao: "Visual alternativo.",
      detalhes: ["Tipo: Visual", "Equipa em: Baixo"],
      linkPix: "https://link.mercadopago.com.br/4sstore",
    },
    {
      nome: "Asas Infernais",
      preco: "22,00",
      imagem: "/produtos/asas.png",
      categoria: "capa",
      descricao: "Visual raro e intimidador.",
      detalhes: ["Tipo: Visual", "Equipa em: Costas"],
      linkPix: "https://link.mercadopago.com.br/4sstore",
    },
    {
      nome: "Poção Suprema",
      preco: "5,00",
      imagem: "/produtos/pocao.png",
      categoria: "consumiveis",
      descricao: "Restaura HP e MP.",
      detalhes: ["Uso único"],
      linkPix: "https://link.mercadopago.com.br/4sstore",
    },
  ];

  const produtosFiltrados =
    categoriaAtiva === "todos"
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaAtiva);

  return (
    <main className="min-h-screen bg-black text-white py-16 px-6">
      <a href="/" className="inline-block mb-8 text-blue-400 hover:text-blue-300">
        ← Voltar
      </a>

      <h1 className="text-4xl font-bold text-center text-blue-500 mb-10">
        Loja WYD Hell
      </h1>

      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {["todos", "baixo", "capa", "consumiveis"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaAtiva(cat)}
            className={`px-5 py-2 rounded-full font-bold ${
              categoriaAtiva === cat
                ? "bg-blue-600"
                : "bg-zinc-800 hover:bg-zinc-700"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {produtosFiltrados.map((produto, index) => (
          <div
            key={index}
            className="w-[240px] rounded-xl bg-zinc-900 border border-white/10 p-4"
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="rounded-md"
            />

            <h2 className="mt-3 font-bold text-blue-400">
              {produto.nome}
            </h2>

            <p className="text-sm text-zinc-300">
              R$ {produto.preco}
            </p>

            <button
              onClick={() => setAberto(aberto === index ? null : index)}
              className="mt-3 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded"
            >
              Ver detalhes
            </button>

            {aberto === index && (
              <div className="mt-3 text-sm text-zinc-300">
                <p>{produto.descricao}</p>

                <ul className="list-disc ml-4 mt-2">
                  {produto.detalhes.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>

                <a
                  href={produto.linkPix}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-center bg-green-600 hover:bg-green-500 py-2 rounded font-bold"
                >
                  Comprar via PIX
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
