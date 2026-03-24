function ouvrirModal(id) {
    document.getElementById(id).style.display = "block";
    modal.style.display = "flex";
}

function fermerModal() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => modal.style.display = "none");
}

window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
}
