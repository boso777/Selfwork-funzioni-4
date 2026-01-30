// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Primo step: eliminare gli spazi e i segni di punteggiatura:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

// Esempio:
// Input: “i topi non avevano nipoti”
// Output: true



function palindromi(str){

    let str_nospace = str.replace(/\W/g, "").toLowerCase();
    let arr1 = str_nospace.split(``).reverse().join(``);
    if(arr1 != str_nospace){
        return false;
    }else{
        return true;
    }

}


let stringa = `i topi non avevano nipoti` ;

let check = palindromi(stringa);

console.log(check);

