import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Tìm hiểu về Công ty CP may Bảo Lâm — lịch sử phát triển, tầm nhìn, sứ mệnh và năng lực sản xuất.",
};

const milestones = [
  { year: "2019", title: "Thành lập", desc: "Công ty CP may Bảo Lâm được thành lập tại Phổ Yên, Thái Nguyên" },
  { year: "2020", title: "Mở rộng sản xuất", desc: "Đầu tư dây chuyền sản xuất khẩu trang y tế đạt chuẩn xuất khẩu" },
  { year: "2021", title: "Xuất khẩu quốc tế", desc: "Bắt đầu xuất khẩu sản phẩm sang Nhật Bản và Đài Loan" },
  { year: "2023", title: "Mở rộng nhà máy", desc: "Nhà máy mở rộng lên 2.500m², nâng công suất sản xuất" },
  { year: "2024", title: "300+ nhân sự", desc: "Đội ngũ lao động tăng lên hơn 300 người, đa dạng hóa sản phẩm" },
];

const values = [
  { icon: "💎", title: "Chất lượng", desc: "Cam kết chất lượng sản phẩm đạt tiêu chuẩn quốc tế, quy trình QC nghiêm ngặt." },
  { icon: "🔬", title: "Đổi mới", desc: "Liên tục cập nhật công nghệ sản xuất, cải tiến quy trình để nâng cao hiệu quả." },
  { icon: "🌱", title: "Bền vững", desc: "Phát triển bền vững, quan tâm đến môi trường và trách nhiệm xã hội." },
  { icon: "🤝", title: "Uy tín", desc: "Xây dựng mối quan hệ hợp tác lâu dài dựa trên sự tin cậy và minh bạch." },
];

const capabilities = [
  { number: "12", label: "Chuyền may", icon: "🧵" },
  { number: "50+", label: "Máy may CN", icon: "⚙️" },
  { number: "1M+", label: "Khẩu trang/ngày", icon: "😷" },
  { number: "24/7", label: "Vận hành", icon: "🕐" },
];

export default function GioiThieuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative dark-section text-white py-20 md:py-24 lg:py-28 !pt-32 !pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="/images/factory-2.jpg" alt="Nhà máy Bảo Lâm" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)]/80 via-[var(--color-bg-dark)]/60 to-[var(--color-bg-dark)]" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] relative z-10 max-w-3xl">
          <ScrollAnimation>
            <span className="text-[var(--color-warm)] font-semibold text-sm uppercase tracking-wider">
              Về chúng tôi
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
              Công ty CP May Bảo Lâm
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Với sứ mệnh trở thành đối tác sản xuất may mặc hàng đầu Việt Nam,
              BLG không ngừng đầu tư, phát triển để mang đến những sản phẩm chất
              lượng cao nhất cho khách hàng trong và ngoài nước.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Factory Capabilities Bar */}
      <section className="relative -mt-12 z-20">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {capabilities.map((cap, i) => (
              <ScrollAnimation key={cap.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-5 shadow-lg shadow-black/5 border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl mb-2">{cap.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">{cap.number}</div>
                  <div className="text-sm text-[var(--color-text-light)]">{cap.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation direction="left">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-primary)]/5 border border-[var(--color-accent)]/10 h-full">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center text-2xl mb-5">
                  🎯
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  Sứ mệnh
                </h2>
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  Cung cấp giải pháp sản xuất may mặc toàn diện với chất lượng vượt
                  trội, giá thành cạnh tranh, đáp ứng tiêu chuẩn quốc tế, góp phần
                  nâng tầm ngành may mặc Việt Nam trên thị trường thế giới.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-warm)]/5 to-amber-100/30 border border-[var(--color-warm)]/10 h-full">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-warm)]/10 flex items-center justify-center text-2xl mb-5">
                  🔭
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  Tầm nhìn
                </h2>
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  Trở thành doanh nghiệp hàng đầu trong lĩnh vực sản xuất và xuất
                  khẩu may mặc tại khu vực phía Bắc, mở rộng thị trường xuất khẩu
                  sang nhiều quốc gia và vùng lãnh thổ trên thế giới.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 md:py-24 lg:py-28 bg-[var(--color-bg-alt)]">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <ScrollAnimation>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-overline">Giá trị cốt lõi</span>
              <h2 className="section-title">Nền tảng phát triển</h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollAnimation key={v.title} delay={i * 0.1}>
                <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-bold text-[var(--color-primary)] mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{v.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Facility & Equipment */}
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <ScrollAnimation>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-overline">Năng lực sản xuất</span>
              <h2 className="section-title">Nhà máy & Dây chuyền</h2>
              <p className="section-subtitle">
                Trang thiết bị hiện đại, môi trường làm việc an toàn, sạch sẽ đạt tiêu chuẩn quốc tế.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollAnimation direction="left">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                <Image src="/images/factory-3.jpg" alt="Dây chuyền sản xuất" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                <Image src="/images/factory-5.jpg" alt="Kiểm tra chất lượng" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24 lg:py-28 bg-[var(--color-bg-alt)]">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] max-w-3xl">
          <ScrollAnimation>
            <div className="text-center mb-14">
              <span className="section-overline">Lịch sử phát triển</span>
              <h2 className="section-title">Hành trình của BLG</h2>
            </div>
          </ScrollAnimation>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-warm)]" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <ScrollAnimation key={m.year} delay={i * 0.1}>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-lg shadow-[var(--color-accent)]/20 z-10">
                      {m.year}
                    </div>
                    <div className="bg-[var(--color-bg-alt)] rounded-2xl p-6 border border-gray-100 flex-1">
                      <h3 className="font-bold text-[var(--color-primary)] mb-1">{m.title}</h3>
                      <p className="text-sm text-[var(--color-text-light)]">{m.desc}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-20 md:py-24 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] relative z-10 text-center max-w-2xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Muốn tìm hiểu thêm về{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-light)] to-[var(--color-warm)]">
                năng lực sản xuất?
              </span>
            </h2>
            <p className="text-white/70 mb-8">
              Liên hệ ngay để được tham quan nhà máy và tìm hiểu quy trình sản xuất của BLG.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[var(--color-primary)] font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Liên hệ tư vấn
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Xem sản phẩm
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
