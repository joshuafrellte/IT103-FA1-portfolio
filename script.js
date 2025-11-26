const switchThemeBtn = document.getElementById('switchThemeBtn');
const body = document.body;

switchThemeBtn.onclick = function() {
    body.classList.toggle('darkMode');
}