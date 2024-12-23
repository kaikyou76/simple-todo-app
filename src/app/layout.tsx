import type { Metadata } from "next";
import { Noto_Sans_Javanese } from "next/font/google";
import "./globals.css";

const note_sans_javanese = Noto_Sans_Javanese({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo Application to API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={note_sans_javanese.className}>{children}</body>
    </html>
  );
}
