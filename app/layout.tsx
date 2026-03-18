import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "semantic-ui-css/semantic.min.css";
import "./globals.css";
import MenuSistema from "././src/components/MenuSistema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OXEFOOD",
  description: "Sistema de cadastro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          margin: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <MenuSistema />

        <main
          style={{
            position: "fixed",
            top: "48px",       // altura do menu
            bottom: "56px",    // altura do rodapé
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start", // começa mais em cima da área útil
            padding: "32px 24px 24px", // empurra o conteúdo para baixo
            overflow: "hidden",
          }}
        >
          {children}
        </main>

        <footer
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            textAlign: "center",
            padding: "14px",
            backgroundColor: "#f1f1f1",
            borderTop: "1px solid #ddd",
            zIndex: 1000,
          }}
        >
          © 2026 - Projeto WEB IV - IFPE Jaboatão
        </footer>
      </body>
    </html>
  );
}