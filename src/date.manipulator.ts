export class DateManipulator {
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
}
