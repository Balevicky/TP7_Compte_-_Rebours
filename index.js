let hours = 0;
let minutes;
let seconds;
let interval;
// Créer la logique de compte à rebours

//================= Fonction de calcule
function cacul(value) {
  minutes = Math.floor(value / 60);
  seconds = value % 60;
  if (minutes > 60) {
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
  }
}
//================= FIN Fonction de calcule

// ======================Fonction Chrono
const chrono = () => {
  // ============== fonction d'affiche
  const displayCount = () => {
    const sec = seconds < 10 ? "0" + seconds : seconds;
    const mn = minutes < 10 ? "0" + minutes : minutes;
    const hh = hours < 10 ? "0" + hours : hours;
    countdownDisplay.innerHTML = `<h2>${hh}:${mn}:${sec} </h2>`;
  };
  // ============== Fin fonction d'affiche

  if (seconds > 0) {
    seconds--;
    displayCount();
  } else if (minutes > 0) {
    seconds = 59;
    minutes--;

    displayCount();
  } else if (hours > 0) {
    hours--;
    minutes = 59;
    seconds = 59;
    displayCount();
  } else {
    countdownDisplay.innerHTML = `<h2>C'est terminé </h2>`;
    clearInterval(interval);
  }
};
// ====================== Fin Fonction Chrono

// =============== evenement declencheur
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(choice.value)) {
    alert("Entrez un chiffre s'il vous plaît");
  } else {
    let totalSeconds = choice.value * 60;
    choice.value = "";
    cacul(totalSeconds);
    clearInterval(interval);
    interval = setInterval(chrono, 100);
  }
});
// =============== evenement declencheur
