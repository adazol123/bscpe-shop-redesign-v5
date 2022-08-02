import React from "react";
import style from "./Button.module.css";
interface Accordion {
  title: string;
  open?: boolean;
  children: React.ReactNode | React.ReactNode[] | string;
}
const Accordion = <T extends Accordion>({ title, open, children }: T) => {
  return (
    <div className="max-w-sm w-full p-0 py-0 text-xs">
      <details
        open={open}
        className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10  px-4 py-1 rounded-lg transition-all transform-gpu duration-500"
      >
        <summary className="text-xs leading-6 text-neutral-500 dark:text-white font-semibold select-none transition-all transform-gpu duration-500">
          {title}
        </summary>
        <div className="mt-3 text-sm leading-6 text-neutral-400 dark:text-slate-400 transition-all transform-gpu duration-500 px-3">
          {children}
        </div>
      </details>
    </div>
  );
};

export default Accordion;
