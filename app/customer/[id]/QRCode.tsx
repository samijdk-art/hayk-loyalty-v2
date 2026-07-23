"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function QRCode({
  id,
}: {
  id: string;
}) {

  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/customer/${id}`
      : "";

  return (
    <div className="mt-8 flex flex-col items-center">

      <div className="bg-white rounded-3xl shadow-lg p-6">

        <QRCodeCanvas
          value={url}
          size={220}
          includeMargin
        />

      </div>

      <p className="mt-4 text-gray-500 text-sm">
        Scan to open your loyalty card
      </p>

    </div>
  );
}