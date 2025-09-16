
import "./globals.css";        
import ClientLayoutControls from "@/components/ClientLayoutControls";

export const metadata = {
  title: "Infogentech - Best Design, Development, Marketing",
  description:
    "We become your digital department bringing strategy, creativity, and technical expertise to accelerate your business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
