import { NextResponse } from "next/server";
import MercadoPago from "mercadopago";

const client = new MercadoPago({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN as string,
});

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

    const pagamento = await client.payment.create({
      transaction_amount: valor,
      description: descricao,
      payment_method_id: "pix",
      payer: {
        email: "cliente@seudominio.com",
      },
    });

    return NextResponse.json({
      ticket_url: pagamento.point_of_interaction?.transaction_data?.ticket_url,
      qr_code: pagamento.point_of_interaction?.transaction_data?.qr_code,
      qr_code_base64:
        pagamento.point_of_interaction?.transaction_data?.qr_code_base64,
    });
  } catch (error) {
    console.error("Erro PIX:", error);
    return NextResponse.json(
      { error: "Erro ao gerar pagamento PIX" },
      { status: 500 }
    );
  }
}
