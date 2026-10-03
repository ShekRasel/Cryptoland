/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { articles } from "../data/articles";
export function ArticleCards({ limit, items = articles }) {
  return (
    <div className="article-grid">
      {items.slice(0, limit || items.length).map((article) => (
        <article className="article-card" key={article.id}>
          <Link
            className="article-image"
            to={`/singleBlog?article=${article.id}`}
            tabIndex={-1}
            aria-hidden="true"
          >
            <img src={article.image} alt="" loading="lazy" />
            <span>
              <FiArrowUpRight />
            </span>
          </Link>
          <div className="article-meta">
            <span>{article.category}</span>
            <span>{article.read}</span>
          </div>
          <h3>
            <Link to={`/singleBlog?article=${article.id}`}>
              {article.title}
            </Link>
          </h3>
          <p>{article.description}</p>
          <Link className="text-link" to={`/singleBlog?article=${article.id}`}>
            Read story <FiArrowUpRight />
          </Link>
        </article>
      ))}
    </div>
  );
}
