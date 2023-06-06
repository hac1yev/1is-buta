const training_icon1 = document.querySelector('#training_icon1');
const training_icon2 = document.querySelector('#training_icon2');
const training_icon3 = document.querySelector('#training_icon3');
const training_icon4 = document.querySelector('#training_icon4');

const trending_nav_link1 = document.querySelector('.trending-nav-link1');
const trending_nav_link2 = document.querySelector('.trending-nav-link2');
const trending_nav_link3 = document.querySelector('.trending-nav-link3');
const trending_nav_link4 = document.querySelector('.trending-nav-link4');

// trending_nav_link1.addEventListener('click', () => {
//     if(trending_nav_link2.classList.contains('active') || trending_nav_link3.classList.contains('active') || trending_nav_link4.classList.contains('active')) {
//         training_icon1.src = '../images/companies-announces/companies-white.png';
//         training_icon2.src = '../images/companies-announces/create-announces-purple.png';
//         training_icon3.src = '../images/companies-announces/announces-purple.png';
//         training_icon4.src = '../images/companies-announces/namizedler-purple.png';
//     }
// });

// trending_nav_link2.addEventListener('click', () => {
//     if(trending_nav_link1.classList.contains('active') || trending_nav_link3.classList.contains('active') || trending_nav_link4.classList.contains('active')) {
//         training_icon1.src = '../images/companies-announces/companies-purple.png';
//         training_icon2.src = '../images/companies-announces/create-announces-white.png';
//         training_icon3.src = '../images/companies-announces/announces-purple.png';
//         training_icon4.src = '../images/companies-announces/namizedler-purple.png';
// } 
// });

// trending_nav_link3.addEventListener('click', () => {
//     if(trending_nav_link1.classList.contains('active') || trending_nav_link2.classList.contains('active') || trending_nav_link4.classList.contains('active')) {
//         training_icon1.src = '../images/companies-announces/companies-purple.png';
//         training_icon2.src = '../images/companies-announces/create-announces-purple.png';
//         training_icon3.src = '../images/companies-announces/announces-white.png';
//         training_icon4.src = '../images/companies-announces/namizedler-purple.png';
//     } 
// });

// trending_nav_link4.addEventListener('click', () => {
//     if(trending_nav_link1.classList.contains('active') || trending_nav_link3.classList.contains('active') || trending_nav_link2.classList.contains('active')) {
//         training_icon1.src = '../images/companies-announces/companies-purple.png';
//         training_icon2.src = '../images/companies-announces/create-announces-purple.png';
//         training_icon3.src = '../images/companies-announces/announces-purple.png';
//         training_icon4.src = '../images/companies-announces/namizedler-white.png';
//     } 
// });


if(trending_nav_link1.classList.contains('active')) {
    training_icon1.src = '../images/companies-announces/companies-white.png';
    training_icon2.src = '../images/companies-announces/create-announces-purple.png';
    training_icon3.src = '../images/companies-announces/announces-purple.png';
    training_icon4.src = '../images/companies-announces/namizedler-purple.png';
} 

if(trending_nav_link2.classList.contains('active')) {
    training_icon1.src = '../images/companies-announces/companies-purple.png';
    training_icon2.src = '../images/companies-announces/create-announces-white.png';
    training_icon3.src = '../images/companies-announces/announces-purple.png';
    training_icon4.src = '../images/companies-announces/namizedler-purple.png';
} 

if(trending_nav_link3.classList.contains('active')) {
    training_icon1.src = '../images/companies-announces/companies-purple.png';
    training_icon2.src = '../images/companies-announces/create-announces-purple.png';
    training_icon3.src = '../images/companies-announces/announces-white.png';
    training_icon4.src = '../images/companies-announces/namizedler-purple.png';
} 

if(trending_nav_link4.classList.contains('active')) {
    training_icon1.src = '../images/companies-announces/companies-purple.png';
    training_icon2.src = '../images/companies-announces/create-announces-purple.png';
    training_icon3.src = '../images/companies-announces/announces-purple.png';
    training_icon4.src = '../images/companies-announces/namizedler-white.png';
} 