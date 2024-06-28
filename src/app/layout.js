import "./globals.css";
import { EdgeStoreProvider } from "../lib/edgestore"


// import { store } from "@/redux/store";

export const metadata = {
  title: "InnStay",
  description: "Find a place to stay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  )
}
