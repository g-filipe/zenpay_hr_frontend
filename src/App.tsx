import { Box, Button, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeModal from './components/EmployeeModal';

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
      title: 'Funcionário registrado.',
      description: `Funcionário ${newEmployee.nome} foi registrado com sucesso.`,
      status: 'success',
      duration: 5000,
      isClosable: true
    });
    onClose();
  };

  return (
    <Box maxW="800px" mx="auto" mt={4}>
      <Button colorScheme="purple" onClick={onOpen} position="absolute" top={4} right={4}>
        Novo Funcionário
      </Button>
      <EmployeeModal isOpen={isOpen} onClose={onClose} onSubmit={handleAddEmployee} />
      <EmployeeList employees={employees} />
    </Box>
  );
};

export default App;
