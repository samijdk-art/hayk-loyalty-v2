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
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        px-6
        py-3
        rounded-xl
        bg-gradient-to-r
        from-amber-500
        to-orange-500
        text-white
        font-semibold
        shadow-lg
        transition-all
        duration-200
        hover:scale-105
        hover:shadow-xl
        hover:from-amber-600
        hover:to-orange-600
        active:scale-100
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      {loading ? (
        <>
          ⏳ Saving...
        </>
      ) : (
        <>
          ☕ Register Drink
        </>
      )}
    </button>
  );
}