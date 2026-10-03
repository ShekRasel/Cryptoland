import { useState } from "react";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiMoreHorizontal,
  FiPlus,
  FiArrowDownLeft,
  FiCheck,
  FiActivity,
} from "react-icons/fi";
import { Link } from "react-router-dom";
const paths = {
  "1W": "0,115 18,108 32,116 50,93 65,99 82,82 100,88 118,66 133,78 151,62 168,72 186,45 203,55 218,36 234,44 252,29 268,40 283,21 302,27 321,8 340,15 360,3",
  "1M": "0,126 18,118 32,122 50,102 65,108 82,93 100,101 118,78 133,89 151,49 168,57 186,40 203,59 218,48 234,67 252,46 268,38 283,46 302,24 321,34 340,12 360,4",
  "1Y": "0,130 18,120 32,125 50,119 65,92 82,104 100,80 118,89 133,65 151,81 168,52 186,58 203,32 218,51 234,38 252,47 268,22 283,36 302,16 321,22 340,7 360,3",
  ALL: "0,135 18,129 32,133 50,113 65,123 82,113 100,99 118,110 133,91 151,102 168,75 186,85 203,67 218,83 234,60 252,67 268,43 283,58 302,31 321,37 340,13 360,3",
};
export default function PortfolioPreview() {
  const [period, setPeriod] = useState("1M");
  return (
    <div className="portfolio-scene">
      <div className="scene-orbit orbit-one" />
      <div className="scene-orbit orbit-two" />
      <span className="scene-star star-one">✦</span>
      <span className="scene-star star-two">✦</span>
      <div className="portfolio-card">
        <div className="portfolio-top">
          <span>
            <span className="mini-mark">c</span> My portfolio
          </span>
          <FiMoreHorizontal />
        </div>
        <div className="balance-label">
          Total balance{" "}
          <span>
            USD <FiChevronDown />
          </span>
        </div>
        <div className="balance">
          $24,680<span>.50</span>
        </div>
        <div className="balance-change">
          <FiArrowUpRight /> +$2,340.80 (10.48%) <span>this month</span>
        </div>
        <div className="chart-toolbar">
          <span>
            <i /> Portfolio value
          </span>
          <div aria-label="Chart period">
            {Object.keys(paths).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={period === p ? "selected" : ""}
                aria-pressed={period === p}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div className="chart">
          <svg
            viewBox="0 0 360 160"
            role="img"
            aria-label={`Illustrative portfolio performance over ${period}`}
          >
            <defs>
              <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3065f5" stopOpacity=".22" />
                <stop offset="100%" stopColor="#3065f5" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[25, 65, 105, 145].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="360"
                y2={y}
                stroke="#edf0f6"
                strokeDasharray="4 5"
              />
            ))}
            <polygon
              points={`0,160 ${paths[period]} 360,160`}
              fill="url(#chart-fill)"
            />
            <polyline
              points={paths[period]}
              fill="none"
              stroke="#3065f5"
              strokeWidth="2.8"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="chart-dates">
          <span>
            {period === "1W" ? "Mon" : period === "1M" ? "Jun 1" : "Jan"}
          </span>
          <span>
            {period === "1W" ? "Wed" : period === "1M" ? "Jun 10" : "Apr"}
          </span>
          <span>
            {period === "1W" ? "Fri" : period === "1M" ? "Jun 20" : "Aug"}
          </span>
          <span>
            {period === "1W" ? "Sun" : period === "1M" ? "Jun 30" : "Dec"}
          </span>
        </div>
        <div className="portfolio-assets">
          <div>
            <span className="coin bitcoin">₿</span>
            <span>
              Bitcoin<small>BTC</small>
            </span>
            <span>
              $16,482.24<small className="positive">+8.24%</small>
            </span>
          </div>
          <div>
            <span className="coin ethereum">Ξ</span>
            <span>
              Ethereum<small>ETH</small>
            </span>
            <span>
              $8,198.26<small className="positive">+12.65%</small>
            </span>
          </div>
        </div>
        <div className="portfolio-buttons">
          <Link to="/signup">
            <FiPlus /> Explore assets
          </Link>
          <Link to="/blogGrid">
            <FiArrowDownLeft /> Learn more
          </Link>
        </div>
        <p className="preview-label">
          Illustrative portfolio · Not live market data
        </p>
      </div>
      <div className="float-card float-growth">
        <span className="float-icon">
          <FiActivity />
        </span>
        <div>
          <small>A little progress, every day</small>
          <strong>A bigger picture.</strong>
          <span className="mini-bars">▂ ▄ ▃ ▆ ▅ █</span>
        </div>
      </div>
      <div className="float-card float-check">
        <span className="check-icon">
          <FiCheck />
        </span>
        <div>
          <strong>Designed around you</strong>
          <small>Simple. Thoughtful. Connected.</small>
        </div>
      </div>
    </div>
  );
}
