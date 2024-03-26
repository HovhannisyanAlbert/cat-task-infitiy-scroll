import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/features/Providers/Providers";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
