import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

interface EmployeeSelectProps {
  employees: { nome: string; cpf: string; setor: string }[];
  value: string;
  onChange: (value: string) => void;
}

const EmployeeSelect: React.FC<EmployeeSelectProps> = ({ employees, value, onChange }) => {
  return (
    <FormControl>
      <FormLabel>Funcionário</FormLabel>
      <Select value={value} onChange={(e) => onChange(e.target.value)} placeholder="Selecione o funcionário">
        {employees.map((employee) => (
          <option key={employee.cpf} value={employee.nome}>
            {employee.nome} - {employee.setor} - {employee.cpf}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default EmployeeSelect;
