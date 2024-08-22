"use client";
import Header from "./components/header/header";
import Footer from "./components/footer";

import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactElement, ReactNode, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showTopMenu, setShowTopMenu] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header showTopMenu={showTopMenu} setShowTopMenu={setShowTopMenu} />
          <div className="bg-slate-100">
            <div className=" bg-white container rounded-t-lg max-w-screen-xl mx-auto relative -top-36 shadow-slate-700 shadow-lg">
              <div className="container  max-w-screen-xl mx-auto">
              <ToastContainer />

                {children}
              </div>
            </div>
          </div>
          <Footer showTopMenu={showTopMenu} setShowTopMenu={setShowTopMenu} />
        </main>
      </body>
    </html>
  );
}
