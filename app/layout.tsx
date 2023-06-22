import "./globals.css";
import Link from "next/link";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export const metadata = {
  title: "CarHiretz",
  description: "Explore the most stunning car showcase application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
