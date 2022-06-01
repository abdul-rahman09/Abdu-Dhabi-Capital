import moment from "moment-timezone";
const DATE_FORMAT = "MM/DD/YY";

export const getFormattedDate = (date: string | number | string[]) => {
  return moment(date).format(DATE_FORMAT);
};
