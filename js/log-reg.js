const login_form = document.querySelector('#login_form');
const register_form = document.querySelector('#register_form');
const log_tab = document.querySelector('#log_tab'); 
const reg_tab = document.querySelector('#reg_tab'); 

reg_tab.addEventListener('click', () => {
    login_form.style.display = 'none';
    register_form.style.display = 'flex';
    reg_tab.classList.add('active');
    log_tab.classList.remove('active');
});

log_tab.addEventListener('click', () => {
    register_form.style.display = 'none';
    login_form.style.display = 'flex';
    reg_tab.classList.remove('active');
    log_tab.classList.add('active');
});
