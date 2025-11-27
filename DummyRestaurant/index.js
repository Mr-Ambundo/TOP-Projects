var menu = document.getElementById('menu');
var umenu = document.getElementById('menu-toggle');
var closebtn = document.getElementById('close-btn');


umenu.addEventListener('click', () => {
    menu.style.visibility = 'visible';
    closebtn.style.visibility = 'visible';
}
)

closebtn.addEventListener('click', () => {
    menu.style.visibility = 'hidden';
    closebtn.style.visibility = 'hidden';
})