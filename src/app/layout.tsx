import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import { TranslationsProvider } from "@/context/TranslationsContext";

export const metadata = {
  title: "Andrea Francin",
  description: "Graphic Designer & Illustrator",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TranslationsProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
