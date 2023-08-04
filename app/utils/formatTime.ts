import {
  format,
  getTime,
  formatDistanceToNow,
  formatDistance,
  parse,
} from "date-fns";

// ----------------------------------------------------------------------

type InputValue = Date | string | number | null;

export function fDate(date: InputValue, newFormat?: string) {
  const fm = newFormat || "dd MMM yyyy";

  return date ? format(new Date(date), fm) : "";
}
