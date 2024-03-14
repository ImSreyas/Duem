import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav/Nav";
import MobileNav from "./components/nav/MobileNav";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Duem",
  description: "Online ledger"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const modernMobileNav = true;

  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${poppins.className} overflow-x-hidden ${modernMobileNav ? "pb-12" : ""}`}>
        <Nav mobileNavState={modernMobileNav} />
        {children}
        <MobileNav state={modernMobileNav}/>
      </body>
    </html>
  );
}
