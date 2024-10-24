import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "./provider";

export const metadata: Metadata = {
    title: "Adithyan's Portfolio",
    description: "My personal work",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
