import { useState } from "react";
import * as content from "../content";
import { DITHER_CONFIG } from "../motion/dither";
import DitherCanvas from "./ui/DitherCanvas";
import SectionHead from "./ui/SectionHead";

export default function Process() {
  const [active, setActive] = useState(0);
  const current = content.PROCESS[active] ?? content.PROCESS[0];

  return (
    <section className="how sec--field" id="process">
      <DitherCanvas className="sec-dither" config={DITHER_CONFIG.SECTION} />
      <div className="wrap how-head">
        <SectionHead
          title="From brief to shipped"
          lead="A clear process for design, motion, and code that look sharp and work hard."
        />
      </div>
      <div className="wrap how-static">
        <div className="plate reveal">
          <div
            style={{
              padding: "clamp(24px,3vw,40px)",
              minHeight: 360,
              display: "grid",
              alignContent: "end",
              gap: 16,
              position: "relative",
            }}
          >
            <p className="mono dim">0{active + 1} / 05</p>
            <h3
              style={{
                fontSize: "var(--t-h3)",
                letterSpacing: "-.04em",
                fontWeight: 500,
              }}
            >
              {current.previewTitle}
            </h3>
            <p className="lead" style={{ maxWidth: "28em" }}>
              {current.previewBody}
            </p>
          </div>
          <DitherCanvas className="reveal-canvas" config={DITHER_CONFIG.REVEAL} />
        </div>
        <ol className="how-chapters">
          {content.PROCESS.map((step, index) => (
            <li key={step.name}>
              <button
                className="chapter-btn"
                aria-current={active === index ? "true" : undefined}
                onClick={() => setActive(index)}
              >
                <span className="phase-name">{step.name}</span>
                <span className="body muted">{step.detail}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
