"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddCustomer() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    if (!name || !phone) {
      setMessage("Please enter name and phone");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          NAME: name,
          PHONE: phone,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        setMessage(error.error || "Save failed");
        setSaving(false);
        return;
      }

      setName("");
      setPhone("");
      setMessage("Customer saved successfully");

      router.refresh();
    } catch (error) {
      setMessage("Server error");
    }

    setSaving(false);
  }

  return (
    <div className="bg-white rounded-[30px] shadow-xl border border-stone-200 p-8">

      <div className="mb-8">

        <p className="uppercase tracking-[6px] text-amber-700 text-sm font-semibold">
          Loyalty
        </p>

        <h2 className="text-3xl font-bold text-stone-900 mt-2">
          Add New Customer
        </h2>

        <p className="text-stone-500 mt-2">
          Register a customer and start collecting loyalty points.
        </p>

      </div>

      <div className="space-y-5">

        <input
          className="
          w-full
          rounded-2xl
          border
          border-stone-300
          bg-stone-50
          px-5
          py-4
          outline-none
          transition
          focus:bg-white
          focus:border-amber-700
          focus:ring-4
          focus:ring-amber-100
          "
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="
          w-full
          rounded-2xl
          border
          border-stone-300
          bg-stone-50
          px-5
          py-4
          outline-none
          transition
          focus:bg-white
          focus:border-amber-700
          focus:ring-4
          focus:ring-amber-100
          "
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={saving}
          className="
          w-full
          rounded-2xl
          bg-black
          text-white
          py-4
          font-semibold
          text-lg
          transition
          hover:bg-stone-800
          hover:scale-[1.01]
          active:scale-100
          disabled:opacity-60
          "
        >
          {saving ? "Saving..." : "Save Customer"}
        </button>

        {message && (
          <div
            className={`
              rounded-2xl
              px-4
              py-3
              text-sm
              ${
                message.includes("success")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }
            `}
          >
            {message}
          </div>
        )}

      </div>

    </div>
  );
}