import { Bricolage_Grotesque, Noto_Serif, Playfair_Display } from "next/font/google";
import localFont from 'next/font/local'

export const gambarino = localFont({
  src: '../public/fonts/Gambarino-Regular.ttf',
})

export const bricolage = Bricolage_Grotesque({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
})

export const noto_serif = Noto_Serif({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-noto-serif",
  display: "swap",
})

export const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-playfair",
  display: "swap",
})

