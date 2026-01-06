"use client";

import { Suspense } from "react";
import Loja from "./Loja";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-white">Carregando loja...</div>}>
      <Loja />
    </Suspense>
  );
}
