

let aEtudier = document.getElementById("aEtudier")
let fini = document.getElementById("fini")

document.getElementById("ajouter").addEventListener("click", function() {

let item = document.getElementById("item").value

console.log("fonctionne")
console.log(item)

document.getElementById("title1").style.visibility = "visible"
document.getElementById("pretexte").style.visibility = "hidden"
aEtudier.insertAdjacentHTML
    ("afterbegin",`<li>${item}
        <i class="far fa-check-square" id=${item} onClick = marquerLu(this.id)></i>
        <a href=${lien} target="blank"><i class="fas fa-link"></i></a>
        <i class="fas fa-trash" id=${item} onClick = supprimer(this.id) ></i>
                    </li>`)

document.getElementById('item').value=""

})

function supprimer(id) {
    console.log("element supprimé")
    document.getElementById(id).parentElement.outerHTML=""
}
function marquerLu(id) {
    supprimer(id)
    fini.insertAdjacentHTML("afterbegin",`<li>${id}
    <a href=${lien} target="blank"><i class="fas fa-link"></i></a>
                </li>`)
    document.getElementById("title2").style.visibility = "visible"            
}