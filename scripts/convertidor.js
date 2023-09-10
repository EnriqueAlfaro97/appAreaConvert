// AREA
const optionslongitud1 = document.getElementById("options-longitud-1");
const optionslongitud2 = document.getElementById("options-longitud-2");
const formlongitud = document.getElementById('form-longitud');
let optionnumberlongitud = document.getElementById("option-number-longitud");
const displayResultlongitud = document.getElementById('displayResult-longitud');


formlongitud.addEventListener('submit', e => {
    e.preventDefault()
    const option1 = optionslongitud1.value
    const option2 = optionslongitud2.value
    let number = optionnumberlongitud.value
    const result = convertirResultado(option1, number, option2)
    displayResultlongitud.innerText = result
    displayResultlongitud.style.display = "block"
})

function convertirResultado(option1, number, option2) {
    /* Número inválido */
    if(!number) {

        return "Debes proporcionar un número válido."
    }
    /* Unidad de longitud */
    if(option1 == "ma") {
        // Dejar asi
        if(option2 == "ma") { 
            return `${number} manzanas`
        }
        if(option2 == "he"){
            return `${number*(0.698/1)} hectareas`
        }
        if(option2 == "ca"){
            return `${number*(1/64)} caballerias`
        }
        if(option2 == "ta"){
            return `${number*(16/1)} tareas`
        }
        if(option2 == "m"){
            return `${number*(6980/1)} metros\xB2`
        }
        if(option2 == "v"){
            return `${number*(10000/1)} varas\xB2`
        }
        if(option2 == "t"){
            return `${number*(0.698/1)} hectareas  => ${number*(1/64)} caballerias  => ${number*(16/1)} tareas  => ${number*(6980/1)} metros\xB2  => ${number*(10000/1)} varas\xB2`
        }
    }
    if(option1 == "he") {
        if(option2 == "ma") {
            return `${number*(1/0.698)} manzanas`
        }
        // Dejar asi
        if(option2 == "he"){
            return `${number} hectareas`
        }
        if(option2 == "ca"){
            return `${number*(1/45.12574)} caballerias`
        }
        if(option2 == "ta"){
            return `${number*(22.9226/1)} tareas`
        }
        if(option2 == "m"){
            return `${number*(10000/1)} metros\xB2`
        }
        if(option2 == "v"){
            return `${number*(14311.5072/1)} varas\xB2`
        }
        if(option2 == "t"){
            return `${number*(1/0.698)} manzanas  => ${number*(1/64)} caballerias  => ${number*(16/1)} tareas  => ${number*(6980/1)} metros\xB2  => ${number*(10000/1)} varas\xB2`
        }
    }
    if(option1 == "ca") {
        if(option2 == "ma") {
            return `${number*(64/1)} manzanas`
        }
        if(option2 == "he"){
            return `${number*(45.12574/1)} hectareas`
        }
        // Dejar asi
        if(option2 == "ca"){
            return `${number} caballerias`
        }
        if(option2 == "ta"){
            return `${number*(1024/1)} tareas`
        }
        if(option2 == "m"){
            return `${number*(451257.4/1)} metros\xB2`
        }
        if(option2 == "v"){
            return `${number*(640000/1)} varas\xB2`
        }
        if(option2 == "t"){
            return `${number*(0.698/1)} hectareas  => ${number*(64/1)} manzanas  => ${number*(16/1)} tareas  => ${number*(6980/1)} metros\xB2  => ${number*(10000/1)} varas\xB2`
        }
    }
    if(option1 == "ta") {
        if(option2 == "ma") {
            return `${number*(1/16)} manzanas`
        }
        if(option2 == "he"){
            return `${number*(1/22.9226)} hectareas`
        }
        if(option2 == "ca"){
            return `${number*(1/1024)} caballerias`
        }
        // Dejar asi
        if(option2 == "ta"){
            return `${number} tareas`
        }
        if(option2 == "m"){
            return `${number*(436.25/1)} metros\xB2`
        }
        if(option2 == "v"){
            return `${number*(625/1)} varas\xB2`
        }
        if(option2 == "t"){
            return `${number*(0.698/1)} hectareas  => ${number*(1/64)} caballerias  => ${number*(1/16)} manzanas  => ${number*(6980/1)} metros\xB2  => ${number*(10000/1)} varas\xB2`
        }
    }
    if(option1 == "m") {
        if(option2 == "ma") {
            return `${number*(1/6980)} manzanas`
        }
        if(option2 == "he"){
            return `${number*(1/10000)} hectareas`
        }
        if(option2 == "ca"){
            return `${number*(1/451257.4)} caballerias`
        }
        if(option2 == "ta"){
            return `${number*(1/436.25)} tareas`
        }
        // Dejar asi
        if(option2 == "m"){
            return `${number} metros\xB2`
        }
        if(option2 == "v"){
            return `${number*(1/0.64)} varas\xB2`
        }
        if(option2 == "t"){
            return `${number*(0.698/1)} hectareas  => ${number*(1/64)} caballerias  => ${number*(16/1)} tareas  => ${number*(1/6980)} manzanas  => ${number*(10000/1)} varas\xB2`
        }
    }
    if(option1 == "v") {
        if(option2 == "ma") {
            return `${number*(1/10000)} manzanas`
        }
        if(option2 == "he"){
            return `${number*(1/14311.5072)} hectareas`
        }
        if(option2 == "ca"){
            return `${number*(1/640000)} caballerias`
        }
        if(option2 == "ta"){
            return `${number*(1/625)} tareas`
        }
        if(option2 == "m"){
            return `${number*(0.64/1)} metros\xB2`
        }
        // Dejar asi
        if(option2 == "v"){
            return `${number} varas\xB2`
        }
        if(option2 == "t"){
            return `${number*(0.698/1)} hectareas  => ${number*(1/64)} caballerias  => ${number*(16/1)} tareas  => ${number*(6980/1)} metros\xB2  => ${number*(1/10000)} manzanas`
        }
    }
}

const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <h3></h3>
    `;
}

createFooter();