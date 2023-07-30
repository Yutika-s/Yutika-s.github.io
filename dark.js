var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
var darkText = document.getElementById('text');
var logo = document.getElementById('logo')
var nightBackground = document.getElementById('gradient-background')
darkMode.addEventListener('click',function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
    darkText.classList.toggle('night');
    logo.classList.toggle('night');
    nightBackground.classList.toggle('night')
})