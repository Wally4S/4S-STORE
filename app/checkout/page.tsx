"use client";

import { useState } from "react";

export default function Checkout() {
  const [pix, setPix] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function gerarPix() {
    setLoading(true);

    const res = await fetch("/api/pix", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        valor: 30,
        descricao: "Produto VIP - 4S STORE",
        email: "cliente@email.com",
        pedido: "PED-" + Date.now(),
      }),
    });

    const data = await res.json();
    setPix(data);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-xl w-[360px] text-center">

        <h1 className="text-2xl font-bold mb-4">Pagamento via PIX</h1>

        <button
          onClick={gerarPix}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg text-lg font-bold"
        >
          {loading ? "Gerando PIX..." : "Gerar PIX"}
        </button>

        {pix && (
          <div className="mt-6">
            <img
              src={`data:image/png;base64,${pix.qrCodeBase64}`}
              alt="QR Code PIX"
              className="mx-auto mb-4 rounded-lg"
            />

            <textarea
              value={pix.copiaCola}
              readOnly
              className="w-full p-2 rounded text-black text-sm"
            />

            <p className="text-xs text-gray-400 mt-3">
              Após o pagamento, envie o número do pedido pelo WhatsApp.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
