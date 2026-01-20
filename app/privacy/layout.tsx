import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy | LoveIQ",
  description: "How LoveIQ protects your privacy, anonymity, and data with science-first safeguards.",
};

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}
