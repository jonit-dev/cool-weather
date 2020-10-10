import moment from 'moment';

export class DateHelper {
  public static getDateHumanFormat(date: Date) {
    return moment(date).format("MM/DD/YYYY");
  }
}
