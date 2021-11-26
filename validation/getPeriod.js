function getPeriod(ndate,rdate){
    let period = 0
    if (rdate.getFullYear() === ndate.getFullYear()) {
        if (rdate.getMonth() === ndate.getMonth()) {
            if (rdate.getDate() === ndate.getDate()) {
                return new Error("Same Date")
            }
            else {
                return period += Number(rdate.getDate()) - Number(ndate.getDate())
            }
        }
        else if(rdate.getMonth()<ndate.getMonth()) return new Error("month is greater");
        else {
            period += (Number(rdate.getMonth()) - Number(ndate.getMonth()))
            if (rdate.getDate() === ndate.getDate()) {
                return "same date change the date"
            }
            else if(rdate.getDate()<ndate.getDate()) return new Error("Date is greater");
            else {
                period += Number(rdate.getDate()) - Number(ndate.getDate())
            }
        }
    }
    if(rdate.getFullYear()<ndate.getFullYear()) return new Error("year is greater");
    else {
        period += (Number(rdate.getFullYear()) - Number(ndate.getFullYear())) * 365
        if (rdate.getMonth() === ndate.getMonth()) {
            if (rdate.getDate() === ndate.getDate()) {
                return "same date change the date"
            }
            else {
                period += Number(rdate.getDate()) - Number(ndate.getDate())
            }
        }
        else {
            period += (Number(rdate.getMonth()) - Number(ndate.getMonth()))
            if (rdate.getDate() === ndate.getDate()) {
                return "same date change the date"
            }
            else {
                period += Number(rdate.getDate()) - Number(ndate.getDate())
            }
        }
    }
    return period;
}

module.exports = getPeriod;