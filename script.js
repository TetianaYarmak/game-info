const stars = document.querySelectorAll('#ratingStars .star');
const ratingCircle = document.getElementById('ratingCircle');
const ratingValue = document.getElementById('ratingValue');

// Масив для збереження кліків (тільки поточна сесія)
let ratings = [];

// Функція для оновлення середнього
function updateAverage() {
  if (ratings.length === 0) {
    ratingValue.textContent = "0.0";
    return;
  }

  const sum = ratings.reduce((a, b) => a + b, 0);
  const avgStars = sum / ratings.length;
  const avgRating = (avgStars / stars.length) * 10;
  const percentage = (avgStars / stars.length) * 100;

  ratingCircle.style.background = `conic-gradient(var(--light-green) ${percentage}%, #B7BACD 0%)`;

  ratingValue.textContent = avgRating.toFixed(1); // 1 знак після коми
}

// При кліку на зірку
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    // Заповнюємо зірки
    stars.forEach((s, i) => {
      s.classList.toggle('filled', i <= index);
    });

    // Додаємо оцінку в масив
    const filledStars = index + 1;
    ratings.push(filledStars);

    // Оновлюємо середнє
    updateAverage();
  });
});

// При завантаженні сторінки обнуляємо рейтинг
/* window.addEventListener('load', () => {
  ratings = [];
  updateAverage();
}); */
