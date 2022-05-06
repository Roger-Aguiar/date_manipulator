import { DateManipulator } from "../src/date.manipulator";

describe("Date Manipulator Tests", () => {
    let dateManipulator;

    beforeEach(() => {
        dateManipulator = new DateManipulator();
    });

    it("Should return a new date", () => {
        console.log(dateManipulator.getNewUnitedStatesDate());
        expect(dateManipulator.getNewUnitedStatesDate()).not.toBeNull();
    });
});