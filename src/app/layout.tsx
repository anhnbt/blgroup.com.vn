import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Công ty CP May Bảo Lâm | BLG - Sản xuất & Xuất khẩu May mặc",
    template: "%s | BLG - Bảo Lâm Group",
  },
  description:
    "Công ty Cổ phần may Bảo Lâm (BLG) — chuyên sản xuất và xuất khẩu hàng may mặc, khẩu trang y tế chất lượng cao. Nhà máy 2.500m² tại Thái Nguyên, 300+ lao động.",
  keywords: [
    "may mặc",
    "khẩu trang y tế",
    "xuất khẩu may mặc",
    "Bảo Lâm",
    "BLG",
    "Thái Nguyên",
    "sản xuất may",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "BLG - Bảo Lâm Group",
    title: "Công ty CP May Bảo Lâm | BLG",
    description:
      "Chuyên sản xuất và xuất khẩu hàng may mặc, khẩu trang y tế chất lượng cao.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
