export function initReveals(): () => void {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-in]"));

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((node) => node.classList.add("in-go"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add("in-go");
          activeObserver.unobserve(target);
        }
      }
    },
    { threshold: 0.12 },
  );

  nodes.forEach((node) => observer.observe(node));

  return () => observer.disconnect();
}
