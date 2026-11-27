"use client";

import { Printer } from "lucide-react";

export function PrintButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => window.print()} className="btn btn-secondary !min-h-10 !px-4 !text-sm">
      <Printer size={15} aria-hidden />
      {label}
    </button>
  );
}
