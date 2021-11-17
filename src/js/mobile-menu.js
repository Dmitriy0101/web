const menuBtnRef = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
const mobileMenuClose = document.querySelector("[data-menu-close]");
const mobileMenuContent = document.querySelector("[ data-menu-content]");


function onCloseMenu() {
    menuBtnRef.classList.toggle('is-open');
    menu.classList.toggle("is-open");
    document.body.classList.toggle('modal-open');
}

function onEscKeyPress(e) {
    if (e.code === 'Escape') {
        onCloseMenu();
    }
}

if (menuBtnRef && menu && mobileMenuClose) {
    menuBtnRef.addEventListener("click", () => {
        onCloseMenu();
        window.addEventListener('keydown', onEscKeyPress);
    })

    mobileMenuClose.addEventListener("click", () => {
        onCloseMenu();
        window.removeEventListener('keydown', onEscKeyPress);
    })

    document.addEventListener('click', (e) => {
        if (e.target === menu) {
            onCloseMenu();
            window.removeEventListener('keydown', onEscKeyPress);
        }
    });
}