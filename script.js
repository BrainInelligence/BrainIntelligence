// Добавляем простую анимацию частиц на фон
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '1';

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particles = [];

for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push(new Particle(x, y));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

animate();

// Находим элементы
const promoButton = document.getElementById('promoButton');
const promoCode = document.getElementById('promoCode');

// Добавляем обработчик события на кнопку
promoButton.addEventListener('click', () => {
    if (promoCode.classList.contains('hidden')) {
        // Показываем промокод
        promoCode.classList.remove('hidden');
        promoCode.style.display = 'block';
        promoButton.textContent = 'Скрыть промокод';
    } else {
        // Скрываем промокод
        promoCode.classList.add('hidden');
        promoCode.style.display = 'none';
        promoButton.textContent = 'Получить промокод';
    }
});
