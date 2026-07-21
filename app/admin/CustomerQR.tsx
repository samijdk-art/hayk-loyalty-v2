"use client";

import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function CustomerQR({
  id,
}: {
  id: string;
}) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(`${window.location.origin}/customer/${id}`);
  }, [id]);

  if (!url) return null;

  return (
    <div className="mt-4">
      <QRCodeCanvas
        value={url}
        size={150}
      />

      <p className="text-xs mt-2 text-gray-500">
        Scan Customer QR
      </p>
    </div>
  );
}