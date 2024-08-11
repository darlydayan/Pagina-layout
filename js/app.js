const link = document.querySelectorAll(".nav__link");
const input = document.querySelectorAll(".nav__input");
link.forEach(element => {
    Element.addEventListener("click", function(event) {
        if (input.checked) {
            input.checked = false;
        }
    });
});