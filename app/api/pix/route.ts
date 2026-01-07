import { NextResponse } from "next/server";
import MercadoPagoConfig, { Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export async function POST(req: Request) {
  const body = await req.json();

  const payment = new Payment(client);

  const result = await payment.create({
    body: {
      transaction_amount: body.valor,
      description: body.descricao,
      payment_method_id: "pix",
      payer: {
        email: "cliente@email.com",
      },
    },
  });

  return NextResponse.json({
    ticket_url: result.point_of_interaction.transaction_data.ticket_url,
  });
}
