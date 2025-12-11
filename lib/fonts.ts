/* eslint-disable */

import {
  Bricolage_Grotesque,
  Noto_Serif,
  Noto_Serif_Display,
  Playfair_Display,
} from "next/font/google"
import localFont from "next/font/local"

export const gambarino = localFont({
  src: "../public/fonts/Gambarino-Regular.ttf",
  variable: "--font-gambarino",
})

export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
})

export const murmure = localFont({
  src: [
    {
      path: "../public/fonts/LeMurmure-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
})

export const humane = localFont({
  src: [
    {
      path: "../public/fonts/Humane-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Humane-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Humane-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Humane-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Humane-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Humane-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Humane-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
})

export const bricolage = Bricolage_Grotesque({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
})

export const noto_serif = Noto_Serif({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-noto-serif",
  display: "swap",
})

export const noto_serif_display = Noto_Serif_Display({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-noto-serif-display",
  display: "swap",
})

export const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-playfair",
  display: "swap",
})
