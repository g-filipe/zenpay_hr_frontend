import { Box, Button, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeModal from "./components/EmployeeModal";
import Header from "./components/Header";
import "./App.css";

interface Employee {
  nome: string;
  cpf: string;
  setor: string;
  jornada: string;
  escala: string;
  contrato: string;
}

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleAddEmployee = (newEmployee: Employee) => {
    setEmployees([...employees, newEmployee]);
    toast({
      title: "Funcionário registrado.",
      description: `Funcionário ${newEmployee.nome} foi registrado com sucesso.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Box maxW="100%" mx="auto">
      <Header />
      <div className="newEmployeeBtn">
        <Button className="newEmployee" colorScheme="purple" onClick={onOpen}>
          Novo Funcionário
        </Button>
      </div>
      <EmployeeModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleAddEmployee}
      />
      <EmployeeList employees={employees} />
    </Box>
  );
};

export default App;
