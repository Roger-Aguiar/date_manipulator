import { DateManipulator } from "../src/date.manipulator";

describe("Date Manipulator Tests", () => {
  let dateManipulator;
  let monthUSA = "10-06-2022";
  let daysUSA = "05-11-2022";
  let yearUSA = "05-06-2027";
    
  let yearBrazil = "06-05-2027";
  

  beforeEach(() => {
    dateManipulator = new DateManipulator();
  });

  describe("Tests for United States date", () => {
    it("Should return a new date in the Uniteds States format", () => {
      expect(dateManipulator.getNewUnitedStatesDate()).not.toBeNull();
    });

    it("Should add a specified value into the year and return the new value when date is in the USA format", () => {
      dateManipulator = new DateManipulator(dateManipulator.getNewUnitedStatesDate(), 5);
      expect(dateManipulator.addYearsToUnitedStatesDate()).toBe(yearUSA);
    });

    it("Should add a specified value into the day and return the new value when date is in the USA format", () => {
        dateManipulator = new DateManipulator(dateManipulator.getNewUnitedStatesDate(), 0, 0, 5);
        expect(dateManipulator.addDaysToUnitedStatesDate()).toBe(daysUSA);
    });

    it("Should add a specified value into the month and return the new value when date is in the USA format", () => {
        dateManipulator = new DateManipulator(dateManipulator.getNewUnitedStatesDate(), 0, 5);
        expect(dateManipulator.addMonthsToUnitedStatesDate()).toBe(monthUSA);
    });
  });

  describe("Tests for Brazil date", () => {
    it("Should return a new date in Brazilian format", () => {
      expect(dateManipulator.getNewBrazilianDate()).not.toBeNull();
    });

    it("Should add a specified value into the year and return the new value when date is in BRAZILIAN format", () => {
      dateManipulator = new DateManipulator(dateManipulator.getNewBrazilianDate(), 5);
      expect(dateManipulator.addYearsToBrazilianDate()).toBe(yearBrazil);      
    });
  });
});
