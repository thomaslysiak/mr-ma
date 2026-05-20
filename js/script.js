// script.js — Merci Mr Ma

// Met à jour automatiquement le jour et la date affichés dans le calendrier
const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

const now = new Date();
const dayName = days[now.getDay()];
const dayNumber = now.getDate();

document.querySelector('.calendar-header span').textContent = dayName;
document.querySelector('.calendar-body span').textContent = dayNumber;
