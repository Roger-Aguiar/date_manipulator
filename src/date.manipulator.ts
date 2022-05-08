export class DateManipulator {
    constructor(private fullDate?: string, private sumYear?: number, private sumMonth?: number, private sumDay?: number){}

  getNewUnitedStatesDate(): string {
    let date = new Date();
    let month: string = date.getMonth() < 10 ? "0" + (date.getMonth() + 1).toString() : date.getMonth().toString();
    let day: string = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    let year: string = date.getFullYear().toString();
    let fullDate = `${month}-${day}-${year}`;

    return fullDate;
  }

  getNewBrazilianDate(): string {
    let date = new Date();
    let month: string = date.getMonth() < 10 ? "0" + (date.getMonth() + 1).toString() : date.getMonth().toString();
    let day: string = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    let year: string = date.getFullYear().toString();
    let fullDate = `${day}-${month}-${year}`;

    return fullDate;
  }

  addYearsToUnitedStatesDate(): string{
    let fullDateSplit = this.fullDate.split("-");    
    return `${fullDateSplit[0]}-${fullDateSplit[1]}-${(+fullDateSplit[2] + this.sumYear).toString()}`      
  }

  addMonthsToUnitedStatesDate(): string{
    let fullDateSplit = this.fullDate.split("-");
    
    let month: number = +fullDateSplit[0] + this.sumMonth;
    let numberOfDaysInMonth: number = new Date(2022, month, 0).getDate();
    let day: number = (+fullDateSplit[1] == 31) ? numberOfDaysInMonth : +fullDateSplit[1];
    let year: number = +fullDateSplit[2];

    let date: string = "";
      
    if (month > 12) {
      date = `${((month - 12) < 10 ? "0" + (month - 12).toString() : (month - 12).toString())}-${(day) < 10 ? "0" + day.toString() : day.toString()}-${(year + 1).toString()}`
    }else if (month < 12) {
      date = `${(month) < 10 ? "0" + month.toString() : month.toString()}-${(day) < 10 ? "0" + day.toString() : day.toString()}-${year.toString()}`
    }else if (month == 12) {
      date = `${(month) < 10 ? "0" + month.toString() : month.toString()}-${(day) < 10 ? "0" + day.toString() : day.toString()}-${year.toString()}`
    }
    return date;
  }

  addDaysToUnitedStatesDate(): string{
    let fullDateSplit = this.fullDate.split("-");
    return `${fullDateSplit[0]}-${(+fullDateSplit[1] + this.sumDay).toString()}-${fullDateSplit[2].toString()}`      
  }

  addYearsToBrazilianDate(): string{
    let fullDateSplit = this.fullDate.split("-");    
    return `${fullDateSplit[0]}-${fullDateSplit[1]}-${(+fullDateSplit[2] + this.sumYear).toString()}`      
  }
}

//This code gets the number of days in a specified month, the second parameter is the month, in this case, February
//console.log(new Date(2022, 2, 0).getDate())
