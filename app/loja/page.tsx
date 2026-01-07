"use client";

import { Suspense } from "react";
import Loja from "./loja";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-white">Carregando loja...</div>}>
      <Loja />
    </Suspense>
  );
}
