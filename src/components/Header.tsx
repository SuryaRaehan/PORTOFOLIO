import { useState } from "react";
import * as content from "../content";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((value) => !value);
  const close = () => setOpen(false);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap header-row">
          <a className="brand" href="#top" onClick={close}>
            <span>{content.NAME}</span>
            <span className="mono brand-v">{content.ROLE}</span>
          </a>
          <nav className="header-nav" aria-label="Primary">
            {content.NAV.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a
              className="btn btn-line btn-sm header-github"
              href={content.GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="btn btn-ink btn-sm" href="#contact">
              Contact
            </a>
            <button
              className="menu-button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={toggle}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className="menu-sheet" id="site-menu" hidden={!open}>
          <nav aria-label="Mobile">
            {content.NAV.map((item) => (
              <a href={item.href} onClick={close} key={item.href}>
                {item.label}
              </a>
            ))}
            <a href={content.GITHUB_URL} target="_blank" rel="noreferrer" onClick={close}>
              GitHub
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
