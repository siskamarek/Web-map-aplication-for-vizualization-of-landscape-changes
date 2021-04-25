//open menu

const menuDiv = document.getElementById("layer-menu");

export function toggleMenu() {
  document
    .getElementById("close-menu-icon")
    .addEventListener("click", function () {
      menuDiv.classList.remove("menu-toggled");
    });

  document
    .getElementById("open-menu-icon")
    .addEventListener("click", function () {
        menuDiv.classList.add("menu-toggled");
    });
}
