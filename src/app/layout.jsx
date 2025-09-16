import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Infogentech - Best Design, Development, Marketing",
  description: "We become your digital department bringing strategy, creativity, and technical expertise to accelerate your business growth.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="dark">
      <body >
          <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
