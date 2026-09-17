function validateUsername (username) {
    if(username.length < 4){
        return "Too short";
    } 
    if(username.includes(" ")){
        return "No spaces allowed";
    }
    if(username.toLowerCase().includes("admin")){
        return "Username cannot contain 'admin'";
    }
    return "Available"
}
console.log(validateUsername ("aser1234"))