var ipr = {
    "1": "viens de partir",
    "2": "viens d'avoir",
    "3": "vient d'arriver",
    "4": "venons de décoller",
    "5": "venez de tenir",
    "6": "viennent de parler"
}

var ipca = {
    "1": "ai bu",
    "2": "as eu",
    "3": "a connu",
    "4": "avons roulé",
    "5": "avez tenu",
    "6": "ont parlé"
}

var ipce = {
    "1": "suis parti",
    "2": "es tombé",
    "3": "est sorti",
    "4": "sommes passés" || "sommes passées",
    "5": "êtes venus" || "êtes venues",
    "6": "sont tournés" || "sont tournées"
}

var pr = {
    "1": "viens de manger",
    "2": "venons de prendre",
    "3": "viennent de regarder",
    "4": "vient d'entendre",
    "5": "vient de travailler",
    "6": "viens de téléphoner",
    "7": "venons d'aller",
    "8": "viennent de voir",
    "9": "venons découter",
    "10": "venez d'appeler"
}

var pca = {
    "1": "ai déjà mangé",
    "2": "ont bu",
    "3": "avez été",
    "4": "avons reçu",
    "5": "ai connu",
    "6": "as pris",
    "7": "a déjà vu",
    "8": "as mis",
    "9": "avons vu",
    "10": "a téléphoné"
}

var pce = {
    "1": "ne sont pas allées",
    "2": "est tombé",
    "3": "sont rentrés",
    "4": "est descendu",
    "5": "suis allé" || "suis allée",
    "6": "sont parties",
    "7": "est rentré",
    "8": "sommes venus" || "sommes venues",
    "9": "est restée",
    "10": "sont arrivées"
}

var pcf = {
    "1": "êtes allés",
    "2": "a fini",
    "3": "s'est levé",
    "4": "a regardé",
    "5": "a mangé",
    "6": "ont écrit",
    "7": "sont parties",
    "8": "ai fermé",
    "9": "avez reçu",
    "10": "a pris"
}

var spca = {
    "1": "2",
    "2": "1",
    "3": "2",
    "4": "1",
    "5": "2"
}

var spcf = {
    "1": "1",
    "2": "1",
    "3": "2",
    "4": "2",
    "5": "1"
}

var tpce = {
    "1": "est parti",
    "2": "sont venues",
    "3": "sommes arrivés",
    "4": "est tombée",
    "5": "sont rentrés"
}

var cpcf = {
    "1": true,
    "2": false,
    "3": true,
    "4": false,
    "5": false
}

var cpr = {
    "1": false,
    "2": true,
    "3": false,
    "4": true,
    "5": true
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let tries = 3

async function check(oef){
    let inputs = document.querySelectorAll(`#${oef} input`);
    let labels = document.querySelectorAll(`#${oef} label`);
    let select = document.querySelectorAll(`#${oef} select`);
    let scoreLabels = document.getElementById(`${oef}Score`);
    let triesLabels = document.getElementById(`${oef}Tries`);
    let score = 0
    let invuloef = ["ipr", "pr","ipca","pca","ipce","pce","tpce", "pcf"]
    let checkoef = ["cpcf", "cpr"]
    if(tries > 0){
        if(invuloef.includes(oef)){
            for(i in eval(`${oef}`)){
                if(inputs[i-1].value == eval(`${oef}`)[i]){
                    inputs[i-1].style.borderColor = "green"
                    score = score + 1
                }
                else{
                    inputs[i-1].style.borderColor = "#9E1A1A"
                }
            }
            scoreLabels.innerText = `score: ${score}/6`
            triesLabels.innerText = `kansen resterend: ${tries = tries - 1}/3`
        } else if(checkoef.includes(oef)){
            for(i in eval(`${oef}`)){
                if(inputs[i-1].checked == cpcf[i]){
                    labels[i-1].innerText = "correct";
                    labels[i-1].style.color = "green";
                } else{
                    labels[i-1].innerText = "Probeer opnieuw.";
                    labels[i-1].style.color = "#9E1A1A";
                }
            }
        } else{
            for(i in eval(`${oef}`)){
                if(select[i-1].value == eval(`${oef}`)[i]){
                    labels[i-1].innerText = "correct";
                    labels[i-1].style.color = "green";
                } else{
                    labels[i-1].innerText = "Probeer opnieuw.";
                    labels[i-1].style.color = "#9E1A1A";
                }
            }
        }
    }
    else{
        var error = document.createElement("div");
        error.classList.add("errorDiv")
        error.innerText = "Je kansen om deze oefening te maken zijn op."
        document.querySelector("body").appendChild(error);
        error.style.display = "block"
        await sleep(2000)
        error.style.display = "none"
    }
}