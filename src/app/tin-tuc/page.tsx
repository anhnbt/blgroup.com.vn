import { Metadata } from "next";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Tin tức mới nhất từ Công ty CP may Bảo Lâm — cập nhật hoạt động sản xuất, xuất khẩu và phát triển.",
};

const featured = {
  slug: "blg-mo-rong-nha-may",
  title: "BLG mở rộng nhà máy sản xuất lên 2.500m²",
  excerpt: "Nhằm đáp ứng nhu cầu sản xuất ngày càng tăng, Công ty CP may Bảo Lâm đã hoàn thành mở rộng nhà máy tại Phổ Yên, Thái Nguyên. Với diện tích mới 2.500m², nhà máy được trang bị hệ thống máy móc hiện đại, nâng công suất sản xuất lên gấp đôi so với trước đây.",
  date: "15/03/2024",
  category: "Tin công ty",
};

const articles = [
  {
    slug: "xuat-khau-khau-trang-nhat-ban",
    title: "Xuất khẩu lô hàng khẩu trang y tế sang Nhật Bản",
    excerpt: "BLG tiếp tục khẳng định vị thế trên thị trường quốc tế với đơn hàng xuất khẩu khẩu trang y tế sang Nhật Bản đạt chuẩn chất lượng.",
    date: "28/02/2024",
    category: "Xuất khẩu",
  },
  {
    slug: "hop-tac-thuong-hieu-quoc-te",
    title: "Ký kết hợp tác sản xuất với thương hiệu quốc tế",
    excerpt: "BLG chính thức trở thành đối tác sản xuất cho một thương hiệu thời trang lớn từ Đài Loan, mở rộng danh mục sản phẩm áo phao và áo khoác.",
    date: "10/01/2024",
    category: "Hợp tác",
  },
  {
    slug: "dao-tao-nhan-su-2024",
    title: "Chương trình đào tạo nâng cao tay nghề 2024",
    excerpt: "Đầu tư vào con người luôn là ưu tiên hàng đầu. Chương trình đào tạo nâng cao tay nghề cho 300+ nhân sự đã được triển khai.",
    date: "05/01/2024",
    category: "Nhân sự",
  },
  {
    slug: "ung-dung-cong-nghe-san-xuat",
    title: "Ứng dụng công nghệ mới trong quy trình sản xuất",
    excerpt: "BLG đầu tư dây chuyền máy may tự động và hệ thống kiểm tra chất lượng QC hiện đại, nâng cao năng suất và chất lượng sản phẩm.",
    date: "20/12/2023",
    category: "Công nghệ",
  },
  {
    slug: "tong-ket-nam-2023",
    title: "Tổng kết năm 2023: Một năm phát triển vượt bậc",
    excerpt: "Nhìn lại năm 2023 đầy nỗ lực với doanh thu tăng trưởng 40%, mở rộng thị trường xuất khẩu và nâng cấp toàn diện nhà máy sản xuất.",
    date: "30/12/2023",
    category: "Tin công ty",
  },
];

const categoryColors: Record<string, string> = {
  "Tin công ty": "bg-blue-100 text-blue-700",
  "Xuất khẩu": "bg-green-100 text-green-700",
  "Hợp tác": "bg-purple-100 text-purple-700",
  "Nhân sự": "bg-amber-100 text-amber-700",
  "Công nghệ": "bg-cyan-100 text-cyan-700",
};

export default function TinTucPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative dark-section text-white section-padding !pt-20">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container-custom relative z-10 max-w-3xl">
          <ScrollAnimation>
            <span className="text-[var(--color-warm)] font-semibold text-sm uppercase tracking-wider">
              Tin tức
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
              Tin tức & Hoạt động
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Cập nhật mới nhất về hoạt động sản xuất, xuất khẩu và các sự kiện
              nổi bật của Công ty CP may Bảo Lâm.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Article */}
      <section className="relative -mt-12 z-20">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-gray-100 overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Thumbnail */}
                <div className="lg:col-span-2 h-48 lg:h-auto bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-[var(--color-warm)]/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-2">🏭</div>
                    <p className="text-sm text-[var(--color-text-muted)]">Tin nổi bật</p>
                  </div>
                </div>
                {/* Content */}
                <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      ⭐ Nổi bật
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[featured.category]}`}>
                      {featured.category}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)]">{featured.date}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)] mb-3 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div>
                    <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold text-sm hover:gap-3 transition-all duration-300 cursor-pointer">
                      Đọc tiếp
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Articles grid */}
      <section className="section-padding bg-[var(--color-bg-alt)]">
        <div className="container-custom">
          <ScrollAnimation>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-overline">Bài viết</span>
              <h2 className="section-title">Tin tức gần đây</h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article, i) => (
              <ScrollAnimation key={article.slug} delay={i * 0.1}>
                <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 overflow-hidden group h-full flex flex-col">
                  {/* Thumbnail placeholder */}
                  <div className="h-48 bg-gradient-to-br from-[var(--color-bg-alt)] to-gray-100 flex items-center justify-center relative overflow-hidden">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      📰
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          categoryColors[article.category] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-[var(--color-primary)] mb-2 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-light)] leading-relaxed line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] font-medium hover:gap-3 transition-all duration-300 cursor-pointer">
                        Đọc tiếp
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="dark-section section-padding">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <ScrollAnimation>
            <div className="text-4xl mb-4">📬</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Cập nhật tin tức mới nhất
            </h2>
            <p className="text-white/70 mb-8">
              Theo dõi BLG trên các nền tảng mạng xã hội để nhận thông tin mới nhất
              về sản phẩm, hoạt động sản xuất và cơ hội hợp tác.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Liên hệ BLG
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
