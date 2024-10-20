import { useEffect, useState } from "react";
import Header from "../components/Header";
import DatePicker from "react-multi-date-picker";
import { Period } from "../types/types";
import "../styles/MealVoucher.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const MealVoucher = () => {
  const navigate = useNavigate();
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
                <Button size="sm" onClick={() => navigate(`/relatorios/alimentacao/${period.period.replace('/','-')}`)}>
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
