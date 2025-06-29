setInterval(() => {
  const unions = document.querySelectorAll(".union");
  unions.forEach((union) => {
    const maxX = window.innerWidth - union.offsetWidth;
    const maxY = window.innerHeight - union.offsetHeight;

    const dx = Math.random() * 700 - 300;
    const dy = Math.random() * 700 - 300;

    let newX = parseInt(union.style.left || 0) + dx;
    let newY = parseInt(union.style.top || 0) + dy;

    newX = Math.max(5, Math.min(newX, maxX));
    newY = Math.max(5, Math.min(newY, maxY));

    union.style.left = newX + "px";
    union.style.top = newY + "px";
  });
}, 1000);

const unions = document.querySelectorAll(".union");
unions.forEach((union) => {
  const maxX = window.innerWidth - union.offsetWidth;
  const maxY = window.innerHeight - union.offsetHeight;
  union.style.left = Math.random() * maxX + "px";
  union.style.top = Math.random() * maxY + "px";
});
