"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_operations_manipulator2_1 = require("../src/date.operations.manipulator2");
describe("Date Manipulator Tests", () => {
    let dateManipulator;
    beforeEach(() => {
        dateManipulator = new date_operations_manipulator2_1.DateManipulator();
    });
    describe("Tests for the USA date format", () => {
        it("Should return a new date in the USA format", () => {
            let dateManipulator = new date_operations_manipulator2_1.DateManipulator(true);
            expect(dateManipulator.getNewDate()).not.toBeNull();
        });
        it("Should add a specified value into the year and return the new value when date is in the USA format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(true, false, "05-07-2022", 5);
            expect(dateManipulator.addYearsToDate()).toBe("05-07-2027");
        });
        it("Should add a specified value into the day and return the new value when date is in the USA format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(true, false, "05-07-2022", 0, 0, 5);
            expect(dateManipulator.addDaysToDate()).toBe("05-12-2022");
        });
        it("Should add 12 days when current date is 02/25/2022 and return 03/09/2023 when this date is in the USA format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(true, false, "02-25-2022", 0, 0, 12);
            expect(dateManipulator.addDaysToDate()).toBe("03-09-2022");
        });
        it("Should add a specified value into the month and return the new value when date is in the USA format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(true, false, "05-07-2022", 0, 5);
            expect(dateManipulator.addMonthsToDate()).toBe("10-07-2022");
        });
        it("Should add 5 months when month is equal 11 and return month equal 04 and one more year in the USA format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(true, false, "11-08-2022", 0, 5);
            expect(dateManipulator.addMonthsToDate()).toBe("04-08-2023");
        });
        it("Should add 12 months and add one more year in the USA format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(true, false, "11-08-2022", 0, 12);
            expect(dateManipulator.addMonthsToDate()).toBe("11-08-2023");
        });
        it("Should add 1 month when the current mmonth has 31 days and return the date with the last day of the next month if this has 30 days in the USA format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(true, false, "05-31-2022", 0, 1);
            expect(dateManipulator.addMonthsToDate()).toBe("06-30-2022");
        });
    });
    describe("Tests for Brazil date format", () => {
        it("Should return a new date in the USA format", () => {
            let dateManipulator = new date_operations_manipulator2_1.DateManipulator(false, true);
            expect(dateManipulator.getNewDate()).not.toBeNull();
        });
        it("Should add a specified value into the year and return the new value when date is in the Brazilian format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(false, true, "07-05-2022", 5);
            expect(dateManipulator.addYearsToDate()).toBe("07-05-2027");
        });
        it("Should add a specified value into the day and return the new value when date is in the Brazilian format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(false, true, "04-05-2022", 0, 0, 5);
            expect(dateManipulator.addDaysToDate()).toBe("09-05-2022");
        });
        it("Should add 12 days when current date is 25/05/2022 and return 06/06/2022 when this date is in the Brazilian format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(false, true, "25-05-2022", 0, 0, 12);
            expect(dateManipulator.addDaysToDate()).toBe("06-06-2022");
        });
        it("Should add 12 days when current date is 25/12/2022 and return 01/01/2023 when this date is in the Brazilian format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(false, true, "25-12-2022", 0, 0, 12);
            expect(dateManipulator.addDaysToDate()).toBe("06-01-2023");
        });
        it("Should add 12 days when current date is 25/12/2022 and return 01/01/2023 when this date is in the Brazilian format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(false, true, "25-02-2022", 0, 0, 12);
            expect(dateManipulator.addDaysToDate()).toBe("09-03-2022");
        });
        it("Should add a specified value into the month and return the new value when date is in the Brazilian format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(false, true, "07-05-2022", 0, 5);
            expect(dateManipulator.addMonthsToDate()).toBe("07-10-2022");
        });
        it("Should add 5 months when month is equal 11 and return month equal 04 and one more year in the Brazilian format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(false, true, "08-11-2022", 0, 5);
            expect(dateManipulator.addMonthsToDate()).toBe("08-04-2023");
        });
        it("Should add 12 months and add one more year in the Brazilian format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(false, true, "11-08-2022", 0, 12);
            expect(dateManipulator.addMonthsToDate()).toBe("11-08-2023");
        });
        it("Should add 1 month when the current mmonth has 31 days and return the date with the last day of the next month if this has 30 days in the Brazilian format", () => {
            dateManipulator = new date_operations_manipulator2_1.DateManipulator(false, true, "31-05-2022", 0, 1);
            expect(dateManipulator.addMonthsToDate()).toBe("30-06-2022");
        });
    });
});
//# sourceMappingURL=date.manipulator.spec.js.map