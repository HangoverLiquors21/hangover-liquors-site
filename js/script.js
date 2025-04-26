
const chatBtn = document.getElementById('chatBtn');
const chatPopup = document.getElementById('chatPopup');
chatBtn.addEventListener('click', () => {
  chatPopup.classList.toggle('hidden');
});
