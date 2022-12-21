import "../styles/globals.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <head />
      <body className="h-screen bg-gray-700 p-2">{children}</body>
    </html>
  );
}
