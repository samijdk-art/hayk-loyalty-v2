"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      alert("Username یا Password اشتباه است.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-950 via-black to-stone-900 px-6">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl border border-amber-500/20 bg-white/5 backdrop-blur-xl p-10 shadow-2xl"
      >

        <p className="text-amber-400 tracking-[6px] text-center uppercase font-semibold">
          HAYK
        </p>

        <h1 className="text-4xl font-bold text-white text-center mt-4">
          Admin Login
        </h1>

        <div className="mt-10 space-y-5">

          <input
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-4 text-white outline-none"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-4 text-white outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-amber-500 py-4 font-bold text-black hover:bg-amber-400 transition"
          >
            {loading ? "Loading..." : "Login"}
          </button>

        </div>

      </form>

    </main>
  );
}