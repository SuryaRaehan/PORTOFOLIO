import * as content from "../content";
import { DITHER_CONFIG } from "../motion/dither";
import stagger from "../util";
import DitherCanvas from "./ui/DitherCanvas";
import SectionHead from "./ui/SectionHead";

export default function Projects() {
  const [featured, ...rest] = content.PROJECTS;

  return (
    <section className="sec" id="work">
      <div className="wrap">
        <SectionHead
          title="Selected work"
          lead="Case studies focused on outcomes, clarity, and craft."
        />
        <article className="card card--media" data-in="">
          <div className="card-bar mono">
            <span>featured case · {featured.category}</span>
            <span className="dim">outcome: {featured.outcome}</span>
          </div>
          <div className="reveal" style={{ minHeight: 380 }}>
            <div
              style={{
                padding: "clamp(24px,4vw,56px)",
                minHeight: 380,
                display: "grid",
                alignContent: "end",
                gap: 14,
                position: "relative",
                zIndex: 1,
              }}
            >
              <p className="mono dim">{featured.category}</p>
              <h3
                style={{
                  fontSize: "clamp(40px,1rem+4vw,84px)",
                  letterSpacing: "-.05em",
                  lineHeight: 0.95,
                }}
              >
                {featured.title}
              </h3>
              <p className="lead" style={{ maxWidth: "30em" }}>
                {featured.body}
              </p>
            </div>
            <DitherCanvas className="reveal-canvas" config={DITHER_CONFIG.REVEAL} />
          </div>
        </article>
        <div className="cards cards--3" style={{ marginTop: 16, marginBottom: 0 }}>
          {rest.map((project, index) => (
            <article className="card" data-in="" style={stagger(index + 1)} key={project.title}>
              <p className="mono card-tag">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
              <p className="mono dim" style={{ marginTop: 14 }}>
                {project.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
