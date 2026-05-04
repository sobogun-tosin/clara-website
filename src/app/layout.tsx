import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Clara - Own your restaurant online",
    template: "%s | Clara",
  },
  description:
    "Clara is a commerce and operations platform for UK restaurants. Free branded website, dine-in QR ordering, fast payments, no marketplace commissions.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
