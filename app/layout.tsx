import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins, Aref_Ruqaa, Tajawal } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const aref = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-aref",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chadili Académie | Pastry Art & Cake Design",
  description:
    "Chadili Académie with Chef Awatif Chadili — premium training in cake design, French pastry and cuisine, in-person and online. Enroll now.",
  keywords: [
    "Chadili Academie",
    "cake design Maroc",
    "pâtisserie Maroc",
    "formation pâtisserie",
    "Awatif Chadili",
    "أكاديمية الشاذلي",
  ],
  openGraph: {
    title: "Chadili Académie | Pastry Art & Cake Design",
    description: "Premium pastry, cake design & cuisine training — in-person and online.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3D0F1D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${poppins.variable} ${aref.variable} ${tajawal.variable} antialiased`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
