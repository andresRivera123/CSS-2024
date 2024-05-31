const observer = new IntersectionObserver((entries) => {
  entries.forEach((entri) => {
    console.log(entri);
    if (entri.isIntersecting) {
      entri.target.classList.add("show");
    } else {
      entri.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  observer.observe(el);
});
