"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.error || "Customer not found");
        return;
      }

      router.push(`/customer/${result.customer.id}`);
    } catch {
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F6F2] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-[#3A2414]">
          HAYK
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Customer Login
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Mobile Number
            </label>

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border rounded-xl p-3"
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-[#3A2414] text-white rounded-xl py-4 font-semibold"
          >
            {loading ? "Loading..." : "Login"}
          </button>

        </form>

      </div>
    </main>
  );
}