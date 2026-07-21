import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F3ED]">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">

        <div className="max-w-xl">

          <p className="text-[#C66A1C] font-bold tracking-[6px] uppercase">
            Premium Coffee Loyalty
          </p>

          <h1 className="font-[var(--font-playfair)] text-6xl lg:text-7xl font-bold mt-6 leading-tight">
            Every Coffee
            <br />
            Brings You
            <span className="text-[#C66A1C]"> Closer.</span>
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9">
            Join the HAYK Loyalty Club and collect points with every coffee.
            Enjoy rewards, exclusive offers and a premium coffee experience.
          </p>

          <div className="flex gap-4 mt-10">

            <Link
              href="/admin"
              className="primary-btn"
            >
              Open Admin
            </Link>

            <Link
              href="/scan"
              className="border border-[#C66A1C] rounded-2xl px-8 py-4 font-bold text-[#C66A1C] hover:bg-[#C66A1C] hover:text-white transition"
            >
              Scan QR
            </Link>

          </div>

        </div>

        <div className="glass rounded-[40px] p-10 shadow-soft">

          <div className="text-[150px] text-center">
            ☕
          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="glass rounded-3xl p-8">

            <div className="text-5xl mb-6">
              ☕
            </div>

            <h2 className="text-2xl font-bold mb-3">
              Collect Drinks
            </h2>

            <p className="text-gray-600 leading-8">
              Every purchase is automatically saved to your loyalty account.
            </p>

          </div>

          <div className="glass rounded-3xl p-8">

            <div className="text-5xl mb-6">
              ⭐
            </div>

            <h2 className="text-2xl font-bold mb-3">
              Earn Points
            </h2>

            <p className="text-gray-600 leading-8">
              Every coffee brings you closer to exclusive rewards.
            </p>

          </div>

          <div className="glass rounded-3xl p-8">

            <div className="text-5xl mb-6">
              🎁
            </div>

            <h2 className="text-2xl font-bold mb-3">
              Free Coffee
            </h2>

            <p className="text-gray-600 leading-8">
              Reach your goal and redeem your complimentary coffee.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}