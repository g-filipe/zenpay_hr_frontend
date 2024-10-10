import { useEffect, useState } from "react";
import Header from "../components/Header";
import DatePicker from "react-multi-date-picker";
import { Period } from "../types/types";
import "../styles/MealVoucher.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const MealVoucher = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [periods, setPeriods] = useState<Period[]>([]);

  useEffect(() => {
    setPeriods(getPeriodsByYear(year));
  }, [year]);

  return (
    <>
      <Header />
      <h1>Gerenciamento de Vales Alimentação</h1>
      <DatePicker
        value={new Date(year, 0, 1)}
        onlyYearPicker
        type="button"
        onChange={(selectedDate) => {
          setYear(selectedDate!.year);
        }}
      ></DatePicker>

      <Box mt={8}>
        {periods.map((period, index) => {
          return (
            <Box key={index} mb={4} p={4} borderWidth="1px" borderRadius="md">
              <Flex justifyContent="space-between" alignItems="center">
                <Flex gap={8}>
                  <Text>
                    <strong>Competência</strong> {period.period}
                  </Text>
                  <Text>
                    <strong>Custo Total</strong> {period.totalMealVoucher}
                  </Text>
                </Flex>
                <Button size="sm" /*onClick={() => toggleExpand(emp.nome)}*/>
                  Ver relatório
                </Button>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

function getPeriodsByYear(year: number) {
  return [
    {
      period: `01/${year}`,
      totalMealVoucher: "R$35.789,23",
    },
    {
      period: `02/${year}`,
      totalMealVoucher: "R$39.555,99",
    },
    {
      period: `03/${year}`,
      totalMealVoucher: "R$35.789,23",
    },
    {
      period: `04/${year}`,
      totalMealVoucher: "R$35.789,23",
    },
    {
      period: `05/${year}`,
      totalMealVoucher: "R$35.789,23",
    },
    {
      period: `06/${year}`,
      totalMealVoucher: "R$35.789,23",
    },
    {
      period: `07/${year}`,
      totalMealVoucher: "R$35.789,23",
    },
    {
      period: `08/${year}`,
      totalMealVoucher: "R$35.789,23",
    },
    {
      period: `09/${year}`,
      totalMealVoucher: "R$35.789,23",
    },
    {
      period: `10/${year}`,
      totalMealVoucher: "R$35.789,23",
    },
    {
      period: `11/${year}`,
      totalMealVoucher: "R$35.789,23",
    },
    {
      period: `12/${year}`,
      totalMealVoucher: "R$35.789,23",
    },
  ];
}

export default MealVoucher;

{
  /* <div>
                  {period.employees.map((employee) => {
                    return <div className="meal-voucher-info-employee">
                      <div>
                      <p><strong>Colaborador:</strong> {employee.name}</p>
                      <p><strong>Setor:</strong> {employee.department}</p>
                      <p><strong>VA/VR:</strong> {employee.mealVoucher}</p>
                      <p><strong>Diária - 6h:</strong> {employee.voucher6h}</p>
                      <p><strong>Diária - 8h:</strong> {employee.voucher8h}</p>
                      <p><strong>Escalas Fim de Semana:</strong> {employee.workedWeekends?.length ? employee.workedWeekends.join(",") : 0}</p>
                      <p><strong>Escala de Feriados: </strong>{employee.workedHolidays?.length ? employee.workedHolidays.join(",") : 0}</p>
                      <p><strong>Faltas Injustificadas competência atual: </strong>{employee.unjustifiedAbsences?.length ? employee.unjustifiedAbsences.join(",") : 0}</p>
                      <p><strong>Faltas Injustificadas competência anterior: </strong>{ employee.unjustifiedAbsencesPreviousMonth?.length ? employee.unjustifiedAbsencesPreviousMonth?.join(",") : 0}</p>
                      <hr />
                      </div>;
                      </div>
                  })}
                </div> */
}

// employees: [
//   {
//     name: "João das Neves",
//     department: "Vendas",
//     mealVoucher: "944.40",
//     voucher6h: 3,
//     voucher8h: 24,
//     workedHolidays: [12],
//     workedWeekends: [5, 19, 27],
//   },

//   {
//     name: "Amelia Silveira",
//     department: "Suporte",
//     mealVoucher: "944.40",
//     voucher6h: 3,
//     voucher8h: 24,
//     workedHolidays: [12],
//     workedWeekends: [5, 19, 27],
//   },
// ],

// employees: [
//   {
//     name: "João das Neves",
//     department: "Vendas",
//     mealVoucher: "1944.40",
//     voucher6h: 3,
//     voucher8h: 24,
//     workedHolidays: [12],
//     workedWeekends: [5, 19, 27],
//   },

//   {
//     name: "Amelia Silveira",
//     department: "Suporte",
//     mealVoucher: "2944.40",
//     voucher6h: 4,
//     voucher8h: 24,
//     workedHolidays: [],
//     workedWeekends: [5, 13, 19, 27],
//   },

{
  /* <Box className="meal-voucher-period-box" style={{paddingTop: '2%'}}>
        {periods.map((period) => {
          return (
            <div
              style={{
                border: "2px dashed red",
                display: "flex",
                marginBottom: "2%",
                width: "60%",
                justifyContent:'space-between',
                paddingRight:'1%'
              }}
            >
              <div style={{ alignSelf: "flex-end", border:'1px solid yellow' }}>Competência: {period.period}</div>
              <div style={{ alignSelf: "flex-end", border:'1px solid white' }}>
                Custo total: {period.totalMealVoucher}
              </div>
             
            </div>
          );
        })}
      </Box> */
}
