"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateManipulator = void 0;
class DateManipulator {
    constructor(parameters) {
        this.parameters = parameters;
        this.characters = /[\s-./ ,]+/;
        this.date = new Date();
        this.outputDate = "";
    }
    getNewDate() {
        this.month = this.date.getMonth() < 10 ? "0" + (this.date.getMonth() + 1).toString() : this.date.getMonth().toString();
        this.day = this.date.getDate() < 10 ? "0" + this.date.getDate().toString() : this.date.getDate().toString();
        this.year = this.date.getFullYear().toString();
        this.fullDate = this.parameters.usa == true ? `${this.month}-${this.day}-${this.year}` : `${this.day}-${this.month}-${this.year}`;
        return this.fullDate;
    }
    addYearsToDate() {
        let fullDateSplit = this.parameters.fullDate.split(this.characters);
        return `${fullDateSplit[0]}-${fullDateSplit[1]}-${(+fullDateSplit[2] + this.parameters.sumYear).toString()}`;
    }
    addMonthsToDate() {
        let fullDateSplit = this.parameters.fullDate.split(this.characters);
        let outputDate = "";
        if (this.parameters.usa == true) {
            this.month = (+fullDateSplit[0] + this.parameters.sumMonth).toString();
            this.numberOfDaysInMonth = new Date(+fullDateSplit[2], +this.month, 0).getDate();
            this.day = ((+fullDateSplit[1] == 31) ? this.numberOfDaysInMonth : +fullDateSplit[1]).toString();
            this.year = fullDateSplit[2];
        }
        else {
            this.month = (+fullDateSplit[1] + this.parameters.sumMonth).toString();
            this.numberOfDaysInMonth = new Date(+fullDateSplit[2], +this.month, 0).getDate();
            this.day = ((+fullDateSplit[0] == 31) ? this.numberOfDaysInMonth : +fullDateSplit[0]).toString();
            this.year = fullDateSplit[2];
        }
        if (+this.month > 12) {
            outputDate = this.parameters.usa == true ? `${((+this.month - 12) < 10 ? "0" + (+this.month - 12).toString() : (+this.month - 12).toString())}-${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${(this.year + 1).toString()}` :
                `${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${((+this.month - 12) < 10 ? "0" + (+this.month - 12).toString() : (+this.month - 12).toString())}-${(this.year + 1).toString()}`;
        }
        else if (+this.month < 12) {
            outputDate = this.parameters.usa == true ? `${(+this.month) < 10 ? "0" + this.month.toString() : this.month.toString()}-${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${this.year.toString()}` :
                `${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${(+this.month) < 10 ? "0" + this.month.toString() : this.month.toString()}-${this.year.toString()}`;
        }
        else if (+this.month == 12) {
            outputDate = this.parameters.usa == true ? `${(+this.month) < 10 ? "0" + this.month.toString() : this.month.toString()}-${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${this.year.toString()}` :
                `${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${(+this.month) < 10 ? "0" + this.month.toString() : this.month.toString()}-${this.year.toString()}`;
        }
        return outputDate;
    }
    addDaysToDate() {
        let fullDateSplit = this.parameters.fullDate.split(this.characters);
        if (this.parameters.usa == true) {
            this.numberOfDaysInMonth = new Date(+fullDateSplit[2], +fullDateSplit[0], 0).getDate();
            this.month = (+fullDateSplit[1] + this.parameters.sumDay > this.numberOfDaysInMonth ? +fullDateSplit[0] + 1 : +fullDateSplit[0]).toString();
            this.year = (+this.month > 12 ? +fullDateSplit[2] + 1 : +fullDateSplit[2]).toString();
            this.month = (+this.month > 12 ? +this.month - 12 : this.month).toString();
            this.day = (+fullDateSplit[1] + this.parameters.sumDay > this.numberOfDaysInMonth ? (+fullDateSplit[1] + this.parameters.sumDay) - this.numberOfDaysInMonth : +fullDateSplit[1] + this.parameters.sumDay).toString();
            this.outputDate = `${+this.month < 10 ? "0" + this.month.toString() : this.month.toString()}-${+this.day < 10 ? "0" + this.day.toString() : this.day.toString()}-${this.year}`;
        }
        else {
            this.numberOfDaysInMonth = new Date(+fullDateSplit[2], +fullDateSplit[1], 0).getDate();
            this.month = (+fullDateSplit[0] + this.parameters.sumDay > this.numberOfDaysInMonth ? +fullDateSplit[1] + 1 : +fullDateSplit[1]).toString();
            this.year = (+this.month > 12 ? +fullDateSplit[2] + 1 : +fullDateSplit[2]).toString();
            this.month = (+this.month > 12 ? +this.month - 12 : this.month).toString();
            this.day = (+fullDateSplit[0] + this.parameters.sumDay > this.numberOfDaysInMonth ? (+fullDateSplit[0] + this.parameters.sumDay) - this.numberOfDaysInMonth : +fullDateSplit[0] + this.parameters.sumDay).toString();
            this.outputDate = `${+this.day < 10 ? "0" + this.day.toString() : this.day.toString()}-${+this.month < 10 ? "0" + this.month.toString() : this.month.toString()}-${this.year}`;
        }
        return this.outputDate;
    }
}
exports.DateManipulator = DateManipulator;
//# sourceMappingURL=date.operations.manipulator2.js.map