"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateManipulator = void 0;
class DateManipulator {
    constructor(usa, br, fullDate, sumYear, sumMonth, sumDay) {
        this.usa = usa;
        this.br = br;
        this.fullDate = fullDate;
        this.sumYear = sumYear;
        this.sumMonth = sumMonth;
        this.sumDay = sumDay;
        this.characters = /[\s-./ ,]+/;
    }
    getNewDate() {
        let date = new Date();
        let month = date.getMonth() < 10 ? "0" + (date.getMonth() + 1).toString() : date.getMonth().toString();
        let day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
        let year = date.getFullYear().toString();
        let fullDate = this.usa == true ? `${month}-${day}-${year}` : `${day}-${month}-${year}`;
        return fullDate;
    }
    addYearsToDate() {
        let fullDateSplit = this.fullDate.split(this.characters);
        return `${fullDateSplit[0]}-${fullDateSplit[1]}-${(+fullDateSplit[2] + this.sumYear).toString()}`;
    }
    addMonthsToDate() {
        let fullDateSplit = this.fullDate.split(this.characters);
        let month;
        let numberOfDaysInMonth;
        let day;
        let year;
        let date = "";
        if (this.usa == true) {
            month = +fullDateSplit[0] + this.sumMonth;
            numberOfDaysInMonth = new Date(+fullDateSplit[2], month, 0).getDate();
            day = (+fullDateSplit[1] == 31) ? numberOfDaysInMonth : +fullDateSplit[1];
            year = +fullDateSplit[2];
        }
        else {
            month = +fullDateSplit[1] + this.sumMonth;
            numberOfDaysInMonth = new Date(+fullDateSplit[2], month, 0).getDate();
            day = (+fullDateSplit[0] == 31) ? numberOfDaysInMonth : +fullDateSplit[0];
            year = +fullDateSplit[2];
        }
        if (month > 12) {
            date = this.usa == true ? `${((month - 12) < 10 ? "0" + (month - 12).toString() : (month - 12).toString())}-${(day) < 10 ? "0" + day.toString() : day.toString()}-${(year + 1).toString()}` :
                `${(day) < 10 ? "0" + day.toString() : day.toString()}-${((month - 12) < 10 ? "0" + (month - 12).toString() : (month - 12).toString())}-${(year + 1).toString()}`;
        }
        else if (month < 12) {
            date = this.usa == true ? `${(month) < 10 ? "0" + month.toString() : month.toString()}-${(day) < 10 ? "0" + day.toString() : day.toString()}-${year.toString()}` :
                `${(day) < 10 ? "0" + day.toString() : day.toString()}-${(month) < 10 ? "0" + month.toString() : month.toString()}-${year.toString()}`;
        }
        else if (month == 12) {
            date = this.usa == true ? `${(month) < 10 ? "0" + month.toString() : month.toString()}-${(day) < 10 ? "0" + day.toString() : day.toString()}-${year.toString()}` :
                `${(day) < 10 ? "0" + day.toString() : day.toString()}-${(month) < 10 ? "0" + month.toString() : month.toString()}-${year.toString()}`;
        }
        return date;
    }
    addDaysToDate() {
        let fullDateSplit = this.fullDate.split(this.characters);
        let month;
        let numberOfDaysInMonth;
        let day;
        let year;
        let date = "";
        if (this.usa == true) {
            numberOfDaysInMonth = new Date(+fullDateSplit[2], +fullDateSplit[0], 0).getDate();
            month = +fullDateSplit[1] + this.sumDay > numberOfDaysInMonth ? +fullDateSplit[0] + 1 : +fullDateSplit[0];
            year = month > 12 ? +fullDateSplit[2] + 1 : +fullDateSplit[2];
            month = month > 12 ? month - 12 : month;
            day = +fullDateSplit[1] + this.sumDay > numberOfDaysInMonth ? (+fullDateSplit[1] + this.sumDay) - numberOfDaysInMonth : +fullDateSplit[1] + this.sumDay;
            date = `${month < 10 ? "0" + month.toString() : month.toString()}-${day < 10 ? "0" + day.toString() : day.toString()}-${year}`;
        }
        else {
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
exports.DateManipulator = DateManipulator;
//# sourceMappingURL=date.operations.manipulator2.js.map