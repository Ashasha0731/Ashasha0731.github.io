const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function moveCarousel(direction) {
  const cards = document.querySelectorAll(".card");
  const cardWidth = cards[0].offsetWidth + 15; // 包含間距
  const totalCards = cards.length;

  index += direction;
  if (index < 0) index = totalCards - 3; // 左邊極限
  if (index > totalCards - 3) index = 0; // 右邊極限

  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// 按鈕點擊事件
prevBtn.addEventListener("click", () => moveCarousel(-1));
nextBtn.addEventListener("click", () => moveCarousel(1));

// 滑鼠/觸控拖曳
let startX = 0;
let scrollLeft = 0;
let isDown = false;

track.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
  track.style.cursor = "grabbing";
});

track.addEventListener("mouseleave", () => (isDown = false));
track.addEventListener("mouseup", () => (isDown = false));
track.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 1.5;
  track.scrollLeft = scrollLeft - walk;
});
