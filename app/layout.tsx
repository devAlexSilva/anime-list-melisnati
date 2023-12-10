import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";


import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime List",
  description: "Sua lista de animes favoritos para compartilhar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={dmSans.className}>
      </body>
    </html>
  );
}
