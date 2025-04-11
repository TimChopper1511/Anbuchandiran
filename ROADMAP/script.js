document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      const target = link.getAttribute("target");
      const href = link.getAttribute("href");
      if (href.startsWith("http") || href.startsWith("#") || target === "_blank") return;

      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });
});
