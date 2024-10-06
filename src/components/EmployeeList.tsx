import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../styles/EmployeeList.css';

interface Employee {
  nome: string;
  cpf: string;
  setor: string;
  jornada: string;
  escala: string;
  contrato: string;
}

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  const [expandedEmployee, setExpandedEmployee] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpandedEmployee((prevName) => (prevName === name ? null : name));
  };

  return (
    <Box mt={8}>
      {employees.map((emp, index) => (
        <Box key={index} mb={4} p={4} borderWidth="1px" borderRadius="md">
          <Flex justifyContent="space-between" alignItems="center">
            <Flex gap={8}>
              <Text><strong>Nome:</strong> {emp.nome}</Text>
              <Text><strong>Setor:</strong> {emp.setor}</Text>
              <Text><strong>Escala:</strong> {emp.escala}</Text>
            </Flex>
            <Button size="sm" onClick={() => toggleExpand(emp.nome)}>
              {expandedEmployee === emp.nome ? 'Ocultar' : 'Ver Mais'}
            </Button>
          </Flex>

          {expandedEmployee === emp.nome && (
            <Flex mt={2} gap={8}>
              <Text><strong>Jornada:</strong> {emp.jornada}</Text>
              <Text><strong>Contrato:</strong> {emp.contrato}</Text>
            </Flex>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default EmployeeList;
