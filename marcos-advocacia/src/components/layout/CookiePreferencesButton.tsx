"use client";

import { hasOptionalTracking, OPEN_PREFERENCES_EVENT } from "@/lib/consent";

export function CookiePreferencesButton() {
  if (!hasOptionalTracking) return null;
  return (
    <button
      type="button"
      className="link-underline hover:text-white"
      onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
    >
      Preferências de cookies
    </button>
  );
}
