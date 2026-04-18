"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const footerLinks = [
  {
    title: "Công ty",
    links: [
      { label: "Giới thiệu", href: "/gioi-thieu" },
      { label: "Sản phẩm", href: "/san-pham" },
      { label: "Tin tức", href: "/tin-tuc" },
      { label: "Liên hệ", href: "/lien-he" },
    ],
  },
  {
    title: "Sản phẩm",
    links: [
      { label: "Khẩu trang y tế", href: "/san-pham" },
      { label: "Áo khoác", href: "/san-pham" },
      { label: "Áo phao", href: "/san-pham" },
      { label: "Đồng phục", href: "/san-pham" },
    ],
  },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-[var(--color-bg-dark)] text-white">
        {/* Newsletter strip */}
        <div className="border-b border-white/10">
          <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] py-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center text-xl shrink-0">
                📧
              </div>
              <div>
                <h4 className="font-bold text-lg">Nhận thông tin mới nhất</h4>
                <p className="text-sm text-gray-400">Cập nhật tin tức sản xuất, sản phẩm mới và cơ hội hợp tác</p>
              </div>
            </div>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-light)] transition-colors shrink-0"
            >
              Liên hệ ngay
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Main footer */}
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] py-20 md:py-24 lg:py-28 !pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-5">
                <Image
                  src="/images/logo.png"
                  alt="BLG - Bảo Lâm Garment"
                  width={160}
                  height={54}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Công ty Cổ phần may Bảo Lâm — chuyên sản xuất và xuất khẩu
                hàng may mặc, khẩu trang y tế chất lượng cao.
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/baolam.may"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--color-accent)] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white">
                  {group.title}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-[var(--color-accent)] transition-colors" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact info */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white">
                Liên hệ
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>TDP Trung Quân, phường Tiên Phong, TP Phổ Yên, Tỉnh Thái Nguyên</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+84938396888" className="hover:text-white transition-colors">
                    +84 938 396 888
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:thotv@blgroup.com.vn" className="hover:text-white transition-colors">
                    thotv@blgroup.com.vn
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>MST: 4601551993</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] flex flex-col md:flex-row items-center justify-between py-2 gap-3">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Công ty CP may Bảo Lâm. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              MST: 4601551993 &middot; Thái Nguyên, Việt Nam
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Lên đầu trang"
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white shadow-xl flex items-center justify-center z-40 hover:bg-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300 ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
