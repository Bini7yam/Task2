"use strict";
const uL = document.querySelector('ul');
const inputField = document.querySelector('input#input');
const addButton = document.querySelector('button');
function clicked(event) {
    var _a;
    const target = event.target;
    if (target && target.classList.contains('check')) {
        const textContent = (_a = target === null || target === void 0 ? void 0 : target.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.content');
        console.log(textContent);
        if (target.dataset.e === '0') {
            target.dataset.e = '1';
            textContent ? textContent.style.textDecoration = 'line-through' : 0;
            target.style.backgroundImage = 'url(rg.avif)';
        }
        else {
            textContent ? textContent.style.textDecoration = 'none' : 0;
            target.dataset.e = '0';
            target.style.backgroundImage = '';
        }
    }
}
uL.addEventListener('click', clicked);
uL.addEventListener('click', (ev) => {
    var _a;
    if (ev.target) {
        const target = ev.target;
        if (target.classList.contains('terminate')) {
            (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        }
    }
});
function add() {
    const textContent = inputField.value.trim();
    if (textContent) {
        uL.innerHTML += '<li class=\"task\"><span class=\"check\" data-e=\"0\"></span><span class="content">' + textContent + '</span><span class="terminate">x</span></li>';
    }
    else
        alert('No value is inputed');
    inputField.value = '';
    inputField.blur();
}
inputField.addEventListener('keydown', (ev) => {
    console.log(ev.key);
    if (ev.key === 'Enter') {
        add();
    }
});
addButton.addEventListener('click', add);
//# sourceMappingURL=script.js.map