"use client";

import { useState } from "react";

export default function PurchaseButton({
  id
}: {
  id: string
}) {

  const [loading, setLoading] = useState(false);


  async function addPurchase() {

    setLoading(true);

    const res = await fetch("/api/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id
      })
    });


    const result = await res.json();

    console.log("PURCHASE RESULT:", result);


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
      bg-black
      text-white
      rounded-2xl
      py-4
      text-lg
      font-bold
      "
    >

      {loading ? "Saving..." : "+ Add Purchase"}

    </button>

  );

}