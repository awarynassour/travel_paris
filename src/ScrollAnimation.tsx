import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 300;
const DIR = "/ezgif-8521e911c107656a-jpg/";
const pad = (n: number) => String(n).padStart(3, "0");
const frameSrc = (i: number) => `${DIR}ezgif-frame-${pad(i)}.jpg`;

/**
 * Fixed, full-screen cinematic background.
 * The 300-frame sequence is preloaded, then advanced smoothly based on how
 * far down the whole page has been scrolled — so the footage plays as the
 * visitor moves through every section on top of it.
 */
export default function ScrollAnimation() {
  const imgRef = useRef<HTMLImageElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentRef = useRef(0); // frame currently shown (float, eased)
  const targetRef = useRef(0); // frame the scroll position points to
  const [progress, setProgress] = useState(0); // preload progress 0..100
  const [ready, setReady] = useState(false);

  // Preload every frame once
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const im = new Image();
      im.onload = im.onerror = () => {
        loaded++;
        setProgress(Math.round((loaded / FRAME_COUNT) * 100));
        if (loaded === FRAME_COUNT) setReady(true);
      };
      im.src = frameSrc(i);
      images[i] = im;
    }
    imagesRef.current = images;
  }, []);

  // Drive playback from scroll once frames are ready
  useEffect(() => {
    if (!ready) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? window.scrollY / scrollable : 0;
      targetRef.current = Math.min(1, Math.max(0, p)) * (FRAME_COUNT - 1);
    };

    let raf = 0;
    const render = () => {
      // Ease toward target for buttery-smooth motion
      currentRef.current += (targetRef.current - currentRef.current) * 0.12;
      const idx = Math.round(currentRef.current) + 1;
      const img = imgRef.current;
      const frame = imagesRef.current[idx];
      if (img && frame && img.src !== frame.src) img.src = frame.src;
      raf = requestAnimationFrame(render);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ready]);

  return (
    <>
      {/* Fixed background frame + dark overlay for readability */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          ref={imgRef}
          src={frameSrc(1)}
          alt=""
          className="w-full h-full object-cover"
          style={{ willChange: "contents" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Preloader */}
      {!ready && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white font-sans">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs tracking-[0.3em] uppercase text-white/60">
              Loading Experience
            </span>
            <span className="text-4xl font-serif italic">{progress}%</span>
            <div className="w-40 h-[2px] bg-white/10 overflow-hidden rounded-full">
              <div
                className="h-full bg-white transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
