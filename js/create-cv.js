const training_icon1 = document.querySelector('#training_icon1');
const training_icon2 = document.querySelector('#training_icon2');

const trending_nav_link1 = document.querySelector('.trending-nav-link1');
const trending_nav_link2 = document.querySelector('.trending-nav-link2');

trending_nav_link1.addEventListener('click', () => {
    if(trending_nav_link2.classList.contains('active')) {
        if(document.body.classList.contains('dark')) {
            training_icon1.src = '../images/add-training/add-training-white.png';
            training_icon2.src = '../images/add-training/training-list-purple.png';

        }else {
            training_icon1.src = '../images/add-training/add-training-white.png';
            training_icon2.src = '../images/add-training/training-list-purple.png';
        }
    }
});

trending_nav_link2.addEventListener('click', () => {
    if(trending_nav_link1.classList.contains('active')) {
        if(document.body.classList.contains('dark')) {
            training_icon2.src = '../images/add-training/training-list-white.png';
            training_icon1.src = '../images/add-training/add-training-purple.png';
        }else {
            training_icon2.src = '../images/add-training/training-list-white.png';
            training_icon1.src = '../images/add-training/add-training-purple.png';
        }
    } 
});

