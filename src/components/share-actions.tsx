"use client";

import { useState } from "react";

type ShareActionsProps = {
  title: string;
  caption: string;
};

export function ShareActions({ title, caption }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);
  const url = "https://lexcargo-group.com";

  async function copyCaption() {
    await navigator.clipboard.writeText(`${title}\n\n${caption}\n\n${url}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(caption)}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title}\n${caption}\n${url}`)}`;

  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <a className="button-secondary" href={facebookUrl} rel="noreferrer" target="_blank">
        Share Facebook
      </a>
      <a className="button-secondary" href={telegramUrl} rel="noreferrer" target="_blank">
        Share Telegram
      </a>
      <a className="button-secondary" href={whatsappUrl} rel="noreferrer" target="_blank">
        Share WhatsApp
      </a>
      <button className="button-secondary" type="button" onClick={copyCaption}>
        {copied ? "Caption copied" : "Copy caption for Instagram"}
      </button>
    </div>
  );
}
