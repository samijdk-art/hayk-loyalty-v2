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
    } catch (error) {
      console.error(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        <div className="glass shadow-soft p-10">

          <div className="flex justify-center mb-8">
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <p className="text-center tracking-[8px] uppercase text-amber-400 text-sm font-semibold">
            HAYK
          </p>

          <h1 className="text-center text-4xl font-bold mt-4 text-white">
            Welcome Back
          </h1>

          <p className="text-center text-stone-300 mt-3">
            Login to your loyalty account
          </p>

          <form
            onSubmit={handleLogin}
            className="mt-10 space-y-6"
          >

            <div>

              <label className="block mb-3 text-sm text-stone-300 font-medium">
                Mobile Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="09xxxxxxxxx"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="gold-button w-full py-4 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <div className="mt-10 border-t border-white/10 pt-6 text-center">

            <p className="text-sm text-stone-400">
              New to HAYK?
            </p>

            <button
              onClick={() => router.push("/register")}
              className="mt-4 dark-button w-full py-4"
            >
              Create Account
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}