"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function QRCode({
  id,
}: {
  id: string;
}) {
  const url = `http://localhost:3000/customer/${id}`;

  return (
    <div className="mt-8 text-center">

      <h3 className="font-bold text-lg mb-4">
        Customer QR Code
      </h3>

      <QRCodeCanvas
        value={url}
        size={220}
      />

      <p className="mt-3 text-sm text-gray-500">
        Scan to open customer profile
      </p>

    </div>
  );
}