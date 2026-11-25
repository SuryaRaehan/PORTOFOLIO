import { useState } from "react";
import { DITHER_CONFIG } from "../motion/dither";
import DitherCanvas from "./ui/DitherCanvas";
import { PlayIcon } from "./ui/Icons";
import SectionHead from "./ui/SectionHead";

export default function Showcase() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="sec" id="showreel">
      <div className="wrap">
        <SectionHead
          title="The showreel"
          lead="Selected moments from recent edits. Sound off, detail on."
        />
        <div className="film">
          {playing ? (
            <div
              className="film-video"
              style={{
                display: "grid",
                placeItems: "center",
                background: "radial-gradient(circle at 50% 30%, #1a1a1a, #050505 70%)",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: 24,
                  display: "grid",
                  gap: 12,
                }}
              >
                <p className="mono dim">SHOWREEL PLACEHOLDER</p>
                <p className="lead">
                  Drop a demo video at <code>public/media/showreel.mp4</code>
                </p>
              </div>
            </div>
          ) : (
            <button
              className="film-poster"
              aria-label="Play showreel"
              onClick={() => setPlaying(true)}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle at 50% 35%, #171717 0%, #050505 72%)",
                }}
              />
              <DitherCanvas className="film-dither" config={DITHER_CONFIG.REVEAL} />
              <span className="mono film-meta film-meta--tl">showreel.mp4</span>
              <span className="mono film-meta film-meta--tr">1920 × 1080 · silent</span>
              <span className="mono film-meta film-meta--bl">00:42</span>
              <span className="mono film-meta film-meta--br">play demo</span>
              <span className="film-play">
                <PlayIcon /> Play
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
