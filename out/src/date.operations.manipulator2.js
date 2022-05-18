"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateManipulator = void 0;
const parameters_1 = require("./parameters");
class DateManipulator {
    constructor() {
        this.parameters = new parameters_1.Parameters();
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
        this.fullDateSplit = this.parameters.fullDate.split(this.characters);
        return `${this.fullDateSplit[0]}-${this.fullDateSplit[1]}-${(+this.fullDateSplit[2] + this.parameters.sumYear).toString()}`;
    }
    addMonthsToDate() {
        this.fullDateSplit = this.parameters.fullDate.split(this.characters);
        if (this.parameters.usa == true) {
            this.month = (+this.fullDateSplit[0] + this.parameters.sumMonth).toString();
            this.numberOfDaysInMonth = new Date(+this.fullDateSplit[2], +this.month, 0).getDate();
            this.day = ((+this.fullDateSplit[1] == 31) ? this.numberOfDaysInMonth : +this.fullDateSplit[1]).toString();
            this.year = this.fullDateSplit[2];
        }
        else {
            this.month = (+this.fullDateSplit[1] + this.parameters.sumMonth).toString();
            this.numberOfDaysInMonth = new Date(+this.fullDateSplit[2], +this.month, 0).getDate();
            this.day = ((+this.fullDateSplit[0] == 31) ? this.numberOfDaysInMonth : +this.fullDateSplit[0]).toString();
            this.year = this.fullDateSplit[2];
        }
        if (+this.month > 12) {
            this.outputDate = this.parameters.usa == true ? `${((+this.month - 12) < 10 ? "0" + (+this.month - 12).toString() : (+this.month - 12).toString())}-${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${(this.year + 1).toString()}` :
                `${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${((+this.month - 12) < 10 ? "0" + (+this.month - 12).toString() : (+this.month - 12).toString())}-${(this.year + 1).toString()}`;
        }
        else if (+this.month < 12) {
            this.outputDate = this.parameters.usa == true ? `${(+this.month) < 10 ? "0" + this.month.toString() : this.month.toString()}-${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${this.year.toString()}` :
                `${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${(+this.month) < 10 ? "0" + this.month.toString() : this.month.toString()}-${this.year.toString()}`;
        }
        else if (+this.month == 12) {
            this.outputDate = this.parameters.usa == true ? `${(+this.month) < 10 ? "0" + this.month.toString() : this.month.toString()}-${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${this.year.toString()}` :
                `${(+this.day) < 10 ? "0" + this.day.toString() : this.day.toString()}-${(+this.month) < 10 ? "0" + this.month.toString() : this.month.toString()}-${this.year.toString()}`;
        }
        return this.outputDate;
    }
    addDaysToDate() {
        this.fullDateSplit = this.parameters.fullDate.split(this.characters);
        if (this.parameters.usa == true) {
            this.numberOfDaysInMonth = new Date(+this.fullDateSplit[2], +this.fullDateSplit[0], 0).getDate();
            this.month = (+this.fullDateSplit[1] + this.parameters.sumDay > this.numberOfDaysInMonth ? +this.fullDateSplit[0] + 1 : +this.fullDateSplit[0]).toString();
            this.year = (+this.month > 12 ? +this.fullDateSplit[2] + 1 : +this.fullDateSplit[2]).toString();
            this.month = (+this.month > 12 ? +this.month - 12 : this.month).toString();
            this.day = (+this.fullDateSplit[1] + this.parameters.sumDay > this.numberOfDaysInMonth ? (+this.fullDateSplit[1] + this.parameters.sumDay) - this.numberOfDaysInMonth : +this.fullDateSplit[1] + this.parameters.sumDay).toString();
            this.outputDate = `${+this.month < 10 ? "0" + this.month.toString() : this.month.toString()}-${+this.day < 10 ? "0" + this.day.toString() : this.day.toString()}-${this.year}`;
        }
        else {
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
exports.DateManipulator = DateManipulator;
//# sourceMappingURL=date.operations.manipulator2.js.map