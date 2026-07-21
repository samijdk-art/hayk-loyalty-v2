import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] flex flex-col items-center justify-center px-6">

      <Image
        src="/logo.jpeg"
        alt="HAYK"
        width={170}
        height={170}
        className="mb-8"
      />

      <h1 className="text-4xl font-extrabold tracking-wide text-[#3A2414] text-center">
        HAYK
      </h1>

      <p className="text-xl mt-2 text-[#6B4A2E] font-medium">
        BAMLAND & SADEQIE
      </p>

      <div className="w-24 h-[2px] bg-[#C7A26A] my-8"></div>

      <h2 className="text-2xl font-bold text-[#3A2414]">
        Loyalty Club
      </h2>

      <p className="text-gray-600 mt-3 text-center max-w-md">
        Collect points with every coffee and enjoy exclusive rewards.
      </p>

      <div className="mt-12 flex flex-col gap-5 w-full max-w-sm">

        <Link
          href="/customer"
          className="bg-[#3A2414] hover:bg-[#4B2F1A] transition text-white text-center py-4 rounded-2xl font-semibold shadow-lg"
        >
          ☕ Scan My QR
        </Link>

        <Link
          href="/customer"
          className="border-2 border-[#3A2414] text-[#3A2414] text-center py-4 rounded-2xl font-semibold hover:bg-[#3A2414] hover:text-white transition"
        >
          ⭐ My Points
        </Link>

        <Link
          href="/admin"
          className="text-center text-gray-500 hover:text-black mt-4"
        >
          Admin Login
        </Link>

      </div>

    </main>
  );
}