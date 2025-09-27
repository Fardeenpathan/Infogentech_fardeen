"use client"
import { Provider } from "react-redux";
import "./globals.css";
import ClientLayoutControls from "@/components/ClientLayoutControls";
import store from "@/redux/store";

// export const metadata = {
//   title: "Infogentech - Best Design, Development, Marketing",
//   description:
//     "We become your digital department bringing strategy, creativity, and technical expertise to accelerate your business growth.",
// };

export default function RootLayout({ children }) {
  return (
<html lang="en" className="dark">
      <head>
        <link rel="icon" href="/mainLogo.svg" />
      </head>
      <body>
        <Provider store={store}>
          <ClientLayoutControls>{children}</ClientLayoutControls>
        </Provider>
      </body>
    </html>
  );
}
