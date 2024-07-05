'use client'
import "./globals.css";
import { EdgeStoreProvider } from "../lib/edgestore"


import { store } from "@/redux/store";
import { Provider } from "react-redux";

// export const metadata = {
//   title: "InnStay",
//   description: "Find a place to stay",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </Provider>
      </body>
    </html>
  )
}
