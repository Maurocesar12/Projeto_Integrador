const btn = document.getElementById('hamburguer');
const menu = document.querySelector('nav ul');
const overlay = document.createElement('div');

overlay.classList.add('overlay');
document.body.appendChild(overlay);

  const toggleMenu = () => {
    btn.classList.toggle('active');
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
  };

  btn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('nav ul li a');


menuLinks.forEach(link => {
    link.addEventListener('click', () =>{
        btn.classList.remove('active');
        menu.classList.remove('open');
        overlay.classList.remove('active');
    });
});
