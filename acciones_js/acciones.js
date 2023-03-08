//menu con secciones seleccionables visibles
const enlacesMenu = document.querySelectorAll('nav a');

enlacesMenu.forEach((enlace) => {
  enlace.addEventListener('click', (evento) => {
    evento.preventDefault(); // Previene la acción predeterminada del enlace
    
    const seccionId = enlace.getAttribute('href');
    const seccion = document.querySelector(seccionId);
    
    // Oculta todas las secciones y muestra la que corresponde al enlace clicado
    document.querySelectorAll('section').forEach((seccion) => {
      seccion.style.display = 'none';
    });
    
    seccion.style.display = 'block';
  });
});
//

//json
document.addEventListener('DOMContentLoaded', function() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      const name = `${user.name.first} ${user.name.last}`;
      const photo = user.picture.large;
      const location = `${user.location.city}, ${user.location.country}`;
      const email = `${user.email}`;
      const date = `${user.dob.date}`;
      const cell = `${user.cell}`;
      document.querySelector('#name').textContent = name;
      document.querySelector('#photo').setAttribute('src', photo);
      document.querySelector('#location').textContent = location;
      document.querySelector('#email').textContent = email;
      document.querySelector('#date').textContent = date;
      document.querySelector('#cell').textContent = cell;
    })
    .catch(error => console.error(error));
});
//

// carrusel 
let index = 0;
const images = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');

function changeImage() {
  images.forEach(image => {
    image.classList.remove('active');
  });
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  images[index].classList.add('active');
  dots[index].classList.add('active');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    changeImage();
  });
});

setInterval(() => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  changeImage();
}, 5000);
//



