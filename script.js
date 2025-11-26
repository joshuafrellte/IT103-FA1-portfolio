const switchThemeBtn = document.getElementById('switchThemeBtn');
const profilePic = document.getElementById('profilePic');
const images = document.querySelectorAll('section img');
const texts = document.querySelectorAll('*');

switchThemeBtn.onclick = function() {
    document.body.classList.toggle('darkMode');
    switchThemeBtn.classList.toggle('darkButton');
    profilePic.classList.toggle('darkProfile');
    images.forEach(image => {
        image.classList.toggle('darkImages');
    })
    texts.forEach(text => {
        text.classList.toggle('darkText');
    })
}