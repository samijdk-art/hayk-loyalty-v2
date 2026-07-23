"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.error || "Wrong password");
        return;
      }

      router.push("/admin");
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
          Staff Login
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Enter admin password
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl p-3"
            required
          />

          <button
            disabled={loading}
            className="w-full bg-black text-white rounded-xl py-4 font-semibold"
          >
            {loading ? "Checking..." : "Login"}
          </button>

        </form>

      </div>
    </main>
  );
}