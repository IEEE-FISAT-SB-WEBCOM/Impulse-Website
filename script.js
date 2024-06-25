document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuIcons = document.querySelectorAll('.toggle-menu');
    const closeMenuIcon = document.querySelector('.close-menu');
    const openMenu = document.querySelector('.open-menu');

    toggleMenuIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            if (openMenu.classList.contains('show')) {
                openMenu.classList.remove('show');
                setTimeout(() => {
                    openMenu.style.display = 'none';
                }, 500); 
            } else {
                openMenu.style.display = 'flex';
                setTimeout(() => {
                    openMenu.classList.add('show');
                }, 0); 
            }
        });
    });

    closeMenuIcon.addEventListener('click', function () {
        if (openMenu.classList.contains('show')) {
            openMenu.classList.remove('show');
            setTimeout(() => {
                openMenu.style.display = 'none';
            }, 500);
        }
    });
});
