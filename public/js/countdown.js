const countdown = document.getElementById('countdown');
const eventDate = new Date('2025-12-03T09:00:00'); // Set your event date/time

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;
  if (diff <= 0) {
    countdown.textContent = "The conference has started!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);