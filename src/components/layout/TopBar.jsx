import React, { useEffect, useState } from "react";
import {
  Bars3Icon,
  ArrowUpTrayIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

export default function TopBar({ onMenuToggle = () => {} }) {
  const [paddingRight, setPaddingRight] = useState("24px");
  const [paddingLeft, setPaddingLeft] = useState("24px");
  const [copied, setCopied] = useState(false);

  const shareLink = "https://jarvice-ai-assistant.vercel.app/";

  useEffect(() => {
    const updatePadding = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setPaddingLeft("6px");
        setPaddingRight("20px");
      } else if (width < 1024) {
        setPaddingLeft("24px");
        setPaddingRight("40px");
      } else if (width < 1280) {
        setPaddingLeft("24px");
        setPaddingRight("64px");
      } else {
        setPaddingLeft("24px");
        setPaddingRight("80px");
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);

    return () => {
      window.removeEventListener("resize", updatePadding);
    };
  }, []);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch (error) {
      setCopied(false);
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <header
      className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-white/8 bg-[#0b0f19]"
      style={{
        paddingLeft,
        paddingRight,
      }}
    >
      <div className="flex min-w-0 items-center gap-3 sm:gap-2">
        <button
          type="button"
          onClick={onMenuToggle}
          aria-label="Open sidebar"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white lg:hidden"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>

        <h1 className="text-[30px] font-medium leading-none tracking-tight text-white/90 sm:hidden">
          Jarvice
        </h1>
      </div>

      <button
        type="button"
        onClick={handleShare}
        className={`inline-flex h-9 items-center gap-2 rounded-xl border px-3 text-[14px] font-medium transition sm:px-4 ${
          copied
            ? "border-emerald-400/30 bg-emerald-500/15 text-emerald-200"
            : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
        }`}
      >
        {copied ? (
          <CheckIcon className="h-4 w-4" />
        ) : (
          <ArrowUpTrayIcon className="h-4 w-4" />
        )}

        <span>{copied ? "Copied" : "Share"}</span>
      </button>
    </header>
  );
}