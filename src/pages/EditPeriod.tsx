import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Employee } from '../types/types';
import { Box, Button, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import '../styles/MealVoucher.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FaRegEdit, FaUser, FaUserPlus } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { TbReportSearch } from 'react-icons/tb';
import { formatPeriodBr } from '../utils/utils';
import MealVoucherModal from '../components/mealVoucher/MealVoucherModal';

const EditMealVoucherPeriod = () => {
  const { period } = useParams();
  const navigate = useNavigate();

  const [employees, setEmployees] = useState<Employee[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const urlReport = `/alimentacao/${period}/relatorio`;

  useEffect(() => {
    console.log(getEmployeesByPeriod(period!));
    setEmployees(getEmployeesByPeriod(period!));
  }, []);

  return (
    <>
      <Header />
      <Box p="0 1%">
        <Heading as="h1" size="lg" mt={6} mb={6}>
          {formatPeriodBr(period!)}
        </Heading>

        <Flex justifyContent="center" mb={6} gap={8}>
          <Button onClick={onOpen}>
            <Flex gap={1.5} alignItems="center">
              <FaUserPlus /> Adicionar Funcionário
            </Flex>
          </Button>

          <Button onClick={() => navigate(urlReport)}>
            <Flex gap={1.5} alignItems="center">
              <TbReportSearch /> Ver relatório
            </Flex>
          </Button>
        </Flex>

        {employees.map((employee, i) => (
          <EmployeeItem employee={employee} key={i} />
        ))}
      </Box>

      <MealVoucherModal employees={employees} isOpen={isOpen} onClose={onClose} onSubmit={() => ''} />
    </>
  );
};

type EmployeeItemProps = {
  employee: Employee;
};

const EmployeeItem = ({ employee }: EmployeeItemProps) => {
  return (
    <>
      <Box mb={4} p={4} borderWidth="1px" borderRadius="md">
        <Flex justifyContent="space-between" alignItems="center">
          <Flex gap={1} direction="column">
            <Flex alignItems="center">
              <FaUser /> &nbsp; <strong> {employee.name} </strong>
            </Flex>
            <Flex gap={8}>
              <Box>
                Departamento: <strong> {employee.department} </strong>
              </Box>
            </Flex>
          </Flex>
          <Flex gap={6}>
            <Button onClick={() => {alert('🐗'.repeat(Math.random()*100+1))}} size="sm">
              <Flex gap={1.5} alignItems="center">
                <FaRegEdit /> Editar
              </Flex>
            </Button>
            <Button onClick={() => {alert('🐗'.repeat(Math.random()*100+1))}} size="sm">
              <Flex gap={1.5} alignItems="center">
                <FaRegTrashCan /> Remover
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

function getEmployeesByPeriod(period: string): Employee[] {
  return [
    {
      name: 'Employee Name 1',
      department: 'Test',
      workedHolidays: [1, 2, 3],
      workedWeekends: [4, 5, 6],
      unjustifiedAbsences: [7, 8, 9],
      unjustifiedAbsencesPreviousMonth: [10, 11, 12],
      mealVoucher: 0,
      voucher6h: 0,
      voucher8h: 0,
    },
    {
      name: 'Employee Name 2',
      department: 'Test',
      workedHolidays: [1, 2, 3],
      workedWeekends: [4, 5, 6],
      unjustifiedAbsences: [7, 8, 9],
      unjustifiedAbsencesPreviousMonth: [10, 11, 12],
      mealVoucher: 0,
      voucher6h: 0,
      voucher8h: 0,
    },
  ];
}

export const employees = [
  {
    nome: 'Ana Silva',
    cpf: '123.456.789-00',
    setor: 'Financeiro',
  },
  {
    nome: 'Bruno Santos',
    cpf: '987.654.321-11',
    setor: 'TI',
  },
  {
    nome: 'Carlos Oliveira',
    cpf: '456.789.123-22',
    setor: 'Vendas',
  },
  {
    nome: 'Diana Costa',
    cpf: '321.654.987-33',
    setor: 'Gente e Gestão',
  },
];

export default EditMealVoucherPeriod;
