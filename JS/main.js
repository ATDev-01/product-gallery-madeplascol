document.addEventListener("DOMContentLoaded", () => {
  // Manejo de imágenes y creación dinámica de flechas
  const productCards = document.querySelectorAll("section .product-card");

  productCards.forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "group");

    const title = card.querySelector("h2");
    if (title) {
      card.setAttribute("aria-label", title.textContent);
    }
  });

  productCards.forEach((card) => {
    const img = card.querySelector("img");
    const altSrc = img.getAttribute("data-alt-src");

    if (altSrc) {
      const tempImg = new Image();
      tempImg.src = altSrc;

      const originalSrc = img.getAttribute("src");
      img.setAttribute("data-original-src", originalSrc);

      // Flecha Izquierda
      const prevBtn = document.createElement("button");
      prevBtn.innerHTML = "&#10094;";
      prevBtn.className = "nav-arrow prev-arrow";
      prevBtn.setAttribute("aria-label", "Ver imagen anterior");
      prevBtn.tabIndex = 0;

      // Flecha Derecha
      const nextBtn = document.createElement("button");
      nextBtn.innerHTML = "&#10095;";
      nextBtn.className = "nav-arrow next-arrow";
      nextBtn.setAttribute("aria-label", "Ver siguiente imagen");
      nextBtn.tabIndex = 0;

      // Insertar flechas en el DOM
      card.append(prevBtn, nextBtn);

      // Función para cambiar imagen
      const toggleImg = (e) => {
        e.stopPropagation();
        const current = img.getAttribute("src");
        img.src = current === originalSrc ? altSrc : originalSrc;
      };

      prevBtn.onclick = toggleImg;
      nextBtn.onclick = toggleImg;
    }
  });

  // Actualización del año en el footer
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});