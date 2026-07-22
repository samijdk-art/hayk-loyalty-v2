"use client";

export default function CustomerQR({
  id,
}: {
  id: string;
}) {
  const customerUrl = `https://hayk-loyalty-v2-nine.vercel.app/customer/${id}`;

  const qrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" +
    encodeURIComponent(customerUrl);

  return (
    <div className="flex flex-col items-center">

      <div className="
        bg-stone-50
        rounded-3xl
        p-5
        border
        border-stone-200
        shadow-md
      ">

        <img
          src={qrUrl}
          alt="Customer QR"
          width={170}
          height={170}
          className="rounded-2xl"
        />

      </div>

      <p className="mt-4 text-sm font-medium text-stone-600">
        Customer QR Code
      </p>

      <p className="text-xs text-stone-400 mt-1">
        Scan to open loyalty card
      </p>

    </div>
  );
}