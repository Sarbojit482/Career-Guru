// JavaScript to toggle profile menu visibility
document.querySelector('.profile-icon').addEventListener('click', function () {
    const profileMenu = document.getElementById('profileMenu');
    if (profileMenu.style.right === '0px') {
        profileMenu.style.right = '-250px';
    } else {
        profileMenu.style.right = '0px';
    }
});
