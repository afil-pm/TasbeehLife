import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata: Metadata = {
  title: "TasbeehLife | Islamic Prayer & Learning Guide",
  description: "Learn Islamic prayer (Salah) and ablution (Wudu) step-by-step with interactive postures, recitations, translation, and audio simulation in English, Malayalam, and Arabic.",
  keywords: ["islamic prayer", "salah guide", "wudu step by step", "malayalam prayers", "learn salah arabic", "qibla compass", "tasbih counter"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800 flex flex-col antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
