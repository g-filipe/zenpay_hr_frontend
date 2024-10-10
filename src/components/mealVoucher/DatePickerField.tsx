import { FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

interface DatePickerFieldProps {
  label: string;
  selectedDates: Date[];
  onChange: (dates: Date[]) => void;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label,
  selectedDates,
  /*onChange,*/
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Calendar
        value={selectedDates}
        multiple={true}
        format="DD/MM/YYYY"
        plugins={[<DatePanel sort="date" />]}
      ></Calendar>
    </FormControl>
  );
};

export default DatePickerField;
