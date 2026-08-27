import { Fraunces, Nunito } from "next/font/google";
import BootstrapClient from "../components/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-body",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <body>
        <BootstrapClient />
        <main>{children}</main>
      </body>
    </html>
  );
}