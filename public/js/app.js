// hamburger menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

// sort table
// function sortTable(n) {
//     let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//     table = document.getElementById('coach-table');
//     switching = true;
//     dir = 'asc';
//     while (switching) {
//         switching = false;
//         rows = table.rows;
//         for (i = 1; i < (rows.length - 1); i++) {
//             shouldSwitch = false;
//             x = rows[i].getElementsbyTagName('td')[n];
//             y = rows[i + 1].getElementsbyTagName('td')[n];
//             if (dir === 'asc') {
//                 if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//                     shouldSwitch = true;
//                     break;
//                 }
//             } else if (dir === 'desc') {
//                 if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//                     shouldSwitch = true;
//                     break;
//                 }
//             }
//         }
//         if (shouldSwitch) {
//             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//             switching = true;
//             switchcount++;
//         } else {
//             if (switchcount === 0 && dir === 'asc') {
//                 dir = 'desc';
//                 switching = true;
//             }
//         }
//     }
// }

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