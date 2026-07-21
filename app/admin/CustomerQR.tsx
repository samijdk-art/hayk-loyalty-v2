"use client";

export default function CustomerQR({
  id,
}: {
  id: string;
}) {
  const customerUrl = `https://hayk-loyalty-v2-nine.vercel.app/customer/${id}`;

  const qrUrl =
    "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=" +
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