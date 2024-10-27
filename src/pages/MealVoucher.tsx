import { useEffect, useState } from "react";
import Header from "../components/Header";
import DatePicker from "react-multi-date-picker";
import { Period } from "../types/types";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import MealVoucherModal from "../components/mealVoucher/MealVoucherModal";
import PeriodItem from "../components/mealVoucher/Period";
import "../styles/MealVoucher.css";

const MealVoucher = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [periods, setPeriods] = useState<Period[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setPeriods(getPeriodsByYear(year));
  }, [year]);

  return (
    <>
      <Header />
      {/* <h1>Gerenciamento de Vales Alimentação</h1> */}
      <div className="meal-voucher-page">
      <DatePicker
        value={new Date(year, 0, 1)}
        onlyYearPicker
        render={<Button className="btn-year">{year}</Button>}
        onChange={(selectedDate) => {
          setYear(selectedDate!.year);
        }}
      ></DatePicker>
      <MealVoucherModal
        employees={employees}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={() => ""}
      />

      <Box mt={8}>
        {periods.map((period, index) => {
          return (
            <PeriodItem
              key={index}
              period={period}
              onOpenAddEmployee={onOpen}
            />
          );
        })}
      </Box>
      </div>
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

export const employees = [
  {
    nome: "Ana Silva",
    cpf: "123.456.789-00",
    setor: "Financeiro",
  },
  {
    nome: "Bruno Santos",
    cpf: "987.654.321-11",
    setor: "TI",
  },
  {
    nome: "Carlos Oliveira",
    cpf: "456.789.123-22",
    setor: "Vendas",
  },
  {
    nome: "Diana Costa",
    cpf: "321.654.987-33",
    setor: "Gente e Gestão",
  },
];

export default MealVoucher;
