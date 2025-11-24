fetch("https://api.countapi.xyz/hit/m1show/webcounter")
  .then(res => res.json())
  .then(data => {
    document.getElementById("counter").textContent = "Views : " + data.value;
  });
