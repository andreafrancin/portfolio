import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" title="Andrea Francin">
      <Head>
        <title>Andrea Francin</title>
        <meta name="Andrea Francin" content="Graphic Designer & Illustrator" />
      </Head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
