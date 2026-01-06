"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Loja() {
  const searchParams = useSearchParams();

  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [aberto, setAberto] = useState<number | null>(null);

  useEffect(() => {
    const cat = searchParams.get("categoria");
    if (cat) setCategoriaAtiva(cat);
  }, [searchParams]);

  const produtos = [
    {
      nome: "Cachecol Preto do Eremes",
      preco: "4,99",
      imagem: "/produtos/eremes preto.png",
      categoria: "baixo",
      descricao: "Visual clássico usado por Eremes.",
      detalhes: ["Tipo: Visual", "Equipa em: Baixo"],
      pagamento: "SEU_LINK_MERCADO_PAGO_AQUI",
    },
    {
      nome: "Cachecol Azul do Eremes",
      preco: "4,99",
      imagem: "/produtos/eremes azul.png",
      categoria: "baixo",
      descricao: "Visual alternativo.",
      detalhes: ["Tipo: Visual", "Equipa em: Baixo"],
      pagamento: "SEU_LINK_MERCADO_PAGO_AQUI",
    },
    {
      nome: "Asas Infernais",
      preco: "22,00",
      imagem: "/produtos/asas.png",
      categoria: "capa",
      descricao: "Visual raro e intimidador.",
      detalhes: ["Tipo: Visual", "Equipa em: Costas"],
      pagamento: "SEU_LINK_MERCADO_PAGO_AQUI",
    },
    {
      nome: "Poção Suprema",
      preco: "5,00",
      imagem: "/produtos/pocao.png",
      categoria: "consumiveis",
      descricao: "Restaura HP e MP.",
      detalhes: ["Uso único"],
      pagamento: "SEU_LINK_MERCADO_PAGO_AQUI",
    },
  ];

  const produtosFiltrados =
    categoriaAtiva === "todos"
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaAtiva);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 px-6">
      <a href="/" className="inline-block mb-8 text-blue-400 hover:text-blue-300">
        ← Voltar para início
      </a>

      <h1 className="text-4xl font-bold text-center text-blue-500 mb-10 drop-shadow-[0_0_12px_#3b82f6]">
        Loja WYD Hell
      </h1>

      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {["todos", "topo", "meio", "baixo", "capa", "consumiveis"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaAtiva(cat)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              categoriaAtiva === cat
                ? "bg-blue-600 shadow-[0_0_15px_#3b82f6]"
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
            className="relative w-[230px] p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:border-blue-500 hover:shadow-[0_0_28px_#3b82f6]"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />

            <div className="relative w-full h-[160px] flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="max-h-full max-w-full object-contain rounded-md drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
            </div>

            <h2 className="mt-4 text-lg font-bold text-center text-blue-400">
              {produto.nome}
            </h2>

            <p className="mt-1 text-center text-zinc-300">R$ {produto.preco}</p>

            <button
              onClick={() => setAberto(aberto === index ? null : index)}
              className="mt-3 w-full text-xs text-blue-400 hover:text-blue-300"
            >
              {aberto === index ? "Ocultar ▲" : "Detalhes ▼"}
            </button>

            {aberto === index && (
              <>
                <p className="mt-3 text-xs text-zinc-300">
                  {produto.descricao}
                </p>

                <ul className="mt-3 text-xs text-zinc-300 space-y-1">
                  {produto.detalhes.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </>
            )}

            <a
              href={produto.pagamento}
              target="_blank"
              className="block mt-5 text-center text-sm font-bold py-2.5 rounded-lg bg-green-600 hover:bg-green-700 transition"
            >
              Comprar via PIX
            </a>

            <p className="mt-3 text-[11px] text-zinc-400 text-center leading-relaxed">
              Após o pagamento, o número do pedido será enviado para seu e-mail.
              <br />
              Envie o número do pedido via WhatsApp para concluir a entrega.
            </p>

            <a
              href="https://wa.me/55SEU_NUMERO_WHATSAPP_AQUI"
              target="_blank"
              className="block mt-2 text-xs text-center text-blue-400 hover:underline"
            >
              Enviar pedido no WhatsApp
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
