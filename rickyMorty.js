document.addEventListener("DOMContentLoaded", function () {
    // Elemento donde se mostrarán los datos
    const contentContainer = document.getElementById("content");

    // Endpoint de la API de Rick and Morty para obtener la lista de personajes
    const apiUrl = "https://rickandmortyapi.com/api/character/";

    // Realizar solicitud Fetch a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Verificar si la solicitud fue exitosa
            if (data.error) {
                contentContainer.innerHTML = `<p>Error al cargar datos: ${data.error}</p>`;
            } else {
                // Mostrar los datos en la interfaz
                displayCharacters(data.results);
            }
        })
        .catch(error => {
            contentContainer.innerHTML = `<p>Error al cargar datos: ${error.message}</p>`;
        });

    // Función para mostrar los personajes en la interfaz
    function displayCharacters(characters) {
        // Limpiar el contenedor antes de agregar nuevos elementos
        contentContainer.innerHTML = "";

        // Crear elementos HTML para cada personaje
        characters.forEach(character => {
            const characterCard = document.createElement("div");
            characterCard.className = "card";
            characterCard.innerHTML = `
                <img src="${character.image}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">Especie: ${character.species}</p>
                    <p class="card-text">Estado: ${character.status}</p>
                </div>
            `;
            contentContainer.appendChild(characterCard);
        });
    }
});
