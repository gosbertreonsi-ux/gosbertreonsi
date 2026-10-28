"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  if (!email) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button className="outlined-button small" onClick={copy} type="button" aria-label={copied ? "Email copied" : "Copy email address"}>
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}
