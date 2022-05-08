import { DateManipulator } from "../src/date.manipulator";

describe("Date Manipulator Tests", () => {
  let dateManipulator;
  let monthUSA = "10-07-2022";
  let daysUSA = "05-12-2022";
  let yearUSA = "05-07-2027";
    
  let yearBrazil = "07-05-2027";
  

  beforeEach(() => {
    dateManipulator = new DateManipulator();
  });

  describe("Tests for the USA date format", () => {
    it("Should return a new date in the USA format", () => {
      expect(dateManipulator.getNewUnitedStatesDate()).not.toBeNull();
    });

    it("Should add a specified value into the year and return the new value when date is in the USA format", () => {
      dateManipulator = new DateManipulator("05-07-2022", 5);
      expect(dateManipulator.addYearsToUnitedStatesDate()).toBe(yearUSA);
    });

    it("Should add a specified value into the day and return the new value when date is in the USA format", () => {
        dateManipulator = new DateManipulator("05-07-2022", 0, 0, 5);
        expect(dateManipulator.addDaysToUnitedStatesDate()).toBe(daysUSA);
    });

    it("Should add a specified value into the month and return the new value when date is in the USA format", () => {
        dateManipulator = new DateManipulator("05-07-2022", 0, 5);
      expect(dateManipulator.addMonthsToUnitedStatesDate()).toBe("10-07-2022");
    });

    it("Should add 5 months when month is equal 11 and return month equal 04 and one more year in the USA format", () => {
      dateManipulator = new DateManipulator("11-08-2022", 0, 5);      
      expect(dateManipulator.addMonthsToUnitedStatesDate()).toBe("04-08-2023");
    });

    it("Should add 12 months and add one more year in the USA format", () => {
      dateManipulator = new DateManipulator("11-08-2022", 0, 12);
      expect(dateManipulator.addMonthsToUnitedStatesDate()).toBe("11-08-2023");
    });

    it("Should add 1 month when the current mmonth has 31 days and return the date with the last day of the next month if this has 30 days in the USA format", () => {
      dateManipulator = new DateManipulator("05-31-2022", 0, 1);
      expect(dateManipulator.addMonthsToUnitedStatesDate()).toBe("06-30-2022");
    });
  });

  describe("Tests for Brazil date format", () => {
    it("Should return a new date in Brazilian format", () => {
      expect(dateManipulator.getNewBrazilianDate()).not.toBeNull();
    });

    it("Should add a specified value into the year and return the new value when date is in BRAZILIAN format", () => {
      dateManipulator = new DateManipulator("07-05-2022", 5);
      expect(dateManipulator.addYearsToBrazilianDate()).toBe(yearBrazil);      
    });
  });
});
