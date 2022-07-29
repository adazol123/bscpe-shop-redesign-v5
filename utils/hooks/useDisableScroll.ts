function scrollDisableOnOverlay(isOpen: boolean) {
  let root_html = document!.querySelector("html");
  if (!isOpen) {
    root_html!.style.overflow = "";
    root_html!.style.width = "";
  } else {
    root_html!.style.overflow = "hidden";
    root_html!.style.width = "4px";
  }
}

export { scrollDisableOnOverlay };
