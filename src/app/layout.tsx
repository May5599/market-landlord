
import "./globals.css"; 
import { Inter, DM_Serif_Display } from "next/font/google";
import Navbar from "@/components/Navbar";   // ✅ fixed import
import Footer from "@/components/Footer";   // ✅ fixed import

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-dm-serif" });

export const metadata = {
  title: "MrLandlord.ca | Property Management Franchise",
  description: "Franchise opportunities in property management. A division of Rent In Ottawa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} font-sans bg-white text-navy`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
