import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { Box, Text, FormControl, Select, Collapse, Button, Tooltip } from '@chakra-ui/react';
import { formatForBrazilianReal } from '../utils/formatterforBrazilianReal';

import '../styles/ReportPerDepartment.css';

const totalCost = 35855.23;
const departments = [
  { name: 'Afiliados', leader: 'Renata da Silva', employeeAmount: 11, mealVoucherCost: totalCost * 0.108 },
  { name: 'Suporte', leader: 'Carlos Menezes', employeeAmount: 5, mealVoucherCost: totalCost * 0.0615 },
  { name: 'Vendas', leader: 'Ana Paula Rocha', employeeAmount: 6, mealVoucherCost: totalCost * 0.1088 },
  { name: 'Gente e Gestão', leader: 'Marta Ribeiro', employeeAmount: 5, mealVoucherCost: totalCost * 0.0877 },
  { name: 'Tecnologia', leader: 'Rafael Duarte', employeeAmount: 7, mealVoucherCost: totalCost * 0.12 },
  { name: 'Marketing', leader: 'Juliana Tavares', employeeAmount: 9, mealVoucherCost: totalCost * 0.1801 },
  { name: 'Financeiro', leader: 'Fernanda Lemos', employeeAmount: 6, mealVoucherCost: totalCost * 0.1969 },
  { name: 'Planejamento', leader: 'Marcelo Souza', employeeAmount: 3, mealVoucherCost: totalCost * 0.1369 },
];

const octoberHolidays = [
  {
    holidayDate: '12/10',
    holidayName: 'Nossa Senhora Aparecida',
  },
  // {
  //   holidayDate: '12/10',
  //   holidayName: 'Nossa Senhora Aparecida',
  // },
];

const octoberWeekends = [
  {
    date: '05/10',
    day: 'Sábado',
  },
  {
    date: '20/10',
    day: 'Domingo',
  },
  {
    date: '27/10',
    day: 'Domingo',
  },
];

const employees = [
  {
    name: 'Amanda Silva dos Santos Bezerra',
    department: 'Afiliados',
    workedHolidays: [12],
    workedWeekends: [5, 20, 27],
    unjustifiedAbsences: [],
    unjustifiedAbsencesPreviousMonth: [],
    voucher6h: 3,
    voucher8h: 24,
    mealVoucher: 0,
  },
  {
    name: 'Employee Name 2',
    department: 'Afiliados',
    workedHolidays: [1, 2, 3],
    workedWeekends: [4, 5, 6],
    unjustifiedAbsences: [7, 8, 9],
    unjustifiedAbsencesPreviousMonth: [10, 11, 12],
    mealVoucher: 0,
    voucher6h: 0,
    voucher8h: 0,
  },
];

const ReportPerDepartment = () => {
  const { period } = useParams();
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Box maxW="100%" mx="auto">
      <Header />

      <div className="meal-voucher-department-report-box">
        <div className="show-report-employee">
          <Text>Competência: {period}</Text>
          <Text>Setor: {selectedDepartment.name}</Text>
          <Text>Liderança: {selectedDepartment.leader}</Text>
          <Text>Custo Total: {formatForBrazilianReal(selectedDepartment.mealVoucherCost)}</Text>
        </div>

        <div className="department-employee-info">
          <div className="employee-select">
            <FormControl style={{ width: 'max-content', marginLeft: '1%' }}>
              <Select
                value={selectedEmployee}
                onChange={(e) => setSelectedEmployee(e.target.value)}
                placeholder="Selecione o funcionário"
              >
                {employees.map((employee, index) => (
                  <option key={index} value={employee.name}>
                    {employee.name} - {employee.department}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
          <div 
            style={{ 
              width: '1500px',
              // border: '1px solid red' 
            }}>
            <Box
              // border="solid 2px orange"
              marginTop="3%"
              marginLeft="1.3%"
              display="flex"
              width="35%"
              flexDirection={'column'}
              alignItems="flex-start"
              justifyContent="center"
              lineHeight="40px"
            >
              <Text>Dias Trabalhados: {employees[0].voucher6h + employees[0].voucher8h}</Text>
              <Text>Dias Trabalhados (Peso 6h): {employees[0].voucher6h}</Text>
              <Text>Dias Trabalhados (Peso 8h): {employees[0].voucher8h}</Text>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '500px' }}>
                <Text style={{ marginRight: '3%' }}>Fins de Semana Trabalhados: 3</Text>
                <Demo labelContent={getWorkedWeekeds()} />
              </div>

              <div
                style={{
                  // border: '1px solid pink',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '500px',
                }}
              >
                <Text style={{ marginRight: '3%' }}> Feriados: 1</Text>
                <Demo labelContent={getWorkedHolidays()} />
              </div>

              <div
                style={{
                  // border: '1px solid pink',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '500px',
                }}
              >
                <Text style={{ marginRight: '3%' }}>
                  {' '}
                  Faltas injustificadas: {employees[0].unjustifiedAbsences?.length ?? 0}
                </Text>
                <Demo labelContent={getWorkedHolidays()} />
              </div>

              <div
                style={{
                  // border: '1px solid pink',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '500px',
                }}
              >
                <Text style={{ marginRight: '3%' }}>
                  {' '}
                  Faltas injustificadas Competência anterior: {employees[0].unjustifiedAbsences?.length ?? 0}
                </Text>
                <Demo labelContent={getWorkedHolidays()} />
              </div>
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ReportPerDepartment;

const Demo = ({ labelContent }) => {
  return (
    <Tooltip label={labelContent} placement="right-end">
      <Button style={{ width: '60px', fontSize: '0.65rem' }} variant="outline" size="sm">
        Detalhes
      </Button>
    </Tooltip>
  );
};

function getWorkedHolidays() {
  return octoberHolidays.map((holiday, index) => (
    <Text key={index}>
      {holiday.holidayName} - {holiday.holidayDate}
      <hr />
    </Text>
  ));
}
function getWorkedWeekeds() {
  return octoberWeekends.map((weekend, index) => (
    <Text key={index}>
      {weekend.day} - {weekend.date}
      <hr />
    </Text>
  ));
}

function getTotalMealVoucherPerEmployee(mealVoucher6h: number, mealVoucher8h: number) {
  const value6h = 22;
  const value8h = 36.6;

  return mealVoucher6h * value6h + mealVoucher8h + value8h;
}
