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

function check(oef){
    var inputs = document.querySelectorAll(`#${oef} input`);
    switch(oef){
        case "ipr":
            for(i in ipr){
                if(inputs[i-1].value == ipr[i]){
                    inputs[i-1].style.borderColor = "green"
                }
                else{
                    inputs[i-1].style.borderColor = "#9E1A1A"
                }
            }
            break;
        case "ipca":
            for(i in ipca){
                if(inputs[i-1].value == ipca[i]){
                    inputs[i-1].style.borderColor = "green"
                }
                else{
                    inputs[i-1].style.borderColor = "#9E1A1A"
                }
            }
            break;
        case "ipce":
            for(i in ipce){
                if(inputs[i-1].value == ipce[i]){
                    inputs[i-1].style.borderColor = "green"
                }
                else{
                    inputs[i-1].style.borderColor = "#9E1A1A"
                }
            }
            break;
        case "pr":
            for(i in pr){
                if(inputs[i-1].value == pr[i]){
                    inputs[i-1].style.borderColor = "green"
                }
                else{
                    inputs[i-1].style.borderColor = "#9E1A1A"
                }
            }
            break;
        case "pca":
            for(i in pca){
                if(inputs[i-1].value == pca[i]){
                    inputs[i-1].style.borderColor = "green"
                }
                else{
                    inputs[i-1].style.borderColor = "#9E1A1A"
                }
            }
            break;
        case "pce":
            for(i in pce){
                if(inputs[i-1].value == pce[i]){
                    inputs[i-1].style.borderColor = "green"
                }
                else{
                    inputs[i-1].style.borderColor = "#9E1A1A"
                }
            }
            break;
        case "pcf":
            for(i in pcf){
                if(inputs[i-1].value == pcf[i]){
                    inputs[i-1].style.borderColor = "green"
                }
                else{
                    inputs[i-1].style.borderColor = "#9E1A1A"
                }
            }
            break;
        // case "spca":
        //     for(i in spca){
        //         if(inputs[i-1].value == spca[i]){
        //             inputs[i-1].style.borderColor = "green"
        //         }
        //         else{
        //             inputs[i-1].style.borderColor = "#9E1A1A"
        //         }
        //     }
        //     break;
        // case "spcf":
        //     for(i in spcf){
        //         if(inputs[i-1].value == spcf[i]){
        //             inputs[i-1].style.borderColor = "green"
        //         }
        //         else{
        //             inputs[i-1].style.borderColor = "#9E1A1A"
        //         }
        //     }
        //     break;
        case "tpce":
            for(i in tpce){
                if(inputs[i-1].value == tpce[i]){
                    inputs[i-1].style.borderColor = "green"
                }
                else{
                    inputs[i-1].style.borderColor = "#9E1A1A"
                }
            }
            break;
    }
}