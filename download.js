document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./app/application-73ddb999-fef0-466d-998a-a548073eacd0.apk";
  link.download = "M1Show.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Show popup
  document.getElementById("popupOverlay").style.display = "flex";

  // Reset countdown state
  let timeLeft = 3;
  const timerSpan = document.getElementById("timer");
  const countdownText = document.getElementById("countdownText");
  const closeBtn = document.getElementById("closePopup");

  timerSpan.textContent = timeLeft;
  countdownText.textContent = "Download is starting in ...";
  closeBtn.disabled = true;
  closeBtn.textContent = `OK (${timeLeft})`;

  // Start NEW countdown every time
  const countdown = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    closeBtn.textContent = `OK (${timeLeft})`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      countdownText.textContent = "Ready!";
      closeBtn.disabled = false;
      closeBtn.textContent = "OK";
    }
  }, 1000);
});

// Close popup
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popupOverlay").style.display = "none";
});
