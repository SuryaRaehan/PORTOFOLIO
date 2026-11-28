import * as content from "../content";
import { DITHER_CONFIG } from "../motion/dither";
import DitherCanvas from "./ui/DitherCanvas";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-legal">
          <p>
            Designed and built by{" "}
            <a href={content.GITHUB_URL} target="_blank" rel="noreferrer">
              {content.NAME}
            </a>
            . Adapted from TasteCode's visual language into a personal portfolio.
          </p>
        </div>
        <div className="footer-cols">
          <nav aria-label="Sections">
            <ul>
              {content.NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Social">
            <ul>
              {content.SOCIALS.map((social) => (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Meta">
            <ul>
              <li>
                <a href={content.RESUME_URL} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </li>
              <li>
                <a href={`mailto:${content.EMAIL}`}>Email</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-mark">
        <DitherCanvas className="footer-dither" config={DITHER_CONFIG.FOOTER} />
        <div className="wrap">
          <p className="wordmark" aria-label={content.NAME}>
            {content.NAME.split(" ").map((part) => (
              <span key={part}>{part}</span>
            ))}
          </p>
        </div>
      </div>
      <div className="footer-base">
        <div className="wrap footer-line mono">
          <span>Portfolio</span>
          <span>2026</span>
          <span>{content.LOCATION}</span>
          <span>{content.EMAIL}</span>
        </div>
      </div>
    </footer>
  );
}
