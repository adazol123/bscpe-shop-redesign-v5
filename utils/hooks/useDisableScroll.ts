import { useEffect } from "react";

function ScrollDisableOnOverlay(isOpen: boolean) {
  useEffect(() => {
    let root_html = document!.querySelector("html");
    if (!isOpen) {
      root_html!.style.overflow = "";
      root_html!.style.paddingRight = "";
    } else {
      root_html!.style.overflow = "hidden";
      root_html!.style.paddingRight = "2px";
    }

    return () => {
      root_html!.removeAttribute("style");
    };
  }, [isOpen]);
}

export { ScrollDisableOnOverlay };
