import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import "../styles/Report.css";
import PieChartComponent from "../components/PieChart";
import { useState } from "react";
import { formatForBrazilianReal } from "../utils/formatterforBrazilianReal";

const totalCost = 35855.23;
const departments = [
  {
    name: "Afiliados",
    leader: "Renata da Silva",
    employeeAmount: 11,
    mealVoucherCost: totalCost * 0.108,
  },
  {
    name: "Suporte",
    leader: "Carlos Menezes",
    employeeAmount: 5,
    mealVoucherCost: totalCost * 0.0615,
  },
  {
    name: "Vendas",
    leader: "Ana Paula Rocha",
    employeeAmount: 6,
    mealVoucherCost: totalCost * 0.1088,
  },
  {
    name: "Gente e Gestão",
    leader: "Marta Ribeiro",
    employeeAmount: 5,
    mealVoucherCost: totalCost * 0.0877,
  },
  {
    name: "Tecnologia",
    leader: "Rafael Duarte",
    employeeAmount: 7,
    mealVoucherCost: totalCost * 0.12,
  },
  {
    name: "Marketing",
    leader: "Juliana Tavares",
    employeeAmount: 9,
    mealVoucherCost: totalCost * 0.1801,
  },
  {
    name: "Financeiro",
    leader: "Fernanda Lemos",
    employeeAmount: 6,
    mealVoucherCost: totalCost * 0.1969,
  },
  {
    name: "Planejamento",
    leader: "Marcelo Souza",
    employeeAmount: 3,
    mealVoucherCost: totalCost * 0.1369,
  },
];

const Report = () => {
  const { period } = useParams();
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);

  const handlePieClick = (event, index) => {
    setSelectedDepartment(departments[index]);
  };

  return (
    <Box maxW="100%" mx="auto">
      <Header />
      <Heading as="h1" size="lg" mb={4} style={{ marginTop: "2%" }}>
        Relatório Vale Alimentação
      </Heading>
      <div className="report-box1">
        <div className="meal-voucher-box">
          <div className="show-report">
            <Text>Competência: {period}</Text>
            <Text>Custo Total: {formatForBrazilianReal(totalCost)}</Text>
          </div>
          <div
            className="div-pai"
            style={{
              width: "100%",
              display: "flex",
              margin: "0% 2%",
              justifyContent: "space-between",
            }}
          >
            <PieChartComponent onSliceClick={handlePieClick} />

            <div
              style={{
                borderLeft: "0.1rem solid gray",
                width: "30%",
              }}
            >
              <VStack align="start" spacing={2} style={{ marginTop: "8%" }}>
                <Text fontWeight="bold" fontSize="1.5rem">
                  {selectedDepartment.name}
                </Text>
                <Text fontSize="1.2rem">
                  <strong>Liderança:</strong> {selectedDepartment.leader}
                </Text>
                <Text fontSize="1.2rem">
                  <strong>Colaboradores: </strong>
                  {selectedDepartment.employeeAmount}
                </Text>
                <Text fontSize="1.2rem">
                  <strong>Custo:</strong>
                  {formatForBrazilianReal(selectedDepartment.mealVoucherCost)}
                </Text>
              </VStack>
              <div
                className="button-box"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10%",
                  justifyContent: "space-around",
                  height: "30%",
                  alignItems: "center",
                }}
              >
                {/* <MealVoucherModal employees={employees} onSubmit={() => ""} /> */}
                <Button style={{ width: "60%" }}
                onClick={() => {
                  
                }}>Detalhes</Button>
                <Button style={{ width: "60%" }}>Gerar Relatório</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Report;
