import React from "react";
import type { Metadata } from "next";
import "@/styles/index.css";
import { fontAclonica, fontMontserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Header from "@/components/header";

export const metadata: Metadata = {
    title: "",
    description: "",
};

type Props = Readonly<{
    children: React.ReactNode;
}>;

function RootLayout({ children }: Props) {
    return (
        <html
            className={cn(fontMontserrat.variable, fontAclonica.variable)}
            lang="en"
        >
            <body className="bg-background text-foreground font-sans antialiased">
                <Header />
                <main className="overflow-hidden">{children}</main>
            </body>
        </html>
    );
}

export default RootLayout;
