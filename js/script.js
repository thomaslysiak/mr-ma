// script.js — Merci Mr Ma
 
const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
                'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
 
const now = new Date();
 
document.querySelector('.calendar-header span').textContent = days[now.getDay()];
document.querySelector('.calendar-body span').textContent = now.getDate();
document.querySelector('.calendar-month').textContent = months[now.getMonth()];
 
