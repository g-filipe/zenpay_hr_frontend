import { useEffect, useState } from "react";
import Header from "../components/Header";
import DatePicker from "react-multi-date-picker";
import { Period } from "../types/types";
import "../styles/MealVoucher.css";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import RegisterButton from "../components/RegisterButton";
import MealVoucherModal from "../components/mealVoucher/MealVoucherModal";

const MealVoucher = () => {
  const navigate = useNavigate();
  const [year, setYear] = useState(new Date().getFullYear());
  const [periods, setPeriods] = useState<Period[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setPeriods(getPeriodsByYear(year));
  }, [year]);

  const employees = [
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

  return (
    <>
      <Header />
      {/* <h1>Gerenciamento de Vales Alimentação</h1> */}
      <DatePicker
        value={new Date(year, 0, 1)}
        onlyYearPicker
        type="button"
        onChange={(selectedDate) => {
          setYear(selectedDate!.year);
        }}
      ></DatePicker>
      <div className="add-meal-voucher">
        <RegisterButton onClick={onOpen}>+ folha de benefícios</RegisterButton>
      </div>
      <MealVoucherModal
        employees={employees}
        isOpen={isOpen}
        onClose={onClose}
 
        onSubmit={() => ''} 
        />
      

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
