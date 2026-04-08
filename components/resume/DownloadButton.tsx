"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import PDFLoadingOverlay from "./PDFLoadingOverlay";

export default function DownloadButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const MIN_DISPLAY = 2800;
    const start = Date.now();
    try {
      const { pdf } = await import("@react-pdf/renderer");
      const { ResumePDF } = await import("./ResumePDF");
      const blob = await pdf(<ResumePDF />).toBlob();
      const elapsed = Date.now() - start;
      if (elapsed < MIN_DISPLAY) {
        await new Promise((r) => setTimeout(r, MIN_DISPLAY - elapsed));
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "David_Finney_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PDFLoadingOverlay visible={loading} />
      <button
        onClick={handleDownload}
        disabled={loading}
        className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 active:scale-95 disabled:opacity-60 disabled:cursor-wait text-navy-950 font-bold text-sm px-6 py-3.5 rounded-full transition-all shrink-0"
      >
        <Download size={15} /> Download PDF
      </button>
    </>
  );
}
