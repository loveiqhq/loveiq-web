import "./globals.css";
import { Lora, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "LoveIQ",
  description: "Science-backed sexual psychology assessment",
  icons: {
    icon: "/images/LoveiqLogo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${lora.variable}`}>
      <body className="bg-white dark:bg-[#050208]">
        {children}
      </body>
    </html>
  );
}
