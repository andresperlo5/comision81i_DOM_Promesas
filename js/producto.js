const idArt = location.search.split('=')[1]
const divArticulo = document.getElementById('divArticulo')

fetch(`https://fakestoreapi.com/products/${idArt}`)
    .then(res => res.json())
    .then(articulo => divArticulo.innerHTML = `
            <div class="card my-3" style="width: 18rem;">
            <img src="${articulo.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${articulo.title}</h5>
                <p class="card-text">${articulo.description}</p>
                </div>
            </div>
            `)