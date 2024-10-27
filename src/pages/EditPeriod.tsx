import { useEffect, useState } from "react";
import Header from "../components/Header";
import DatePicker from "react-multi-date-picker";
import { Period } from "../types/types";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import MealVoucherModal from "../components/mealVoucher/MealVoucherModal";
import PeriodItem from "../components/mealVoucher/Period";
import "../styles/MealVoucher.css";
import { FaUserPlus } from "react-icons/fa";
import { formatForBrazilianReal } from "../utils/formatterforBrazilianReal";

const EditMealVoucherPeriod = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [periods, setPeriods] = useState<Period[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setPeriods(getEmployeesByPeriod(month, year));
  }, [year]);

  return (
    <>
      <Header />
      <div className="show-report">
        <Text>Competência: {period}</Text>
        <Text>Custo Total: {formatForBrazilianReal(totalCost)}</Text>
      </div>
      <div className="meal-voucher-page">
        <Box mt={8}>
          <Flex gap={8}>
            <Button /*onClick={onOpenAddEmployee}*/>
              <FaUserPlus />
            </Button>
          </Flex>
        </Box>

        <MealVoucherModal
          employees={employees}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={() => ""}
        />
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

export default EditMealVoucherPeriod;
