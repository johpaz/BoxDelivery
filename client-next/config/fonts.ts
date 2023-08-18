import { Fira_Code as FontMono, Space_Grotesk as FontSpace_Grotesk, Inter as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontSpace_Grotesk = FontSpace_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})
