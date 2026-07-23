import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#120d08] via-[#1d140d] to-[#2c1c11] flex items-center justify-center px-6 py-12 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-amber-500/10 blur-[180px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-orange-400/10 blur-[180px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-xl w-full">

        <div className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,.45)] p-10">

          <div className="flex justify-center mb-8">
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <p className="text-center tracking-[10px] uppercase text-amber-400 font-semibold text-sm">
            HAYK
          </p>

          <h1 className="text-5xl font-bold text-center mt-5 text-white">
            Loyalty Club
          </h1>

          <p className="text-center text-stone-300 mt-6 leading-7">
            Earn points with every coffee, unlock exclusive rewards and enjoy a
            premium coffee experience.
          </p>

          <div className="mt-12 space-y-5">

            <Link
              href="/register"
              className="block w-full rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 py-4 text-center font-bold text-black transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,158,11,.45)]"
            >
              ☕ Join Loyalty Club
            </Link>

            <Link
              href="/login"
              className="block w-full rounded-2xl border border-amber-400/30 bg-white/5 py-4 text-center font-semibold text-white transition duration-300 hover:bg-white/10"
            >
              👤 Customer Login
            </Link>

            <Link
              href="/admin/login"
              className="block w-full rounded-2xl border border-white/10 bg-black/40 py-4 text-center font-semibold text-stone-200 transition duration-300 hover:bg-black/60"
            >
              👨‍💼 Staff / Admin
            </Link>

          </div>

          <div className="mt-12 border-t border-white/10 pt-6">

            <div className="flex justify-center gap-10 text-center">

              <div>
                <h3 className="text-2xl font-bold text-amber-400">☕</h3>
                <p className="text-sm text-stone-400 mt-2">Earn Points</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-400">🎁</h3>
                <p className="text-sm text-stone-400 mt-2">Free Drinks</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-400">⭐</h3>
                <p className="text-sm text-stone-400 mt-2">VIP Rewards</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}