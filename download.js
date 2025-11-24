document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./app/application-73ddb999-fef0-466d-998a-a548073eacd0.apk";
  link.download = "M1Show.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  document.getElementById("popupOverlay").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popupOverlay").style.display = "none";
});
