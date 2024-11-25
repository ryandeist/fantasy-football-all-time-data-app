// hamburger menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

// tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const targetedPlayerInfo = tab.dataset.target; 
        // console.log(targetedPlayerInfo);
        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === targetedPlayerInfo) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            };
        });
    });
});

// edit coach modal
const editCoachButton = document.querySelector('#edit-coach');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

editCoachButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});
