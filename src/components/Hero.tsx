import { useEffect, useState } from "react";
import * as content from "../content";
import { DITHER_CONFIG } from "../motion/dither";
import { startRotation } from "../motion/heroWord";
import DitherCanvas from "./ui/DitherCanvas";

export default function Hero() {
  const [word, setWord] = useState(content.HERO_WORDS[0]);
  const [swap, setSwap] = useState(false);

  useEffect(() => startRotation(setWord, setSwap, content.HERO_WORDS), []);

  return (
    <section className="hero" id="top">
      <div className="hero-stage">
        <DitherCanvas className="hero-dither" config={DITHER_CONFIG.HERO} />
        <div className="wrap hero-in">
          <div className="mono hero-top">
            <span className="beta">{content.AVAILABILITY}</span>
            <span className="hero-notes">
              {content.LOCATION} · {content.ROLE}
            </span>
          </div>
          <h1 className="hero-title">
            <span className="sr-only">{content.TAGLINE}</span>
            <span className="hero-line" aria-hidden="true">
              A portfolio for
            </span>
            <span className="hero-word" aria-hidden="true">
              <span className="hero-word-text" data-swap={swap ? "" : undefined}>
                {word}
              </span>
              <span className="hero-caret" />
            </span>
          </h1>
          <div className="hero-row">
            <p className="lead hero-lead">{content.HERO_LEAD}</p>
            <div className="hero-actions">
              <a className="btn btn-ink btn-lg" href="#work">
                View Projects
              </a>
              <a
                className="btn btn-line btn-lg"
                href={content.RESUME_URL}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <dl className="strip wrap" aria-label="Quick facts">
        {content.METRICS.map((metric) => (
          <div key={metric.label}>
            <dt className="mono">{metric.label}</dt>
            <dd className="nums">{metric.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
