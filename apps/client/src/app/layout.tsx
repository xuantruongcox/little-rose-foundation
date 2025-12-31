import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AiAgentWidget from "@/components/features/ai-agent";
config.autoAddCss = false;
const gotham = localFont({
  src: [
    {
      path: "../assets/fonts/gotham/SVN-Gotham-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/gotham/SVN-Gotham-Thin-Italic.otf",
      weight: "100",
      style: "italic",
    },

    {
      path: "../assets/fonts/gotham/SVN-Gotham-XLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/gotham/SVN-Gotham-XLight-Italic.otf",
      weight: "200",
      style: "italic",
    },

    {
      path: "../assets/fonts/gotham/SVN-Gotham-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/gotham/SVN-Gotham-Light-Italic.otf",
      weight: "300",
      style: "italic",
    },

    {
      path: "../assets/fonts/gotham/SVN-Gotham-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/gotham/SVN-Gotham-Book-Italic.otf",
      weight: "400",
      style: "italic",
    },

    {
      path: "../assets/fonts/gotham/SVN-Gotham-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/gotham/SVN-Gotham-Bold-Italic.otf",
      weight: "700",
      style: "italic",
    },

    {
      path: "../assets/fonts/gotham/SVN-Gotham-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/gotham/SVN-Gotham-Black-Italic.otf",
      weight: "900",
      style: "italic",
    },

    {
      path: "../assets/fonts/gotham/SVN-Gotham-Ultra.otf",
      weight: "950",
      style: "normal",
    },
    {
      path: "../assets/fonts/gotham/SVN-Gotham-Ultra-Italic.otf",
      weight: "950",
      style: "italic",
    },
  ],
  variable: "--font-gotham",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quỹ Bông Hồng Nhỏ LRF",
  description: "Cổng thông tin quyên góp từ thiện",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gotham.variable} antialiased`}>
        <main>{children}</main>
        <AiAgentWidget />
      </body>
    </html>
  );
}
