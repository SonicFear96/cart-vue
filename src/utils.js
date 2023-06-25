export function disableScroll() {
  const initPosition = document.body.getBoundingClientRect().top;
  document.body.style.top = `${initPosition}px`;
  document.body.classList.add("fixed");
}

export function enableScroll() {
  const initPosition = document.body.getBoundingClientRect().top;
  document.body.classList.remove("fixed");
  document.body.style.top = null;
  window.scroll(0, -initPosition);
}
