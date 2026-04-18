import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Tin tức mới nhất từ Công ty CP may Bảo Lâm — cập nhật hoạt động sản xuất, xuất khẩu và phát triển.",
};

import { featuredArticle as featured, articles } from "@/data/articles";

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
      <section className="relative dark-section text-white py-20 md:py-24 lg:py-28 !pt-20">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] relative z-10 max-w-3xl">
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
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
          <ScrollAnimation>
            <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-gray-100 overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Thumbnail */}
                <Link href={`/tin-tuc/${featured.slug}`} className="relative lg:col-span-2 h-48 lg:h-auto bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-[var(--color-warm)]/10 flex items-center justify-center overflow-hidden block group">
                  {featured.thumbnail ? (
                    <Image
                      src={featured.thumbnail}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="text-center relative z-10">
                      <div className="text-7xl mb-2 group-hover:scale-110 transition-transform duration-300">🏭</div>
                      <p className="text-sm text-[var(--color-text-muted)]">Tin nổi bật</p>
                    </div>
                  )}
                </Link>
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
                    <Link href={`/tin-tuc/${featured.slug}`} className="hover:text-[var(--color-accent)] transition-colors">
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div>
                    <Link
                      href={`/tin-tuc/${featured.slug}`}
                      className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold text-sm hover:gap-3 transition-all duration-300 cursor-pointer"
                    >
                      Đọc tiếp
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-20 md:py-24 lg:py-28 bg-[var(--color-bg-alt)]">
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px]">
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
                  {/* Thumbnail placeholder or real image */}
                  <Link href={`/tin-tuc/${article.slug}`} className="relative block h-48 bg-gradient-to-br from-[var(--color-bg-alt)] to-gray-100 flex items-center justify-center overflow-hidden">
                    {article.thumbnail ? (
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <span className="text-5xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                        📰
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </Link>
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
                      <Link href={`/tin-tuc/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[var(--color-text-light)] leading-relaxed line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href={`/tin-tuc/${article.slug}`}
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] font-medium hover:gap-3 transition-all duration-300"
                      >
                        Đọc tiếp
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="dark-section py-20 md:py-24 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] relative z-10 text-center max-w-2xl mx-auto">
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
