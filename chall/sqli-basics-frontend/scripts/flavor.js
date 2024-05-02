// This script is not relevant to the CTF challenge.
// It just adds some flavor to the Windows 98 UI.

const coresElement = document.getElementById("cores");
const usageElement = document.getElementById("usage");

const flavor = navigator.hardwareConcurrency;
coresElement.innerText = flavor;

function updateUsage() {
  const newUsage = Math.random() * 70 + 10;
  usageElement.innerText = Math.round(newUsage) + "%";

  setTimeout(updateUsage, 2000);
}
updateUsage();