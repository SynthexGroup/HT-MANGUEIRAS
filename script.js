let index = 0;
const carrosseis = document.querySelectorAll(".carrossel"); // Todos os carrosséis

function mostrarImagem(n, carrossel) {
  const imagens = carrossel.querySelectorAll(".imagem");
  if (n >= imagens.length) index = 0;
  if (n < 0) index = imagens.length - 1;

  imagens.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function mudarImagem(n) {
  carrosseis.forEach((carrossel) => {
    mostrarImagem(index += n, carrossel);
  });
}

// Mudar as imagens automaticamente a cada 3 segundos (3000 milissegundos)
setInterval(() => {
  carrosseis.forEach((carrossel) => {
    mostrarImagem(index += 1, carrossel);
  });
}, 3000);

// Iniciar o carrossel mostrando a primeira imagem
document.addEventListener("DOMContentLoaded", () => {
  carrosseis.forEach((carrossel) => {
    mostrarImagem(index, carrossel);
  });
});