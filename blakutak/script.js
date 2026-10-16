
document.addEventListener("DOMContentLoaded", function () {
  const giftBox = document.getElementById("giftBox");
  const flowerResult = document.getElementById("flowerResult");
  const page3 = document.getElementById("page3");
  const page3Background = document.getElementById("page3Background");
  const resetGift = document.getElementById("resetGift");

  if (!giftBox || !flowerResult || !page3 || !resetGift) {
      alert("Elemen hadiah tidak ditemukan!");
      return;
  }

  giftBox.onclick = function () {
      giftBox.style.display = "none";
      flowerResult.hidden = false;
      flowerResult.style.display = "flex";
      page3.classList.add("gift-open");

      if (page3Background) {
          page3Background.play().catch(function () {});
      }
  };

  resetGift.onclick = function () {
      flowerResult.hidden = true;
      flowerResult.style.display = "none";
      giftBox.style.display = "flex";
      page3.classList.remove("gift-open");

      if (page3Background) {
          page3Background.pause();
          page3Background.currentTime = 0;
      }
  };
});
