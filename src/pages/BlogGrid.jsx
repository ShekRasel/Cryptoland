import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { PageHeading, CallToAction } from "../components/Design";
import { ArticleCards } from "../components/Journal";
import { articles } from "../data/articles";
export default function BlogGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All stories");
  const filtered = articles.filter(
    (a) =>
      (category === "All stories" || a.category === category) &&
      `${a.title} ${a.description}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <PageHeading
        eyebrow="THE LEARNING HUB"
        title={
          <>
            Stay curious.
            <br />
            <span>See things differently.</span>
          </>
        }
        description="Fresh perspectives, thoughtful ideas, and a simpler starting point for your digital journey."
      />
      <section className="container section">
        <div className="journal-toolbar">
          <div className="filter-tabs" aria-label="Filter articles">
            {["All stories", ...new Set(articles.map((a) => a.category))].map(
              (c) => (
                <button
                  className={category === c ? "active" : ""}
                  key={c}
                  aria-pressed={category === c}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ),
            )}
          </div>
          <label className="search-field">
            <FiSearch />
            <input
              type="search"
              aria-label="Search stories"
              placeholder="Find a little inspiration…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
        {filtered.length ? (
          <ArticleCards items={filtered} />
        ) : (
          <div className="empty-state">
            <h3>No stories found.</h3>
            <p>Try a different search or explore another category.</p>
            <button
              className="button"
              onClick={() => {
                setQuery("");
                setCategory("All stories");
              }}
            >
              View all stories
            </button>
          </div>
        )}
      </section>
      <CallToAction />
    </>
  );
}
