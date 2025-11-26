const switchThemeBtn = document.getElementById('switchThemeBtn');
const profilePic = document.getElementById('profilePic');


switchThemeBtn.onclick = function() {
    document.body.classList.toggle('darkMode');
    switchThemeBtn.classList.toggle('darkButton');
    profilePic.classList.toggle('darkProfile');
}