import { useRouter } from "next/router";
import { useEffect, type ReactNode } from "react";

export function Modal({ children, maxWidth = "max-w-3xl" }: { children: ReactNode; maxWidth?: string }) {
  const router = useRouter();

  const close = () => {
    router.push("/", undefined, { scroll: false });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto md:px-8 md:py-10">
      <div
        className="modal-backdrop fixed inset-0 bg-[#1f1f1f]/40"
        style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
        onClick={close}
      />
      <div className={`modal-panel relative z-10 w-full md:m-auto ${maxWidth}`}>
        <button
          onClick={close}
          aria-label="Close"
          className="fixed right-3 top-3 z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#1f1f1f] bg-white text-3xl leading-none transition-colors hover:bg-[#ff9aac] md:absolute md:-right-6 md:-top-6 md:h-16 md:w-16 md:text-4xl"
        >
          <span className="-mt-1">×</span>
        </button>
        {children}
      </div>
    </div>
  );
}
