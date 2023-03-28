/*
function func() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + document.getElementById("pokeInput").value);

    xhr.onload = () => {
        data = JSON.parse(xhr.responseText);

        document.getElementById("pokeImage").setAttribute("src", data.sprites.front_default);

        if (xhr.status == 200) console.log(data.name);
    };

    xhr.onerror = () => console.log("Network Error!");
    xhr.send();
}
*/

async function displayPokemon() {

    let img = document.getElementById("pokeImage");
    try {
        await fetch("https://pokeapi.co/api/v2/pokemon/" + document.getElementById("pokeInput").value)
            .then(response => {
                if (response.ok) return response.json();
                else new Error("Pokemon or network not found.");
            })
            .then(pokemon => img.setAttribute("src", pokemon.sprites.front_default))
        }
    catch {
        img.setAttribute("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjuststickers.in%2Fwp-content%2Fuploads%2F2016%2F12%2F404-error-not-found.png&f=1&nofb=1&ipt=02d593e586a171bf6f68f94522cf25412e90267f6705fb8a3d05a833b26cbcb3&ipo=images")
    }
}

let pokeWeight = 0.0;

async function addPokeWeight() {
    try {
        await fetch("https://pokeapi.co/api/v2/pokemon/" + document.getElementById("pokeInputWeight").value)
            .then(response => {
                if (response.ok) return response.json();
                else new Error("Pokemon or network not found.");
            })
            .then(pokemon => {
                pokeWeight = pokeWeight + pokemon.weight;
                document.getElementById("totalWeight").innerText = (pokeWeight / 10) + "kg";
            })
    }   
    catch {
        document.getElementById("totalWeight").innerText = "ERROR!";
    }
}