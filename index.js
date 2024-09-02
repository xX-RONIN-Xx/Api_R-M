"use strict";
document.addEventListener("DOMContentLoaded", () => {
    /**************comunicacion api ************** */
    //
    let url = "http://rickandmortyapi.com/api/character";
    async function mostrarData() {
        let res = await fetch(url)
        let data = await res.json();
        data.results.forEach(e => {
            document.querySelector("#table").innerHTML +=
                `<tr>
                <td> ${e.name} </td> <td> ${e.species} </td> <td class="id">  ${e.id} </td>`
        });

        let tr = document.querySelectorAll("td.id");
        tr.forEach(item => {
            item.addEventListener("mouseover", (e) => {
                document.querySelector("section.img img").classList.remove("oculto");
                let url2 = `${url}/${(e.target.innerHTML).trim()}`;
                cargarImg(url2);
            })
        })

        async function cargarImg(p) {
            let resp = await fetch(p)
            let dato = await resp.json();
            document.querySelector("section.img img").src = `${dato.image}`;
        }
    }
    mostrarData();
})

