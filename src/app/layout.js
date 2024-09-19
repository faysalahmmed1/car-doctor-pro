
import "./globals.css";
import Navber from "@/components/Shared/Navber/Navber";
import { Inter } from "next/font/google";
import AuthProvider from "@/servicess/authProvider";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Car Doctor',
    template: '%s || Car Doctor',
  },
  description: "Car Reaper Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="myTheme">

      <body className={inter.className}>
        <AuthProvider>
          <Navber />
          {children}
        </AuthProvider>

      </body>
    </html>
  );
}
