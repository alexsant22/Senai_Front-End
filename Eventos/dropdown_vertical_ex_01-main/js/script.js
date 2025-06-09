function inicializar() {
    let dropdownBtn = document.querySelector('.btnDropdown');
    let dropdownMenu = document.querySelector('.menuDropdown');

    if ((dropdownBtn instanceof HTMLButtonElement) &&
        (dropdownMenu instanceof HTMLDivElement)) {
            dropdownBtn.addEventListener('click', (evento) => {
                dropdownMenu.classList.toggle('exibir');
                evento.stopPropagation();
            });

            document.addEventListener('click', (evento) => {
                fecharDropdown(evento, dropdownBtn, dropdownMenu);
            });
        }
}

function fecharDropdown(evento, dropdownBtn, dropdownMenu) {
    let menuDropdown = document.querySelector('.menuDropdown');

    if (!evento.target.matches('.btnDropdown')) {
        dropdownMenu.classList.remove('exibir');
        dropdownBtn.classList.remove('destaque');

        for(let i = 0; menuDropdown?.clientHeight; i++) {
            let itemMenuDropdown = menuDropdown[i];

            if (itemMenuDropdown.classList.contains('exibir')) {
                itemMenuDropdown.classList.remove('exibir');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', inicializar);