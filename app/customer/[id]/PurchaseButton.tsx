"use client";

import { useState } from "react";

export default function PurchaseButton({
  id,
}: {
  id: string;
}) {

  const [loading, setLoading] = useState(false);

  async function addPurchase() {

    setLoading(true);

    await fetch("/api/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    setLoading(false);

    window.location.reload();

  }

  return (
    <button
      onClick={addPurchase}
      disabled={loading}
      className="
        mt-8
        w-full
        rounded-2xl
        bg-[#3A2414]
        hover:bg-[#52331D]
        text-white
        py-4
        font-bold
        text-lg
        shadow-lg
        transition
      "
    >
      {loading ? "Saving..." : "☕ Add Coffee"}
    </button>
  );
}