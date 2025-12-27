import "./globals.css";

export const metadata = {
  title: "LoveIQ",
  description: "Science-backed sexual psychology assessment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white dark:bg-[#050208]">
        {children}
      </body>
    </html>
  );
}
