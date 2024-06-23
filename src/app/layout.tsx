import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
