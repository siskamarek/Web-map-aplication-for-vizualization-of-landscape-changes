// Open or close menu
document.addEventListener('toggleMenu', () => {
  const menuDiv = document.getElementById('layer-menu');
  if (menuDiv.classList.contains('menu-toggled')) {
    menuDiv.classList.remove('menu-toggled');
    return;
  }

  menuDiv.classList.add('menu-toggled');
});

export function toggleMenu() {
  document
    .getElementById("close-menu-icon")
    .addEventListener("click", () => {
      document.dispatchEvent(new Event('toggleMenu'));
    });

  document
    .getElementById("open-menu-icon")
    .addEventListener("click", () => {
      document.dispatchEvent(new Event('toggleMenu'));
    });
}
