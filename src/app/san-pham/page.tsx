import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Danh mục sản phẩm may mặc chất lượng cao của BLG — khẩu trang y tế, áo khoác, áo phao, đồng phục.",
};

const categories = [
  {
    title: "Khẩu trang y tế",
    desc: "Sản xuất khẩu trang 3 lớp, 4 lớp đạt tiêu chuẩn xuất khẩu. Cung cấp cho thị trường nội địa và quốc tế với số lượng lớn.",
    features: ["3 lớp / 4 lớp kháng khuẩn", "Đạt chuẩn xuất khẩu", "Công suất 1 triệu chiếc/ngày", "Đóng gói tự động"],
    icon: "🏥",
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-200",
  },
  {
    title: "Áo khoác",
    desc: "Chuyên sản xuất áo khoác theo đơn đặt hàng OEM/ODM. Đa dạng chất liệu, mẫu mã cho thị trường nội địa và xuất khẩu.",
    features: ["Đa dạng chất liệu", "OEM / ODM", "Mẫu mã phong phú", "Size chart đa quốc gia"],
    icon: "🧥",
    gradient: "from-indigo-500/10 to-purple-500/10",
    border: "border-indigo-200",
  },
  {
    title: "Áo phao",
    desc: "Áo phao lông vũ, áo phao siêu nhẹ với công nghệ may tiên tiến. Sản phẩm giữ ấm tối ưu, phù hợp thời tiết lạnh.",
    features: ["Lông vũ / siêu nhẹ", "Công nghệ giữ ấm", "Chống gió, chống nước", "Xuất khẩu Nhật, Đài Loan"],
    icon: "🧣",
    gradient: "from-amber-500/10 to-orange-500/10",
    border: "border-amber-200",
  },
  {
    title: "Đồng phục",
    desc: "May đồng phục công sở, đồng phục công nhân, đồng phục học sinh theo yêu cầu khách hàng với số lượng lớn.",
    features: ["Đồng phục công sở", "Đồng phục công nhân", "Đồng phục học sinh", "In / thêu logo"],
    icon: "👔",
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-200",
  },
  {
    title: "Quần áo thể thao",
    desc: "Sản xuất trang phục thể thao chất liệu thoáng mát, co giãn tốt. Phục vụ thị trường nội địa và đơn hàng OEM.",
    features: ["Chất liệu co giãn", "Thoáng mát, thấm hút", "Công nghệ may hiện đại", "Hỗ trợ thiết kế mẫu"],
    icon: "🏃",
    gradient: "from-rose-500/10 to-pink-500/10",
    border: "border-rose-200",
  },
  {
    title: "Sản phẩm khác",
    desc: "Ngoài các dòng sản phẩm chính, BLG nhận sản xuất theo yêu cầu đặt hàng riêng với số lượng linh hoạt.",
    features: ["Sản xuất theo yêu cầu", "Số lượng linh hoạt", "Tư vấn chất liệu", "Mẫu thử miễn phí"],
    icon: "✂️",
    gradient: "from-gray-500/10 to-slate-500/10",
    border: "border-gray-200",
  },
];

const services = [
  { icon: "📐", title: "OEM", desc: "Sản xuất theo thiết kế của khách hàng" },
  { icon: "🎨", title: "ODM", desc: "Thiết kế & sản xuất trọn gói" },
  { icon: "🧪", title: "Mẫu thử", desc: "Cung cấp mẫu thử miễn phí" },
  { icon: "📦", title: "Fullfilment", desc: "Đóng gói & vận chuyển theo yêu cầu" },
];

export default function SanPhamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative dark-section text-white py-20 md:py-24 lg:py-28 !pt-32 !pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="/images/factory-6.jpg" alt="Sản phẩm Bảo Lâm" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)]/90 via-[var(--color-bg-dark)]/70 to-[var(--color-bg-dark)]" />
        </div>
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] relative z-10 max-w-3xl">
          <ScrollAnimation>
            <span className="text-[var(--color-warm)] font-semibold text-sm uppercase tracking-wider">
              Sản phẩm
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
              Danh mục sản phẩm
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Đa dạng sản phẩm may mặc chất lượng cao, từ khẩu trang y tế đến
              các dòng áo khoác, áo phao xuất khẩu sang thị trường quốc tế.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services bar */}
      <section className="relative -mt-12 z-20">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {services.map((svc, i) => (
              <ScrollAnimation key={svc.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-5 shadow-lg shadow-black/5 border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl mb-2">{svc.icon}</div>
                  <div className="font-bold text-[var(--color-primary)] text-sm">{svc.title}</div>
                  <div className="text-xs text-[var(--color-text-light)] mt-1">{svc.desc}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 md:py-24 lg:py-28 bg-[var(--color-bg-alt)]">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <ScrollAnimation>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-overline">Danh mục</span>
              <h2 className="section-title">Sản phẩm chính</h2>
              <p className="section-subtitle">
                Mỗi sản phẩm đều trải qua quy trình kiểm soát chất lượng nghiêm ngặt
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat, i) => (
              <ScrollAnimation key={cat.title} delay={i * 0.1}>
                <div className={`bg-white rounded-2xl border ${cat.border} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 overflow-hidden group h-full flex flex-col`}>
                  {/* Card header */}
                  <div className={`p-8 bg-gradient-to-br ${cat.gradient}`}>
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">
                      {cat.title}
                    </h3>
                  </div>
                  {/* Card body */}
                  <div className="p-8 pt-5 flex-1 flex flex-col">
                    <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-5">
                      {cat.desc}
                    </p>
                    <ul className="space-y-2 mt-auto">
                      {cat.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <svg
                            className="w-4 h-4 text-green-500 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[var(--color-text)]">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section py-20 md:py-24 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] relative z-10 text-center max-w-2xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Bạn cần sản phẩm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-light)] to-[var(--color-warm)]">
                may mặc riêng?
              </span>
            </h2>
            <p className="text-white/70 mb-8">
              Liên hệ ngay để được tư vấn và báo giá. Chúng tôi hỗ trợ sản xuất
              theo yêu cầu với mẫu thử miễn phí.
            </p>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Yêu cầu báo giá
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
