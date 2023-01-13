const estrelas = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".fa-regular");

console.log(estrelas);

estrelas.forEach((estrelas, index) => {
  estrelas.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  estrelas.forEach((estrelas, idx) => {
    if (idx < index + 1) {
      estrelas.classList.add("active");
    } else {
      estrelas.classList.remove("active");
    }
  });
  emojis.forEach((emojis) => {
    emojis.style.transform = `translateX(-${index * 50}px)`;
  });
}
