function describeValue (str){
    const type = typeof str;
    const truthiness =  str ? 'truthy' : 'falsy';
return  `${type} | ${truthiness}`
}
console.log(describeValue("0"))