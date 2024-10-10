import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import EmployeeSelect from "./EmployeeSelect";
// import PeriodInput from "./PeriodInput";
import DatePickerField from "./DatePickerField";
import { MealVoucherInfo } from "../../types/types";

const convertDaysToDates = (days: number[], year: number, month: number): Date[] => {
  return days.map(day => new Date(year, month, day));
};

interface MealVoucherFormProps {
  employees: { nome: string; cpf: string; setor: string }[];
  onSubmit: (mealVoucher: MealVoucherInfo) => void;
}

const MealVoucherForm: React.FC<MealVoucherFormProps> = ({
  employees,
  onSubmit,
}) => {
  const [mealVoucher, setMealVoucher] = useState<MealVoucherInfo>({
    name: "",
    // cpf: "",
    department: "",
    // period: "",
    workedHolidays: [],
    unjustifiedAbsences: [],
    unjustifiedAbsencesPreviousMonth: [],
    workedWeekends: [],
    mealVoucher: 0,
    voucher6h: 0,
    voucher8h: 0,
  });

  const handleFieldChange = <K extends keyof MealVoucherInfo>(
    field: K,
    value: MealVoucherInfo[K]
  ) => {
    setMealVoucher((prevState) => ({ ...prevState, [field]: value }));
  };

  const convertDaysToDates = (days: number[], year: number, month: number): Date[] => {
    return days.map(day => new Date(year, month, day));
  };

  const handleSubmit = () => {
    onSubmit(mealVoucher);
  };

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

        {/* <GridItem colSpan={2}>
          <PeriodInput
            value={mealVoucher.period}
            onChange={(value) => handleFieldChange("period", value)}
          />
        </GridItem> */}

        <GridItem colSpan={2}>
          <DatePickerField
            label="Feriados Trabalhados"
            selectedDates={convertDaysToDates(mealVoucher.workedHolidays, year, 0)}
            onChange={(dates) =>
              handleFieldChange("workedHolidays", dates.map(date => date.getDate()))
            }
          />
        </GridItem>

        <GridItem colSpan={2}>
          <DatePickerField
            label="Fins de Semana Trabalhados"
            selectedDates={convertDaysToDates(mealVoucher.workedWeekends, year, 0)}
            onChange={(dates) =>
              handleFieldChange("workedWeekends", dates.map(date => date.getDate()))
            }
          />
        </GridItem>

        <GridItem colSpan={2}>
          <DatePickerField
            label="Faltas Injustificadas"
            selectedDates={convertDaysToDates(mealVoucher.unjustifiedAbsences, year, 0)}
            onChange={(dates) =>
              handleFieldChange("unjustifiedAbsences", dates.map(date => date.getDate()))
            }
          />
        </GridItem>

        <GridItem colSpan={2}>
          <DatePickerField
            label="Faltas Injustificadas Competência Anterior"
            selectedDates={convertDaysToDates(mealVoucher.unjustifiedAbsencesPreviousMonth, year, 0)}
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
