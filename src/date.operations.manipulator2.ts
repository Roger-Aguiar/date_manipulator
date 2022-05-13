export class DateManipulator {
  private characters: any = /[\s-./ ,]+/;

  constructor(
    private usa?: boolean, private br?: boolean, private fullDate?: string, private sumYear?: number, private sumMonth?: number, private sumDay?: number){}

  getNewDate(): string {
    let date = new Date();
    let month: string = date.getMonth() < 10 ? "0" + (date.getMonth() + 1).toString() : date.getMonth().toString();
    let day: string = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    let year: string = date.getFullYear().toString();
    let fullDate: string = this.usa == true?  `${month}-${day}-${year}` : `${day}-${month}-${year}`;
    return fullDate;
  }
  
  addYearsToDate(): string{    
    let fullDateSplit = this.fullDate.split(this.characters);
    return `${fullDateSplit[0]}-${fullDateSplit[1]}-${(+fullDateSplit[2] + this.sumYear).toString()}`      
  }

  addMonthsToDate(): string{
    let fullDateSplit = this.fullDate.split(this.characters);
    
    let month: number;
    let numberOfDaysInMonth: number;
    let day: number;
    let year: number;
    let date: string = "";

    if (this.usa == true) {
      month = +fullDateSplit[0] + this.sumMonth;
      numberOfDaysInMonth = new Date(+fullDateSplit[2], month, 0).getDate();
      day = (+fullDateSplit[1] == 31) ? numberOfDaysInMonth : +fullDateSplit[1];
      year = +fullDateSplit[2];
    } else {
      month = +fullDateSplit[1] + this.sumMonth;
      numberOfDaysInMonth = new Date(+fullDateSplit[2], month, 0).getDate();
      day = (+fullDateSplit[0] == 31) ? numberOfDaysInMonth : +fullDateSplit[0];
      year = +fullDateSplit[2];
    }
      
    if (month > 12) {
      date = this.usa == true ? `${((month - 12) < 10 ? "0" + (month - 12).toString() : (month - 12).toString())}-${(day) < 10 ? "0" + day.toString() : day.toString()}-${(year + 1).toString()}` : 
      `${(day) < 10 ? "0" + day.toString() : day.toString()}-${((month - 12) < 10 ? "0" + (month - 12).toString() : (month - 12).toString())}-${(year + 1).toString()}`
    }else if (month < 12) {
      date = this.usa == true ? `${(month) < 10 ? "0" + month.toString() : month.toString()}-${(day) < 10 ? "0" + day.toString() : day.toString()}-${year.toString()}` :
      `${(day) < 10 ? "0" + day.toString() : day.toString()}-${(month) < 10 ? "0" + month.toString() : month.toString()}-${year.toString()}`
    }else if (month == 12) {
      date = this.usa == true ? `${(month) < 10 ? "0" + month.toString() : month.toString()}-${(day) < 10 ? "0" + day.toString() : day.toString()}-${year.toString()}` : 
      `${(day) < 10 ? "0" + day.toString() : day.toString()}-${(month) < 10 ? "0" + month.toString() : month.toString()}-${year.toString()}`
    }
    return date;
  }

  addDaysToDate(): string{
    let fullDateSplit = this.fullDate.split(this.characters);
    let month: number;
    let numberOfDaysInMonth: number;
    let day: number;
    let year: number;
    let date: string = "";

    if (this.usa == true) {           
      numberOfDaysInMonth = new Date(+fullDateSplit[2], +fullDateSplit[0], 0).getDate();
      month = +fullDateSplit[1] + this.sumDay > numberOfDaysInMonth ? +fullDateSplit[0] + 1 : +fullDateSplit[0];
      year = month > 12 ? +fullDateSplit[2] + 1 : +fullDateSplit[2];
      month = month > 12 ? month - 12 : month;
      day = +fullDateSplit[1] + this.sumDay > numberOfDaysInMonth ? (+fullDateSplit[1] + this.sumDay) - numberOfDaysInMonth : +fullDateSplit[1] + this.sumDay;
      date = `${month < 10 ? "0" + month.toString() : month.toString()}-${day < 10 ? "0" + day.toString() : day.toString()}-${year}`;
    } else {
      numberOfDaysInMonth = new Date(+fullDateSplit[2], +fullDateSplit[1], 0).getDate();
      month = +fullDateSplit[0] + this.sumDay > numberOfDaysInMonth ? +fullDateSplit[1] + 1 : +fullDateSplit[1];
      year = month > 12 ? +fullDateSplit[2] + 1 : +fullDateSplit[2];
      month = month > 12 ? month - 12 : month;
      day = +fullDateSplit[0] + this.sumDay > numberOfDaysInMonth ? (+fullDateSplit[0] + this.sumDay) - numberOfDaysInMonth : +fullDateSplit[0] + this.sumDay;
      date = `${day < 10 ? "0" + day.toString() : day.toString()}-${month < 10 ? "0" + month.toString() : month.toString()}-${year}`;
    }    
    return date;
  }
}
