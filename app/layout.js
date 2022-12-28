import "../styles/globals.css";
import { Roboto, Fredericka_the_Great } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
});

const frederickaTheGreat = Fredericka_the_Great({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fredericka",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${frederickaTheGreat.variable}`}
    >
      <head />
      <body className="h-screen bg-gray-700 p-2">{children}</body>
    </html>
  );
}
