import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { valor, descricao } = body;

    if (!valor || !descricao) {
      return NextResponse.json(
        { error: "Dados inválidos" },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api.mercadopago.com/v1/payments",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.MP_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
          "X-Idempotency-Key": crypto.randomUUID(),
        },
        body: JSON.stringify({
          transaction_amount: valor,
          description: descricao,
          payment_method_id: "pix",
          payer: {
            email: "comprador@email.com",
          },
        }),
      }
    );

    const data = await response.json();

    if (!data.point_of_interaction?.transaction_data?.ticket_url) {
      console.error("Erro Mercado Pago:", data);
      return NextResponse.json(
        { error: "Erro ao gerar PIX" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ticket_url:
        data.point_of_interaction.transaction_data.ticket_url,
    });
  } catch (error) {
    console.error("Erro API PIX:", error);
    return NextResponse.json(
      { error: "Erro interno" },
      { status: 500 }
    );
  }
}
