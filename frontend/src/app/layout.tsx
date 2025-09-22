import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentes de Automação IA",
  description: "Encontre e automatize suas tarefas com agentes de IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
