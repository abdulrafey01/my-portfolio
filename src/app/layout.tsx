import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const lufgaFont = localFont({
  src: [
    {
      path: "../../public/fonts/Lufga/LufgaRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lufga/LufgaBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lufga/LufgaLight.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Abdul Rafey Portfolio",
  description: "A proficient MERN stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lufgaFont.className} antialiased`}>{children}</body>
    </html>
  );
}
