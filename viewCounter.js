fetch("https://api.countapi.xyz/hit/m1show/visitorcounter")
  .then(res => res.json())
  .then(data => {
    document.getElementById("counter").textContent = "Views: " + data.value;
  });
