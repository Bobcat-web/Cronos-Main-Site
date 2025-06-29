document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".cont");
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-50%)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)";
    });
  });

  const container = document.getElementById("drow-box");
  let previousPosition = null;
  let trailLines = [];
  const maxTrailLines = 50; // Максимальное количество линий

  container.addEventListener("mousemove", (e) => {
    const currentPosition = {
      x: e.pageX - container.offsetLeft,
      y: e.pageY,
    };

    if (previousPosition) {
      // Создаем линию между предыдущей и текущей позицией
      const line = document.createElement("div");
      line.className = "trail-line";

      // Вычисляем длину и угол линии
      const dx = currentPosition.x - previousPosition.x;
      const dy = currentPosition.y - previousPosition.y;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

      // Устанавливаем стили для линии
      line.style.width = `${length}px`;
      line.style.height = "2px";
      line.style.left = `${previousPosition.x}px`;
      line.style.top = `${previousPosition.y}px`;
      line.style.transform = `rotate(${angle}deg)`;
      line.style.opacity = "1";

      // Добавляем линию в контейнер
      container.appendChild(line);

      // Сохраняем линию в массив
      trailLines.push(line);

      // Удаляем старые линии, если их слишком много
      if (trailLines.length > maxTrailLines) {
        const oldLine = trailLines.shift();

        // Анимация исчезновения перед удалением
        oldLine.style.transition = "opacity 0.2s";
        oldLine.style.opacity = "0";

        setTimeout(() => {
          if (oldLine.parentNode) {
            container.removeChild(oldLine);
          }
        }, 300);
      }
    }

    previousPosition = currentPosition;
  });

  container.addEventListener("mouseleave", () => {
    // Анимированно удаляем все линии при выходе за пределы
    trailLines.forEach((line) => {
      line.style.transition = "opacity 0.5s";
      line.style.opacity = "0";

      setTimeout(() => {
        if (line.parentNode) {
          container.removeChild(line);
        }
      }, 500);
    });

    trailLines = [];
    previousPosition = null;
  });
});
