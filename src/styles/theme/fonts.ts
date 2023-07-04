import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

const fonts = {
  heading: spaceGrotesk.style.fontFamily,
  body: spaceGrotesk.style.fontFamily,
};

export default fonts;
