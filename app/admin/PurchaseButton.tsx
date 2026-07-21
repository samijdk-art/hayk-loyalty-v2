"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PurchaseButton({
  id,
}: {
  id: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function registerDrink() {
    setLoading(true);

    const res = await fetch("/api/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      alert("Error registering drink");
      setLoading(false);
      return;
    }

    router.refresh();

    setLoading(false);
  }

  return (
    <button
      onClick={registerDrink}
      disabled={loading}
      className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-bold"
    >
      {loading ? "Saving..." : "☕ Register Drink"}
    </button>
  );
}