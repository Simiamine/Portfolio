"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface CvModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

export function CvModal({ open, onClose, title }: CvModalProps) {
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-3xl bg-card rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-primary-dark to-primary-light text-white">
          <h3 className="font-semibold text-lg">{title}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-dark hover:rotate-90 transition-transform"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-0">
          <iframe
            src="/cvfr.pdf"
            className="w-full h-[70vh] border-none"
            title="CV"
          />
        </div>
      </div>
    </div>
  );
}
