function getDayType(day){
    switch(day){

        case "Sunday":
            return "working day";
            break;
        case "Monday":
            return "working day";
break;
        case "Tuesday":
            return "working day";
break;
        case "Wednesday":
return "working day";
break;
        case "Thursday":
return "working day";
break;
        case "Friday":
            return "Weekend";
            break;
        case "Saturday":
            return "Weekend";
            break;
       
        
            
        default:
            return "Invalid day";
    }
}
console.log(getDayType("ll"))