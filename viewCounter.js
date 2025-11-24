let count = localStorage.getItem("m1_views") || 0;
count++;
localStorage.setItem("m1_views", count);
document.getElementById("counter").textContent = `Views : ${count}`;
