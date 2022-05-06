export class DateManipulator {
    constructor(private fullDate?: string, private sumYear?: number, private sumMonth?: number, private sumDay?: number){}

  getNewUnitedStatesDate(): string {
    let date = new Date();
    let month: string =
      date.getMonth() < 10
        ? "0" + (date.getMonth() + 1).toString()
        : date.getMonth().toString();
    let day: string =
      date.getDate() < 10
        ? "0" + date.getDate().toString()
        : date.getDate().toString();
    let year: string = date.getFullYear().toString();
    let fullDate = `${month}-${day}-${year}`;

    return fullDate;
  }

  getNewBrazilianDate(): string {
    let date = new Date();
    let month: string =
      date.getMonth() < 10
        ? "0" + (date.getMonth() + 1).toString()
        : date.getMonth().toString();
    let day: string =
      date.getDate() < 10
        ? "0" + date.getDate().toString()
        : date.getDate().toString();
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
    return `${(+fullDateSplit[0] + this.sumMonth).toString()}-${fullDateSplit[1]}-${fullDateSplit[2].toString()}`      
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
