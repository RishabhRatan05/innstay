import "./globals.css";
import "@uploadthing/react/styles.css"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import { extractRouterConfig } from "uploadthing/server"

import { ourFileRouter } from '@/app/api/uploadthing/core'

// import { store } from "@/redux/store";

export const metadata = {
  title: "InnStay",
  description: "Find a place to stay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        {children}
      </body>
    </html>
  )
}
