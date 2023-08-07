let oddCapitalize = (str) => {
    let i = 0;
    let newStr = ""
    while (i < str.length){
        if (i % 2 == 0){
            newStr += str[i];
        }
        else{
            newStr += str[i].toUpperCase();
        }
        i += 1;
    }
    return newStr;
}

let evenCapitalize = (str) => {
    let i = 0;
    let newStr = ""
    while (i < str.length){
        if (i % 2 != 0){
            newStr += str[i];
        }
        else{
            newStr += str[i].toUpperCase();
        }
        i += 1;
    }
    return newStr;
}

const SECRET = 2.5678

export { oddCapitalize, evenCapitalize }