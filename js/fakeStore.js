const divStore = document.getElementById('idDivStore')

const store = fetch('https://fakestoreapi.com/products') /* GET - Obtener */
    .then(res => res.json()) /* resolve */
    .then(res => divStore.innerHTML = res.map((articulo) => `
        <div class="card my-3" style="width: 18rem;">
        <img src="${articulo.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${articulo.title}</h5>
            <p class="card-text">${articulo.description}</p>
            <a href="./html/producto.html?id=${articulo.id}" class="btn btn-primary">Ver Mas...</a>
            </div>
        </div>
    `).join(''))
    .catch(err => console.log(err)) /* reject */



    /* GET, POST, PUT, PATCH y DELETE */
/* GET - Obtiene - Obtiene todos los articulos y el que obtiene 1 articulo en particular */
/* POST - Crear un nuevo articulo*/
/* PUT y PATCH - Editan */
/* Delete - Borrar */



    