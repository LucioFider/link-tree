import "../styles/globals.css";
import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
