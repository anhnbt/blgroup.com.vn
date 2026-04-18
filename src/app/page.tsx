"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ---------- Animated Counter ---------- */
function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------- Product data ---------- */
const products = [
  {
    title: "Khẩu trang y tế",
    desc: "Khẩu trang 3 lớp, 4 lớp chất lượng cao, đạt tiêu chuẩn xuất khẩu sang Nhật Bản và Đài Loan.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Áo khoác",
    desc: "Sản xuất áo khoác chất lượng cao cho thị trường nội địa và xuất khẩu, đa dạng mẫu mã.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "Áo phao",
    desc: "Áo phao lông vũ, áo phao siêu nhẹ với công nghệ sản xuất hiện đại, giữ ấm tối ưu.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
];

/* ---------- Why us data ---------- */
const whyUs = [
  { icon: "🏭", title: "Nhà máy 2.500m²", desc: "Quy mô sản xuất lớn, hệ thống máy móc hiện đại, tiêu chuẩn quốc tế" },
  { icon: "👷", title: "300+ Lao động", desc: "Đội ngũ công nhân lành nghề, được đào tạo chuyên sâu về kỹ thuật may" },
  { icon: "🌏", title: "Xuất khẩu quốc tế", desc: "Sản phẩm đạt chuẩn xuất khẩu sang Nhật Bản, Đài Loan, Trung Quốc" },
  { icon: "✅", title: "Chất lượng đảm bảo", desc: "Quy trình QC nghiêm ngặt, kiểm tra đa công đoạn từ nguyên liệu đến thành phẩm" },
  { icon: "⏱️", title: "Giao hàng đúng hạn", desc: "Năng lực sản xuất lớn, cam kết tiến độ giao hàng nhanh chóng" },
  { icon: "🤝", title: "Đối tác tin cậy", desc: "Hợp tác lâu dài với nhiều thương hiệu lớn trong và ngoài nước" },
];

/* ---------- Process steps ---------- */
const processSteps = [
  { step: "01", title: "Proto", desc: "Mẫu thử nghiệm" },
  { step: "02", title: "FIT Sample", desc: "Mẫu vừa vặn" },
  { step: "03", title: "SMS", desc: "Mẫu xác nhận" },
  { step: "04", title: "Size Set", desc: "Bộ kích cỡ" },
  { step: "05", title: "PPS", desc: "Mẫu trước SX" },
  { step: "06", title: "TOP", desc: "Mẫu đầu chuyền" },
  { step: "07", title: "Shipment", desc: "Xuất hàng" },
];

/* ---------- SVG Flag Components ---------- */
function FlagJP({ className = "w-6 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600">
      <rect fill="#fff" width="900" height="600" />
      <circle fill="#bc002d" cx="450" cy="300" r="180" />
    </svg>
  );
}
function FlagTW({ className = "w-6 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600">
      <rect fill="#FE0000" width="900" height="600" />
      <rect fill="#000095" width="450" height="300" />
      <circle fill="#fff" cx="225" cy="150" r="96" />
      <circle fill="#000095" cx="225" cy="150" r="72" />
    </svg>
  );
}
function FlagCN({ className = "w-6 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600">
      <rect fill="#EE1C25" width="900" height="600" />
      <g fill="#FFFF00" transform="translate(150,100)">
        <polygon points="0,-80 18.56,-24.72 78.18,-24.72 29.81,9.44 48.36,64.72 0,30.56 -48.36,64.72 -29.81,9.44 -78.18,-24.72 -18.56,-24.72" />
      </g>
    </svg>
  );
}
function FlagKR({ className = "w-6 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 24">
      <rect fill="#fff" width="36" height="24" />
      {/* Taegeuk (yin-yang style) */}
      <circle cx="18" cy="12" r="6" fill="#C60C30" />
      <path d="M18 6 A3 3 0 0 1 18 12 A3 3 0 0 0 18 18" fill="#003478" />
      <circle cx="18" cy="9" r="3" fill="#C60C30" />
      <circle cx="18" cy="15" r="3" fill="#003478" />
      {/* Trigrams - simplified bars */}
      <g stroke="#000" strokeWidth="0.6">
        <line x1="6" y1="5" x2="10" y2="5" /><line x1="6" y1="6.5" x2="10" y2="6.5" /><line x1="6" y1="8" x2="10" y2="8" />
        <line x1="26" y1="16" x2="30" y2="16" /><line x1="26" y1="17.5" x2="30" y2="17.5" /><line x1="26" y1="19" x2="30" y2="19" />
        <line x1="26" y1="5" x2="28" y2="5" /><line x1="28.5" y1="5" x2="30" y2="5" />
        <line x1="26" y1="6.5" x2="30" y2="6.5" />
        <line x1="26" y1="8" x2="28" y2="8" /><line x1="28.5" y1="8" x2="30" y2="8" />
        <line x1="6" y1="16" x2="8" y2="16" /><line x1="8.5" y1="16" x2="10" y2="16" />
        <line x1="6" y1="17.5" x2="8" y2="17.5" /><line x1="8.5" y1="17.5" x2="10" y2="17.5" />
        <line x1="6" y1="19" x2="8" y2="19" /><line x1="8.5" y1="19" x2="10" y2="19" />
      </g>
    </svg>
  );
}
function FlagVN({ className = "w-6 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600">
      <rect fill="#DA251D" width="900" height="600" />
      <polygon fill="#FFFF00" points="450,120 513.6,314.4 342,210 558,210 386.4,314.4" />
    </svg>
  );
}

/* ---------- Partners ---------- */
const partners = [
  { name: "Nhật Bản", code: "JP", Flag: FlagJP },
  { name: "Đài Loan", code: "TW", Flag: FlagTW },
  { name: "Trung Quốc", code: "CN", Flag: FlagCN },
  { name: "Hàn Quốc", code: "KR", Flag: FlagKR },
  { name: "Việt Nam", code: "VN", Flag: FlagVN },
];

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[#1e3a5f] to-[var(--color-bg-dark)]">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--color-warm)]/10 blur-3xl" />
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-50" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium border border-white/10 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-warm)] animate-pulse" />
                  Thành lập 2019 &middot; Thái Nguyên
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
              >
                Sản xuất <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-light)] to-[var(--color-warm)]">
                  May mặc
                </span>{" "}
                chất lượng cao
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-white/70 max-w-lg mb-8 leading-relaxed"
              >
                Công ty CP may Bảo Lâm — chuyên gia trong sản xuất và xuất khẩu
                hàng may mặc, khẩu trang y tế. Đối tác tin cậy của các thương
                hiệu quốc tế.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/san-pham"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white font-semibold rounded-xl shadow-xl shadow-[var(--color-accent)]/30 hover:shadow-2xl hover:shadow-[var(--color-accent)]/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Xem sản phẩm
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Liên hệ hợp tác
                </Link>
              </motion.div>

              {/* Market Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex items-center gap-3 mt-10"
              >
                <span className="text-xs text-white/40 uppercase tracking-wider">Thị trường:</span>
                <div className="flex gap-2">
                  {partners.map((p) => (
                    <div
                      key={p.name}
                      className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-default overflow-hidden"
                      title={p.name}
                    >
                      <p.Flag className="w-6 h-4 rounded-sm" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl overflow-hidden">
                  <Image
                    src="/images/factory-4.jpg"
                    alt="Nhà máy sản xuất BLG"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 to-transparent z-10" />
                  <div className="absolute bottom-6 left-6 right-6 text-center text-white relative z-20">
                    <p className="text-lg font-semibold">Nhà máy sản xuất</p>
                    <p className="text-sm text-white/60">2.500m² — Phổ Yên, Thái Nguyên</p>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-30 -bottom-2 -left-4 glass-dark rounded-2xl px-5 py-3 flex items-center gap-3 shadow-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Xuất khẩu</p>
                    <p className="text-white/50 text-xs">Nhật Bản • Đài Loan</p>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-30 -top-2 -right-4 glass-dark rounded-2xl px-5 py-3 flex items-center gap-3 shadow-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-xl">
                    👷
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">300+</p>
                    <p className="text-white/50 text-xs">Lao động</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="relative -mt-16 z-20">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { number: 2019, suffix: "", label: "Năm thành lập", icon: "📅" },
              { number: 2500, suffix: "m²", label: "Nhà máy sản xuất", icon: "🏭" },
              { number: 300, suffix: "+", label: "Nhân sự", icon: "👥" },
              { number: 50, suffix: "+", label: "Đối tác", icon: "🤝" },
            ].map((stat, i) => (
              <ScrollAnimation key={stat.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg shadow-black/5 border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1">
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-[var(--color-text-light)]">
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT PREVIEW ========== */}
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollAnimation direction="left">
              <div className="relative">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/factory-1.jpg"
                    alt="Nhà máy sản xuất BLG - Bảo Lâm Garment"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Accent corner */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-warm)] opacity-20 blur-xl" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <span className="section-overline">
                Về chúng tôi
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mt-3 mb-5 leading-tight">
                Đối tác sản xuất may mặc tin cậy
              </h2>
              <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
                Được thành lập năm 2019 tại Thái Nguyên, Công ty CP may Bảo Lâm
                nhanh chóng khẳng định vị thế trong ngành may mặc Việt Nam với nhà
                máy hiện đại rộng 2.500m² và đội ngũ hơn 300 lao động lành nghề.
              </p>
              <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                Chúng tôi chuyên sản xuất áo khoác, áo phao, đồng phục và khẩu
                trang y tế — xuất khẩu sang các thị trường khó tính như Nhật Bản,
                Đài Loan, Trung Quốc.
              </p>
              <Link
                href="/gioi-thieu"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:gap-3 transition-all duration-300"
              >
                Tìm hiểu thêm
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ========== PRODUCTS ========== */}
      <section className="py-20 md:py-24 lg:py-28 bg-[var(--color-bg-alt)]">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <ScrollAnimation>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-overline">Sản phẩm</span>
              <h2 className="section-title">Sản phẩm chủ lực</h2>
              <p className="section-subtitle">
                Đa dạng sản phẩm may mặc chất lượng cao, đáp ứng tiêu chuẩn quốc tế
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, i) => (
              <ScrollAnimation key={product.title} delay={i * 0.15}>
                <div className="group bg-white rounded-2xl p-8 shadow-md shadow-black/5 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-400">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-accent)] mb-6 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                    {product.title}
                  </h3>
                  <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation>
            <div className="text-center mt-10">
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
              >
                Xem tất cả sản phẩm
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <ScrollAnimation>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-overline">Quy trình</span>
              <h2 className="section-title">Quy trình phát triển mẫu</h2>
              <p className="section-subtitle">
                Quy trình chuẩn quốc tế từ thiết kế mẫu đến xuất hàng
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
            {processSteps.map((step, i) => (
              <ScrollAnimation key={step.step} delay={i * 0.08}>
                <div className="relative group text-center p-5 rounded-2xl bg-[var(--color-bg-alt)] border border-gray-100 hover:bg-gradient-to-br hover:from-[var(--color-primary)] hover:to-[var(--color-accent)] hover:text-white hover:border-transparent transition-all duration-400">
                  <div className="text-2xl font-bold text-[var(--color-accent)] group-hover:text-white/80 mb-2 transition-colors">
                    {step.step}
                  </div>
                  <div className="font-semibold text-sm text-[var(--color-primary)] group-hover:text-white mb-1 transition-colors">
                    {step.title}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] group-hover:text-white/60 transition-colors">
                    {step.desc}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY US ========== */}
      <section className="py-20 md:py-24 lg:py-28 bg-[var(--color-bg-alt)]">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <ScrollAnimation>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-overline">Tại sao chọn chúng tôi</span>
              <h2 className="section-title">Thế mạnh của BLG</h2>
              <p className="section-subtitle">
                Năng lực sản xuất vượt trội, chất lượng đẳng cấp quốc tế
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whyUs.map((item, i) => (
              <ScrollAnimation key={item.title} delay={i * 0.1}>
                <div className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-primary)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PARTNERS & MARKETS ========== */}
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <ScrollAnimation>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-overline">Thị trường</span>
              <h2 className="section-title">Đối tác & Thị trường xuất khẩu</h2>
              <p className="section-subtitle">
                Sản phẩm BLG được xuất khẩu sang nhiều quốc gia, đáp ứng tiêu chuẩn khắt khe nhất
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {[
              { Flag: FlagJP, country: "Nhật Bản", products: "Khẩu trang, Áo khoác", status: "Đang xuất khẩu" },
              { Flag: FlagTW, country: "Đài Loan", products: "Áo phao, Áo khoác", status: "Đang xuất khẩu" },
              { Flag: FlagCN, country: "Trung Quốc", products: "Đồng phục, May mặc", status: "Đang xuất khẩu" },
              { Flag: FlagKR, country: "Hàn Quốc", products: "Áo khoác, Thể thao", status: "Đang phát triển" },
              { Flag: FlagVN, country: "Việt Nam", products: "Toàn bộ sản phẩm", status: "Thị trường chính" },
            ].map((market, i) => (
              <ScrollAnimation key={market.country} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-[var(--color-bg-alt)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-3">
                    <market.Flag className="w-16 h-11 rounded-lg shadow-sm border border-gray-200" />
                  </div>
                  <h3 className="font-bold text-[var(--color-primary)] mb-1">{market.country}</h3>
                  <p className="text-xs text-[var(--color-text-light)] mb-2">{market.products}</p>
                  <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {market.status}
                  </span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative overflow-hidden dark-section text-white py-20 md:py-24 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] relative z-10 text-center max-w-3xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Sẵn sàng hợp tác <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-light)] to-[var(--color-warm)]">
                cùng phát triển?
              </span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              Liên hệ ngay để được tư vấn giải pháp sản xuất may mặc tối ưu
              cho doanh nghiệp của bạn.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Liên hệ ngay
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+84938396888"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +84 938 396 888
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
