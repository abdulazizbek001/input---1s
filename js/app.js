const elInput = document.getElementById('input');
const elTitle = document.getElementById('title');

function elBtn() {
    setTimeout(() => {
        elTitle.textContent += elInput.value;

        window.localStorage.setItem('input file', elInput.value);
    }, 3000);
};