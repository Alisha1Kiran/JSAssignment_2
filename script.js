

let convertString = (val) => {
    let newString;
    let conctString = "";
    for(let i=0; i< val.length; i++){
     newString = i+val[i];
     conctString = conctString + newString
    }
    return conctString;
}

let value = prompt("Enter the string : ");
console.log(convertString(value));