import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    "https://api.mercadopago.com/v1/payments",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transaction_amount: Number(body.valor),
        payment_method_id: "pix",
        description: body.descricao,
        payer: {
          email: body.email,
        },
        metadata: {
          pedido: body.pedido,
        },
      }),
    }
  );

  const data = await response.json();

  return NextResponse.json({
    qrCodeBase64:
      data.point_of_interaction.transaction_data.qr_code_base64,
    copiaCola:
      data.point_of_interaction.transaction_data.qr_code,
  });
}
