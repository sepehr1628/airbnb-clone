import type { Metadata } from "next";

import { Nunito } from "next/font/google";
import Navbar from "./_components/Navbar";
import Modal from "./_components/Modal";

export const metadata: Metadata = {
  title: "Airbnb clone",
  description: "Generated by Sepehr1628. Airbnb clone",
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal actionLabel="Submit" title="Hello World!" isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
