"use client";

export default function CustomerQR({
  id,
}: {
  id: string;
}) {
  const customerUrl = `https://hayk-loyalty-v2-nine.vercel.app/customer/${id}`;

  const qrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(customerUrl);

  return (
    <div className="mt-4 text-center">
      <img
        src={qrUrl}
        alt="Customer QR"
        width={150}
        height={150}
        className="rounded-lg border"
      />

      <p className="text-xs mt-2 text-gray-500">
        Scan Customer QR
      </p>
    </div>
  );
}