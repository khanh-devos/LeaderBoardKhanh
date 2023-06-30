const okAdded = () => {
  const refreshIcon = document.querySelector('#refreshIcon');
  refreshIcon.classList.toggle('okAdded');
  refreshIcon.textContent = 'done';
  setTimeout(() => {
    refreshIcon.textContent = 'autorenew';
    refreshIcon.classList.toggle('okAdded');
  }, 1000);
};

export default okAdded;