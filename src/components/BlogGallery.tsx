import { useEffect, useRef, useState, type ReactNode } from "react";

type Item = { type: "img" | "video"; src: string; alt: string };

export function BlogGallery({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<Item | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const els = Array.from(root.querySelectorAll<HTMLImageElement | HTMLVideoElement>("img, video"));
    const cleanups: Array<() => void> = [];

    els.forEach((el) => {
      if (el.tagName === "IMG") {
        const img = el as HTMLImageElement;
        img.style.cursor = "zoom-in";
        const h = () =>
          setOpen({ type: "img", src: img.currentSrc || img.src, alt: img.alt });
        img.addEventListener("click", h);
        cleanups.push(() => img.removeEventListener("click", h));
      } else {
        const video = el as HTMLVideoElement;
        const parent = video.parentElement;
        if (!parent) return;
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.maxWidth = "640px";
        wrapper.style.marginLeft = "auto";
        wrapper.style.marginRight = "auto";
        parent.insertBefore(wrapper, video);
        wrapper.appendChild(video);

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "blog-gallery-expand";
        btn.setAttribute("aria-label", "View larger");
        btn.innerHTML =
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>';
        const onClick = (e: MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen({ type: "video", src: video.currentSrc || video.src, alt: "" });
        };
        btn.addEventListener("click", onClick);
        wrapper.appendChild(btn);
        cleanups.push(() => {
          btn.removeEventListener("click", onClick);
          if (wrapper.parentElement) {
            wrapper.parentElement.insertBefore(video, wrapper);
            wrapper.remove();
          }
        });
      }
    });

    return () => cleanups.forEach((fn) => fn());
  }, [children]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <div ref={ref}>{children}</div>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#1f1f1f] bg-white text-3xl leading-none text-[#1f1f1f] hover:bg-[#ff9aac]"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(null);
            }}
          >
            ×
          </button>
          <div className="flex max-h-full max-w-full items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {open.type === "img" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={open.src}
                alt={open.alt}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            ) : (
              <video
                src={open.src}
                controls
                autoPlay
                loop
                className="max-h-[90vh] max-w-[90vw]"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
