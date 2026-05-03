import { useRouter } from "next/router";
import { useEffect, type ReactNode } from "react";

export function Modal({ children }: { children: ReactNode }) {
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
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
      <div
        className="modal-backdrop absolute inset-0 bg-[#1f1f1f]/40"
        style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
        onClick={close}
      />
      <div className="modal-panel relative z-10 my-6 w-full max-w-5xl px-3 md:my-10 md:px-6">
        <button
          onClick={close}
          aria-label="Close"
          className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1f1f1f] bg-white text-lg shadow-[0_3px_0_#1f1f1f] hover:bg-[#1f1f1f] hover:text-white"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
