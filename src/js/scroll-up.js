// <------ Scroll-up START ------>
const scrollUp = document.querySelector('.scroll-up');
const scrollUpButton = scrollUp.querySelector('.scroll-up__button');

if (scrollUpButton) {
    scrollUpButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: "smooth"});
    });
}
// <------ Scroll-up END ------>