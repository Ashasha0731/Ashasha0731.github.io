document.addEventListener("DOMContentLoaded", function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('.nav');

            menuToggle.addEventListener('click', () => {
                nav.classList.toggle('active');
            });
        });

function updateLogo() {
    const logo = document.getElementById('logo');
    if (window.innerWidth <= 768) {
        logo.src = './image/logoB.jpg';
    } else {
        logo.src = './image/logoA.png';
    }
}

// 初次載入
updateLogo();

// 畫面尺寸改變時
window.addEventListener('resize', updateLogo);
