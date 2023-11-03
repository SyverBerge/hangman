//ordet som skal gjettes
let hemmeligOrd = "kake";

//liste med bokstaver som er gjettet riktig
let svar = ["_", "_", "_", "_"]

//antall liv
let liv = 6;

//viser svar listen, og antall liv i html dokumentet


function sjekkBokstav() {
    let bokstav = document.getElementById("gjettInput").value
    for (var i = 0; i < hemmeligOrd.length; i++){
        if (bokstav == hemmeligOrd[i]){
            svar[i] = bokstav;
        }
    
    }
    
    document.getElementById("antallLiv").innerHTML = liv;
    document.getElementById("svar").innerHTML = svar;   
    }
