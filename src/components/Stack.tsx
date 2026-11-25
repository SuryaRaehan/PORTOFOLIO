import * as content from "../content";
import { DITHER_CONFIG } from "../motion/dither";
import stagger from "../util";
import DitherCanvas from "./ui/DitherCanvas";
import { MarkIcon } from "./ui/Icons";
import SectionHead from "./ui/SectionHead";

export default function Stack() {
  return (
    <section className="sec sec--field" id="stack">
      <DitherCanvas className="sec-dither" config={DITHER_CONFIG.SECTION} />
      <div className="wrap">
        <SectionHead
          title="Tools and systems"
          lead="The stack is chosen for clarity, performance, and longevity."
        />
        <ul className="agents">
          {content.STACK.map((item, index) => (
            <li data-in="" style={stagger(index)} key={item.name}>
              <span className="agent-name">
                <MarkIcon /> {item.name}
              </span>
              <code className="mono agent-cmd">
                <span className="dim">$ </span>
                {item.cmd.replace(/^\$ /, "")}
              </code>
            </li>
          ))}
        </ul>
        <div className="pair">
          {content.CAPABILITIES.map((capability, index) => (
            <article className="card card--pair" data-in="" style={stagger(index)} key={capability.title}>
              <p className="mono card-tag">{capability.meta}</p>
              <h3>{capability.title}</h3>
              <p className="body">{capability.body}</p>
              <div className="pair-shot reveal">
                <div
                  style={{
                    padding: 24,
                    minHeight: 180,
                    display: "grid",
                    gap: 8,
                    alignContent: "end",
                  }}
                >
                  <span className="mono dim">capability / 0{index + 1}</span>
                  <span style={{ fontSize: "var(--t-h3)", letterSpacing: "-.03em" }}>
                    {capability.title}
                  </span>
                </div>
                <DitherCanvas className="reveal-canvas" config={DITHER_CONFIG.REVEAL} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
