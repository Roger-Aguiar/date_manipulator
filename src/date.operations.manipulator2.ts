import { Parameters } from "./parameters";

export class DateManipulator {
  public parameters: Parameters = new Parameters();
  private characters: any = /[\s-./ ,]+/;
  private month: string;
  private day: string;
  private year: string;
  private fullDate: string;
  private date = new Date();
  private numberOfDaysInMonth: number;
  private outputDate: string = "";
  private fullDateSplit: string[];

  constructor(){}
      
  getNewDate(): string {
    this.month = this.date.getMonth() < 9 ? "0" + (this.date.getMonth() + 1).toString() : (this.date.getMonth() + 1).toString();
    this.day = this.date.getDate() < 10 ? "0" + this.date.getDate().toString() : this.date.getDate().toString();
    this.year = this.date.getFullYear().toString();
    this.fullDate = this.parameters.usa == true?  `${this.year}-${this.month}-${this.day}` : `${this.day}-${this.month}-${this.year}`;
    return this.fullDate;
  }

  addYearsToDate(): string{    
    this.fullDateSplit = this.parameters.fullDate.split(this.characters);
    return this.parameters.usa == true ? `${(+this.fullDateSplit[0] + this.parameters.sumYear).toString()}-${this.fullDateSplit[1]}-${this.fullDateSplit[2]}` :
                                         `${this.fullDateSplit[0]}-${this.fullDateSplit[1]}-${(+this.fullDateSplit[2] + this.parameters.sumYear).toString()}`;     
  }

  addMonthsToDate(): string{
    this.fullDateSplit = this.parameters.fullDate.split(this.characters);     
    
    if (this.parameters.usa == true) {
      this.month = (+this.fullDateSplit[1] + this.parameters.sumMonth).toString();
      this.numberOfDaysInMonth = new Date(+this.fullDateSplit[0], +this.month, 0).getDate();
      this.day = ((+this.fullDateSplit[2] == 31) ? this.numberOfDaysInMonth : +this.fullDateSplit[2]).toString();
      this.year = this.fullDateSplit[0];
    } else {
      this.month = (+this.fullDateSplit[1] + this.parameters.sumMonth).toString();
      this.numberOfDaysInMonth = new Date(+this.fullDateSplit[2], +this.month, 0).getDate();
      this.day = ((+this.fullDateSplit[0] == 31) ? this.numberOfDaysInMonth : +this.fullDateSplit[0]).toString();
      this.year = this.fullDateSplit[2];
    }
      
    if (+this.month > 12) {
      this.outputDate = this.parameters.usa == true ? `${(+this.year + 1).toString()}-${((+this.month - 12) < 10 ? "0" + (+this.month - 12).toString() : (+this.month - 12).toString())}-${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}` : 
      `${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${((+this.month - 12) < 10 ? "0" + (+this.month - 12).toString() : (+this.month - 12).toString())}-${(+this.year + 1).toString()}`;
    }else if (+this.month < 12) {
      this.outputDate = this.parameters.usa == true ? `${this.year.toString()}-${(+this.month) < 10 ? "0" + this.month.toString() : this.month.toString()}-${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}` :
      `${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${(+this.month) < 10 ? "0" + this.month.toString() : this.month.toString()}-${this.year.toString()}`;
    }else if (+this.month == 12) {
      this.outputDate = this.parameters.usa == true ? `${this.year.toString()}-${(+this.month) < 10 ? "0" + this.month.toString() : this.month.toString()}-${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}` : 
      `${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${(+this.month) < 10 ? "0" + this.month.toString() : this.month.toString()}-${this.year.toString()}`
    }
    return this.outputDate;
  }

  addDaysToDate(): string{
    this.fullDateSplit = this.parameters.fullDate.split(this.characters);    
    
    if (this.parameters.usa == true) {           
      this.numberOfDaysInMonth = new Date(+this.fullDateSplit[0], +this.fullDateSplit[1], 0).getDate();
      this.month = (+this.fullDateSplit[2] + this.parameters.sumDay > this.numberOfDaysInMonth ? +this.fullDateSplit[1] + 1 : +this.fullDateSplit[1]).toString();
      this.year = (+this.month > 12 ? +this.fullDateSplit[0] + 1 : +this.fullDateSplit[0]).toString();
      this.month = (+this.month > 12 ? +this.month - 12 : this.month).toString();
      this.day = (+this.fullDateSplit[2] + this.parameters.sumDay > this.numberOfDaysInMonth ? (+this.fullDateSplit[2] + this.parameters.sumDay) - this.numberOfDaysInMonth : +this.fullDateSplit[2] + this.parameters.sumDay).toString();
      this.outputDate = `${this.year}-${+this.month < 10 ? "0" + this.month.toString() : this.month.toString()}-${+this.day < 10 ? "0" + this.day.toString() : this.day.toString()}`;
    } else {
      this.numberOfDaysInMonth = new Date(+this.fullDateSplit[2], +this.fullDateSplit[1], 0).getDate();
      this.month = (+this.fullDateSplit[0] + this.parameters.sumDay > this.numberOfDaysInMonth ? +this.fullDateSplit[1] + 1 : +this.fullDateSplit[1]).toString();
      this.year = (+this.month > 12 ? +this.fullDateSplit[2] + 1 : +this.fullDateSplit[2]).toString();
      this.month = (+this.month > 12 ? +this.month - 12 : this.month).toString();
      this.day = (+this.fullDateSplit[0] + this.parameters.sumDay > this.numberOfDaysInMonth ? (+this.fullDateSplit[0] + this.parameters.sumDay) - this.numberOfDaysInMonth : +this.fullDateSplit[0] + this.parameters.sumDay).toString();
      this.outputDate = `${+this.day < 10 ? "0" + this.day.toString() : this.day.toString()}-${+this.month < 10 ? "0" + this.month.toString() : this.month.toString()}-${this.year}`;
    }    
    return this.outputDate;
  }
}
