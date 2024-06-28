document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuIcons = document.querySelectorAll('.toggle-menu');
    const closeMenuIcon = document.querySelector('.close-menu');
    const openMenu = document.querySelector('.open-menu');

    toggleMenuIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            if (openMenu.classList.contains('show')) {
                openMenu.classList.remove('show');
                setTimeout(() => {
                    openMenu.style.visibility = 'hidden';
                    openMenu.style.opacity = '0';
                }, 500);
            } else {
                openMenu.style.visibility = 'visible';
                openMenu.style.opacity = '1';
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
                openMenu.style.visibility = 'hidden';
                openMenu.style.opacity = '0';
            }, 500); 
        }
    });
});

