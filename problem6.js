function getNoteCount(amount){
    const fiveHundreds = Math.floor(amount / 500);
    let remainder = amount % 500;
    const oneHundreds = Math.floor(remainder / 100);
    remainder = remainder % 100;
    const fiftyes = Math.floor(remainder / 50);
    
    // Return the formatted template string
    return `500: ${fiveHundreds}, 100: ${oneHundreds}, 50: ${fiftyes}`;
}
console.log(getNoteCount(600))