import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import EmployeeSelect from "./EmployeeSelect";
import PeriodInput from "./PeriodInput";
import DatePickerField from "./DatePickerField";
import { Employee } from "../../types/types";

const convertDaysToDates = (days: number[], year: number, month: number): Date[] => {
  return days.map(day => new Date(year, month, day));
};

interface MealVoucherFormProps {
  employees: { nome: string; cpf: string; setor: string }[];
  onSubmit: (mealVoucher: Employee) => void;
}

const MealVoucherForm: React.FC<MealVoucherFormProps> = ({
  employees,
  onSubmit,
}) => {
  const [mealVoucher, setMealVoucher] = useState<Employee>({
    name: "",
    department: "",
    workedHolidays: [],
    unjustifiedAbsences: [],
    unjustifiedAbsencesPreviousMonth: [],
    workedWeekends: [],
    mealVoucher: 0,
    voucher6h: 0,
    voucher8h: 0,
  });

  const handleFieldChange = <K extends keyof Employee>(
    field: K,
    value: Employee[K]
  ) => {
    setMealVoucher((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(mealVoucher);
  };

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={2}>
          <EmployeeSelect
            employees={employees}
            value={mealVoucher.name}
            onChange={(value) => handleFieldChange("name", value)}
          />
        </GridItem>

        <GridItem colSpan={2}>
          <DatePickerField
            label="Feriados Trabalhados"
            selectedDates={convertDaysToDates(mealVoucher.workedHolidays, currentYear, currentMonth)}
            onChange={(dates) =>
              handleFieldChange("workedHolidays", dates.map(date => date.getDate()))
            }
          />
        </GridItem>

        <GridItem colSpan={2}>
          <DatePickerField
            label="Fins de Semana Trabalhados"
            selectedDates={convertDaysToDates(mealVoucher.workedWeekends, currentYear, currentMonth)}
            onChange={(dates) =>
              handleFieldChange("workedWeekends", dates.map(date => date.getDate()))
            }
          />
        </GridItem>

        <GridItem colSpan={2}>
          <DatePickerField
            label="Faltas Injustificadas"
            selectedDates={convertDaysToDates(mealVoucher.unjustifiedAbsences, currentYear, currentMonth)}
            onChange={(dates) =>
              handleFieldChange("unjustifiedAbsences", dates.map(date => date.getDate()))
            }
          />
        </GridItem>

        <GridItem colSpan={2}>
          <DatePickerField
            label="Faltas Injustificadas Competência Anterior"
            selectedDates={convertDaysToDates(mealVoucher.unjustifiedAbsencesPreviousMonth, currentYear, currentMonth)}
            onChange={(dates) =>
              handleFieldChange("unjustifiedAbsencesPreviousMonth", dates.map(date => date.getDate()))
            }
          />
        </GridItem>

        <GridItem colSpan={2}>
          <Button colorScheme="purple" onClick={handleSubmit}>
            Cadastrar
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MealVoucherForm;
