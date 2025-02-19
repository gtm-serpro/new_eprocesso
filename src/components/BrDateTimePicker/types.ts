export type DTPickerType = "date" | "time" | "dateTime";
export type DTPickerInput = string | number | Date;
export type DTPickerOutput = Date[] | string;

export type DateOptions = {
  minDate?: string | Date;
  maxDate?: string | Date;
};

export type TimeOptions = {
  minuteIncrement?: number;
  defaultHour?: number;
  defaultMinute?: number;
};
