//ordet som skal gjettes
hemmeligOrd = "kake";

//liste med bokstaver som er gjettet riktig
svar = ["_", "_", "_", "_"]

//antall liv
liv = 6;

//viser svar listen, og antall liv i html dokumentet
document.getElementById("antallLiv").innerHTML = liv;
document.getElementById("svar").innerHTML = svar;   


function sjekkBokstav() {
    bokstav = document.getElementById("gjettInput").value
    if (hemmeligOrd.includes(bokstav)){
        for (let i = 0; i < hemmeligOrd.length; i++){
            if (bokstav == hemmeligOrd[i]){
                svar[i] = bokstav;
                document.getElementById("svar").innerHTML = svar;
            }
        }
    }
    else{
        liv--;
        document.getElementById("antallLiv").innerHTML = liv;
    }
}
