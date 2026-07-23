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
        className="mb-8 rounded-full shadow-xl"
      />

      <h1 className="text-5xl font-extrabold tracking-wide text-[#3A2414] text-center">
        HAYK
      </h1>

      <p className="text-xl mt-2 text-[#6B4A2E] font-medium">
        BAMLAND & SADEQIE
      </p>

      <div className="w-24 h-[2px] bg-[#C7A26A] my-8"></div>

      <h2 className="text-3xl font-bold text-[#3A2414]">
        Loyalty Club
      </h2>

      <p className="text-gray-600 mt-4 text-center max-w-md leading-7">
        Collect points with every coffee and unlock exclusive rewards.
      </p>

      <div className="mt-12 w-full max-w-sm space-y-4">

        <Link
          href="/login"
          className="block w-full bg-[#3A2414] hover:bg-[#4B2F1A] transition text-white text-center py-4 rounded-2xl font-semibold shadow-lg"
        >
          📱 Customer Login
        </Link>

        <Link
          href="/register"
          className="block w-full bg-white border border-[#3A2414] text-[#3A2414] hover:bg-[#F1ECE6] transition text-center py-4 rounded-2xl font-semibold shadow"
        >
          ☕ Join Loyalty Club
        </Link>

        <Link
          href="/admin"
          className="block w-full bg-black hover:bg-neutral-800 transition text-white text-center py-4 rounded-2xl font-semibold shadow-lg"
        >
          👨‍💼 Staff / Admin
        </Link>

      </div>

      <p className="mt-10 text-sm text-gray-500 text-center">
        Scan your personal QR code in-store to collect points.
      </p>
    </main>
  );
}