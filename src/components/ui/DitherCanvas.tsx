import { useEffect, useRef } from "react";
import { DITHER_CONFIG, draw, type DitherConfig } from "../../motion/dither";

type DitherCanvasProps = {
  className: string;
  config?: DitherConfig;
};

export default function DitherCanvas({ className, config = DITHER_CONFIG.SECTION }: DitherCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    canvas.setAttribute("data-live", "");

    if (reduce) {
      draw(canvas, config, 0);
      return;
    }

    let secondFrame = 0;
    let thirdFrame = 0;
    const frame = (timestamp: number) => draw(canvas, config, timestamp / 1000);
    const firstFrame = requestAnimationFrame(frame);
    const firstTimer = window.setTimeout(() => {
      secondFrame = requestAnimationFrame(frame);
    }, 120);
    const secondTimer = window.setTimeout(() => {
      thirdFrame = requestAnimationFrame(frame);
    }, 480);

    return () => {
      cancelAnimationFrame(firstFrame);
      if (secondFrame) {
        cancelAnimationFrame(secondFrame);
      }
      if (thirdFrame) {
        cancelAnimationFrame(thirdFrame);
      }
      window.clearTimeout(firstTimer);
      window.clearTimeout(secondTimer);
    };
  }, [config]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
