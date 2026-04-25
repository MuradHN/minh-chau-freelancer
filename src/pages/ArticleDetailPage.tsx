import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { articleDetailBySlug, articleDetails } from '../articleData';
import type { ArticleDetail } from '../types';

interface ArticleDetailPageProps {
  article?: ArticleDetail;
}

const FALLBACK_IMAGE = 'https://longchaupharma.com/storage/uploads/config/default-6.png';

const toAnchorId = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const ArticleDetailPage = ({ article: providedArticle }: ArticleDetailPageProps) => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const article = providedArticle ?? (articleSlug ? articleDetailBySlug[articleSlug] : undefined);

  if (!article) {
    return null;
  }

  const relatedArticles = articleDetails
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .concat(
      articleDetails.filter(
        (item) => item.slug !== article.slug && item.category !== article.category,
      ),
    )
    .slice(0, 4);

  return (
    <main className="bg-white min-h-screen pb-14">
      <div className="bg-gray-50 border-y border-gray-100">
        <div className="container-custom py-4">
          <nav className="flex flex-wrap items-center gap-2 text-[15px] md:text-[16px] text-gray-900">
            <Link to="/" className="hover:text-primary transition-colors" aria-label="Trang chủ">
              <Home size={21} fill="currentColor" strokeWidth={0} />
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/tin-tuc" className="hover:text-primary transition-colors">
              Tin tức
            </Link>
            <span className="text-gray-400">/</span>
            <span>{article.category}</span>
            <span className="text-gray-400 hidden md:inline">/</span>
            <span className="hidden md:inline">{article.title}</span>
          </nav>
        </div>
      </div>

      <div className="container-custom pt-5">
        <h1 className="text-[26px] md:text-[30px] font-black leading-tight text-gray-950 mb-7">
          {article.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-7">
          <aside className="lg:pt-36">
            <div className="bg-gray-50 px-8 py-6 lg:sticky lg:top-5">
              <h2 className="text-[20px] font-black text-center mb-5">Xem nhanh^</h2>
              <ul className="space-y-4">
                {article.quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${toAnchorId(link)}`}
                      className="block text-[18px] font-black leading-snug text-gray-950 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="article-content max-w-none text-[18px] leading-8 text-gray-950">
            <p className="mb-5">{article.intro}</p>

            {article.blocks.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2
                    id={toAnchorId(block.text)}
                    key={`${block.text}-${index}`}
                    className="scroll-mt-24 text-[24px] md:text-[26px] font-black leading-tight mt-6 mb-4"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === 'list') {
                return (
                  <ul key={`list-${index}`} className="list-disc pl-7 space-y-3 mb-5">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }

              if (block.type === 'image') {
                return (
                  <figure key={`${block.src}-${index}`} className="my-5">
                    <img
                      src={block.src}
                      alt={block.alt}
                      className="mx-auto w-full max-w-[625px] rounded-sm object-cover"
                      onError={(event) => {
                        event.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />
                    {block.caption && (
                      <figcaption className="mt-2 text-center text-[14px] leading-5 text-gray-500">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              return (
                <p key={`paragraph-${index}`} className="mb-5">
                  {block.text}
                </p>
              );
            })}

            {article.views ? (
              <p className="mt-8 text-[15px] text-gray-500">Số lần xem: {article.views}</p>
            ) : null}
          </article>
        </div>

        <section className="mt-12 border-t border-gray-100 pt-8">
          <div className="flex items-center justify-between gap-4 mb-5">
            <h2 className="text-[24px] font-black text-gray-950">Bài viết liên quan</h2>
            <Link
              to="/tin-tuc"
              className="text-primary text-[15px] font-bold flex items-center gap-1 hover:underline"
            >
              Xem thêm <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedArticles.map((item) => (
              <Link key={item.slug} to={`/${item.slug}`} className="group block">
                <div className="aspect-[16/9] overflow-hidden rounded-[8px] border border-gray-100 bg-gray-50 mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    onError={(event) => {
                      event.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />
                </div>
                <h3 className="text-[16px] font-black leading-snug text-gray-950 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ArticleDetailPage;
