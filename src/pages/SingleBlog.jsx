import { Link, useSearchParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { articles } from "../data/articles";
import { ArticleCards } from "../components/Journal";
export default function SingleBlog() {
  const [params] = useSearchParams();
  const article =
    articles.find((a) => a.id === params.get("article")) || articles[0];
  return (
    <>
      <article className="article-page container">
        <Link className="text-link" to="/blogGrid">
          <FiArrowLeft /> Back to the learning hub
        </Link>
        <header className="article-header">
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <div className="author-row">
            <span className="author-icon">c</span>
            <span>
              Cryptoland editorial
              <small>Ideas for a more thoughtful digital world</small>
            </span>
            <span>{article.read}</span>
          </div>
        </header>
        <img
          className="article-cover"
          src={article.image}
          alt="Editorial illustration accompanying the story"
        />
        <div className="article-body">
          <aside>
            <span className="eyebrow">IN THIS STORY</span>
            {article.sections.map(([title], i) => (
              <a key={title} href={`#section-${i}`}>
                {title}
              </a>
            ))}
            <Link className="text-link" to="/contact">
              Share your thoughts <FiArrowUpRight />
            </Link>
          </aside>
          <div>
            {article.sections.map(([title, text], i) => (
              <section id={`section-${i}`} key={title}>
                <h2>{title}</h2>
                <p>{text}</p>
              </section>
            ))}
            <blockquote>
              Less complexity. More clarity. More room to explore.
            </blockquote>
            <p className="article-disclaimer">
              An editorial perspective from the Cryptoland frontend concept.
            </p>
          </div>
        </div>
      </article>
      <section className="container section">
        <div className="section-heading-row">
          <h2>Keep exploring.</h2>
          <Link className="text-link" to="/blogGrid">
            All stories <FiArrowUpRight />
          </Link>
        </div>
        <ArticleCards items={articles.filter((a) => a.id !== article.id)} />
      </section>
    </>
  );
}
