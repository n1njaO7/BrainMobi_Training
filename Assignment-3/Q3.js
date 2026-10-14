function leapYear(year){
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }

    return false    
}


function totalNumberOfDays(days,month,year){

    if (
        !Number.isInteger(days) ||
        !Number.isInteger(month) ||
        !Number.isInteger(year) ||
        month < 1 ||
        month > 12 ||
        days < 1
    ) {
        return NaN;
    }

    let monthLength;
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: monthLength =31;
                 break;
        case 2 : monthLength = leapYear(year)?29:28;
                 break;
        case 4:
        case 6:
        case 9:
        case 11: monthLength = 30
                 break;
        default : return NaN;
    }

    if(days> monthLength){
        return NaN;
    }


    let totalDays = days;
    for (let m = 1 ; m < month ; m++)
    {        
        switch(m)
        {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                        totalDays = totalDays + 31;
                        break;
                
                case 2: 
                        const monthLength = leapYear(year)?29:28;
                        totalDays = totalDays + monthLength;
                        break;
                case 4 :
                case 6 :
                case 9 :
                case 11 :
                    totalDays = totalDays + 30;
                    break;
                default: return NaN;
        }
    }
    return totalDays;
    
}

console.log(totalNumberOfDays(1, 3, 2024));  // 61
console.log(totalNumberOfDays(1, 3, 2023));  // 60
console.log(totalNumberOfDays(31, 12, 2024)); // 366
console.log(totalNumberOfDays(31, 12, 2023)); // 365
console.log(totalNumberOfDays(29, 2, 2024));  // 60
console.log(totalNumberOfDays(29, 2, 2023));  // NaN
