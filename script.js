// Získání referencí na vstupní pole a kontejner pro seznam úkolů
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// Funkce pro přidání nové úlohy do seznamu
function AddTask(){
    // Kontrola, zda uživatel něco napsal
    if (inputBox.value ===''){
        alert("You must write something!") // Pokud ne, zobrazí se upozornění
    }
    else {
        // Vytvoření nového <li> prvku s textem z inputu
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Přidání <span> prvku s křížkem (×) pro možnost odstranění úkolu
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode pro ×
        li.appendChild(span);
    }
    // Vyprázdnění inputu po přidání úkolu
    inputBox.value = "";
    // Uložení aktuálního stavu do localStorage
    saveData();
}
// Event listener pro klikání na seznam úkolů
listContainer.addEventListener("click", function (e){
    if (e.target.tagName === "LI"){
        // Pokud klikneme na <li>, přepíná se třída "checked" (např. pro přeškrtnutí)
       e.target.classList.toggle("checked");
       saveData();
    }
    else if (e.target.tagName === "SPAN"){
        // Pokud klikneme na křížek, odstraní se celý prvek <li>
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// Funkce pro uložení HTML obsahu seznamu do localStorage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// Funkce, která při načtení stránky zobrazí dříve uložené úkoly
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
// Načtení uložených úkolů při načtení skriptu
showTask();
