"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("Bamland");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          branch,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.error || "Registration failed");
        return;
      }

      alert("Welcome to HAYK Loyalty Club!");

      router.push(`/customer/${result.customer.id}`);
    } catch {
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-lg">

        <div className="glass shadow-soft p-10">

          <div className="text-center">

            <p className="tracking-[8px] uppercase text-amber-400 text-sm font-semibold">
              HAYK
            </p>

            <h1 className="text-4xl font-bold text-white mt-4">
              Join Loyalty Club
            </h1>

            <p className="text-stone-400 mt-3">
              Create your account and start collecting rewards.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 mt-10"
          >

            <div className="grid grid-cols-2 gap-4">

              <input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />

            </div>

            <input
              type="tel"
              placeholder="09xxxxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option value="Bamland">Bamland</option>
              <option value="Sadeghieh">Sadeghieh</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="gold-button w-full py-4 disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Join Loyalty Club"}
            </button>

          </form>

          <button
            onClick={() => router.push("/login")}
            className="dark-button w-full py-4 mt-5"
          >
            Already have an account? Login
          </button>

        </div>

      </div>

    </main>
  );
}