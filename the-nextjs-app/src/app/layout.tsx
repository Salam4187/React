import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppThemeContextProvider  } from "@/context/AppThemeContext";
import AppBar from "@/components/AppBar";
import { Provider } from 'react-redux'
import { store } from "@/redux/store";
import ReduxProvider from "@/redux/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "the nextjs app",
  description: "This is the demo for nextjs 13.4 with app directory and react 18 features",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
       <ReduxProvider >
      <AppThemeContextProvider>
        <body className="min-h-full flex flex-col">
          <header>
            <AppBar/>
          </header>
          <main>
            {children}
          </main>
        </body>
      </AppThemeContextProvider>
      </ReduxProvider>
    </html>
  );
}
