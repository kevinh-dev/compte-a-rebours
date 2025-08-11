//-----------------------------
// Compte à rebours em JavaScript
//-----------------------------

// Sélection des éléments HTML où on affichera le temps
const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const finishedMessage = document.getElementById("finishedMessage");
const inputDate = document.getElementById("targetDate");
const startBtn = document.getElementById("startBtn");

let interval; // Variable pour stocker l'intervalle
let targetDate; // Date cible définie par l'utilisateur

// Événement de clic sur le bouton
startBtn.addEventListener("click", function () {
  if (!inputDate.value) {
    alert("Veuillez sélectionnet une date !");
    return;
  }

  // On arrête un ancien compteur si il existe
  clearInterval(interval);

  targetDate = new Date(inputDate.value);

  if (isNaN(targetDate.getTime())) {
    alert("Date invalide. Veuillez saisir une date correcte !");
    return;
  }

  updateCountdown();

  // Mettre à jour toutes les secondes
  interval = setInterval(updateCountdown, 1000);
});

// Fonction qui calcule et met à jour le compte à rebours
function updateCountdown() {
  // Obtenir la date et l'heure actuelles
  const now = new Date().getTime();

  // Calculer la différence entre la date cible et maintenant
  const distance = targetDate - now;

  // Si la date est atteinte
  if (distance <= 0) {
    clearInterval(interval);
    alert("🎉 Temps écoulé !");
    finishedMessage.textContent = "🎉 Temps écoulé !";
    daysE1.textContent = "00";
    hoursE1.textContent = "00";
    minutesE1.textContent = "00";
    secondsE1.textContent = "00";
    return;
  }

  // Calcul des jours, heures, munites, secondes restants
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysE1.textContent = days.toString().padStart(2, "0");
  hoursE1.textContent = hours.toString().padStart(2, "0");
  minutesE1.textContent = minutes.toString().padStart(2, "0");
  secondsE1.textContent = seconds.toString().padStart(2, "0");
}
