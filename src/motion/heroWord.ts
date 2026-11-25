export function startRotation(
  setWord: (word: string) => void,
  setSwap: (swap: boolean) => void,
  words: string[],
): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || words.length < 2) {
    return () => {};
  }

  let index = 0;
  let timeout = 0;

  const interval = window.setInterval(() => {
    index = (index + 1) % words.length;
    setSwap(true);
    setWord(words[index]);
    timeout = window.setTimeout(() => setSwap(false), 820);
  }, 2400);

  return () => {
    window.clearInterval(interval);
    window.clearTimeout(timeout);
  };
}
