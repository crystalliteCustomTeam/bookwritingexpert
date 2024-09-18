import localFont from "next/font/local"
import { Poppins as FontSecondary } from "next/font/google"


const fontSecondary = FontSecondary({
    subsets: ["latin"],
    variable: "--font-secondary",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["italic", "normal"],
    display: "swap",
    fallback: ['system-ui', 'arial']
})

const primaryFont = localFont({
    src: "../font/SFProDisplay-Regular.ttf",
    variable: "--font-primary",
    display: "swap",
    fallback: ["system-ui", "arial"],
    subsets: ["latin"]
})

export { primaryFont, fontSecondary }