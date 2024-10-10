import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import EmployeeSelect from "./EmployeeSelect";
import PeriodInput from "./PeriodInput";
import DatePickerField from "./DatePickerField";
import { MealVoucherInfo } from "../../types/types";

interface MealVoucherFormProps {
  employees: { nome: string; cpf: string; setor: string }[];
  onSubmit: (mealVoucher: MealVoucherInfo) => void;
}

const MealVoucherForm: React.FC<MealVoucherFormProps> = ({
  employees,
  onSubmit,
}) => {
  const [mealVoucher, setMealVoucher] = useState<MealVoucherInfo>({
    nome: "",
    cpf: "",
    department: "",
    competencia: "",
    feriadosTrabalhados: [],
    faltasInjustificadas: [],
    faltasInjustificadasAnterior: [],
    finsDeSemanaTrabalhados: [],
  });

  const handleFieldChange = <K extends keyof MealVoucherInfo>(
    field: K,
    value: MealVoucherInfo[K]
  ) => {
    setMealVoucher((prevState) => ({ ...prevState, [field]: value }));
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
            value={mealVoucher.nome}
            onChange={(value) => handleFieldChange("nome", value)}
          />
        </GridItem>

        <GridItem colSpan={2}>
          <PeriodInput
            value={mealVoucher.competencia}
            onChange={(value) => handleFieldChange("competencia", value)}
          />
        </GridItem>

        <GridItem colSpan={2}>
          <DatePickerField
            label="Feriados Trabalhados"
            selectedDates={mealVoucher.feriadosTrabalhados}
            onChange={(dates) =>
              handleFieldChange("feriadosTrabalhados", dates)
            }
          />
        </GridItem>

        <GridItem colSpan={2}>
          <DatePickerField
            label="Fins de Semana Trabalhados"
            selectedDates={mealVoucher.finsDeSemanaTrabalhados}
            onChange={(dates) =>
              handleFieldChange("finsDeSemanaTrabalhados", dates)
            }
          />
        </GridItem>

        <GridItem colSpan={2}>
          <DatePickerField
            label="Faltas Injustificadas"
            selectedDates={mealVoucher.faltasInjustificadas}
            onChange={(dates) =>
              handleFieldChange("faltasInjustificadas", dates)
            }
          />
        </GridItem>

        <GridItem colSpan={2}>
          <DatePickerField
            label="Faltas Injustificadas Competência Anterior"
            selectedDates={mealVoucher.faltasInjustificadasAnterior}
            onChange={(dates) =>
              handleFieldChange("faltasInjustificadasAnterior", dates)
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
