console.log("Switch-case practice");
let day = 3;
let dayname;
switch (day) {
    case 1:
        dayname = "Monday";
        break;
        case 2:
            dayname = "Tuesday";
            break;
            case 3:
                dayname = "Wednesday";
                break;
                case 4:
                    dayname = "Thursday";
                    break;
                    case 5:
                        dayname = "Friday";
                        break;
                        case 6:
                            dayname = "Saturday";
                            break;
                            case 7:
                                dayname = "Sunday";
                                break;
                                default:
                                    dayname = "Invalid day";
                                    break;
}

console.log(dayname);

// search colour name using switch case
let color = "red";
switch (color) {
    case "pink":
        console.log("Color is pink");
        break;
        case "blue":
            console.log("Color is blue");
            break;
            case "red":
                console.log("Color is red");
                break;
                case "green":
                    console.log("Color is green");
                    break;
                    default:
                        console.log("Color not found");
                        break;
}