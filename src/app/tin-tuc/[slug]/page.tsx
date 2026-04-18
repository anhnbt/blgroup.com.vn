import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/data/articles";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Không tìm thấy bài viết" };

  return {
    title: `${article.title} - BLGroup`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.thumbnail ? [article.thumbnail] : [],
      type: "article",
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.thumbnail ? [article.thumbnail] : [],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <article className="py-20 md:py-24 lg:py-28 bg-white min-h-screen">
        <div className="w-full max-w-3xl mx-auto px-6">
          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-light)] hover:text-[var(--color-accent)] transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Quay lại tin tức
          </Link>

          <header className="mb-10 lg:mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                {article.category}
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">{article.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] leading-tight mb-6">
              {article.title}
            </h1>
            <p className="text-lg text-[var(--color-text-light)] leading-relaxed italic border-l-4 border-[var(--color-border)] pl-4">
              {article.excerpt}
            </p>
          </header>

          <div
            className="article-body text-base sm:text-lg text-[#334155] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content || "" }}
          />
        </div>
      </article>

      {/* Newsletter CTA */}
      <section className="dark-section py-20">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="w-full max-w-7xl mx-auto px-6 2xl:max-w-[1400px] relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Nhận bản tin từ BLG</h2>
          <p className="text-white/70 mb-8">
            Cập nhật tin tức mới nhất về hoạt động sản xuất, sản phẩm và cơ hội hợp tác.
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-xl hover:bg-[var(--color-accent-light)] transition-all duration-300"
          >
            Đăng ký ngay
          </Link>
        </div>
      </section>
    </>
  );
}
