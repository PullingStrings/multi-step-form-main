import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Multi Step Form Typescript",
  description:
    "Mulit Step Form Main is a web application built with Next.js and TypeScript, featuring a multi-step form with responsive design, tailored to handle user inputs across various stages including personal information, plan selection, add-on features, and a summary confirmation step.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
