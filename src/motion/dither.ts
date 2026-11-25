export interface DitherConfig {
  cell: number;
  light: [number, number];
  calm: [number, number, number];
  opacity: number;
}

export const DITHER_CONFIG: Record<"HERO" | "SECTION" | "FOOTER" | "REVEAL", DitherConfig> = {
  HERO: {
    cell: 2,
    light: [0.8, 1.04],
    calm: [0.2, 0.66, 0.74],
    opacity: 1,
  },
  SECTION: {
    cell: 2,
    light: [0.5, 1.12],
    calm: [0.5, -1, 0.1],
    opacity: 0.72,
  },
  FOOTER: {
    cell: 3,
    light: [0.5, 1.18],
    calm: [0.5, 3, 0.1],
    opacity: 0.85,
  },
  REVEAL: {
    cell: 3,
    light: [0.86, 0.02],
    calm: [0.3, 0.5, 0.5],
    opacity: 0.55,
  },
};

export function draw(canvas: HTMLCanvasElement, cfg: DitherConfig, t: number): void {
  const width = Math.max(canvas.clientWidth, 1);
  const height = Math.max(canvas.clientHeight, 1);

  if (canvas.width !== width) {
    canvas.width = width;
  }
  if (canvas.height !== height) {
    canvas.height = height;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  const cell = Math.max(cfg.cell, 1);
  const cols = Math.ceil(width / cell);
  const rows = Math.ceil(height / cell);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#f2f2ee";

  const [lx, ly] = cfg.light;
  const [cx, cy, cz] = cfg.calm;

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      const nx = x / cols;
      const ny = y / rows;
      const wave = Math.sin(nx * 9 + t * cx + (ny * 7 - t * cy)) * 0.5 + 0.5;
      const drift = (Math.cos(nx * 3 - ny * 2.5 + t * 0.08) + 1) * 0.5;
      const vignette = 1 - (nx - 0.5) * lx * ((nx - 0.5) * lx) - (ny - 0.45) * ly * ((ny - 0.45) * ly);
      let alpha = (wave * 0.45 + drift * 0.35 + vignette * 0.35) * cfg.opacity * cz;
      const noise = (Math.random() - 0.5) * 0.08;
      alpha = Math.min(Math.max(alpha + noise, 0), 0.22 * Math.max(cfg.opacity, 0.4));

      if (alpha > 0.012) {
        ctx.globalAlpha = alpha;
        ctx.fillRect(x * cell, y * cell, cell - 0.2, cell - 0.2);
      }
    }
  }

  ctx.globalAlpha = 1;
}
