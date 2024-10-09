import { Button, FormControl, FormLabel, Input, Select, Grid, GridItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../styles/EmployeeForm.css';

export interface Employee {
  nome: string;
  cpf: string;
  setor: string;
  jornada: string;
  escala: string;
  contrato: string;
}

interface EmployeeFormProps {
  onSubmit: (employee: Employee) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit }) => {
  const [employee, setEmployee] = useState<Employee>({
    nome: '',
    cpf: '',
    setor: '',
    jornada: '',
    escala: '',
    contrato: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(employee);
    setEmployee({
      nome: '',
      cpf: '',
      setor: '',
      jornada: '',
      escala: '',
      contrato: ''
    });
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>

      <GridItem colSpan={[2, 1]}>
        <FormControl id="nome">
          <FormLabel>Nome</FormLabel>
          <Input name="nome" value={employee.nome} onChange={handleInputChange} placeholder="Nome do funcionário" />
        </FormControl>
      </GridItem>

      <GridItem colSpan={[2, 1]}>
        <FormControl id="cpf">
          <FormLabel>CPF</FormLabel>
          <Input name="cpf" value={employee.cpf} onChange={handleInputChange} placeholder="000.000.000-00" />
        </FormControl>
      </GridItem>

      <GridItem colSpan={[2, 1]}>
        <FormControl id="setor">
          <FormLabel>Setor</FormLabel>
          <Select name="setor" value={employee.setor} onChange={handleInputChange} placeholder="Selecione o setor">
            <option value="Gente e Gestão">Gente e Gestão</option>
            <option value="Financeiro">Financeiro</option>
            <option value="TI">TI</option>
            <option value="Planejamento">Planejamento</option>
            <option value="MKT">MKT</option>
            <option value="Vendas">Vendas</option>
            <option value="Suporte">Suporte</option>
            <option value="Afiliados">Afiliados</option>
          </Select>
        </FormControl>
      </GridItem>

      <GridItem colSpan={[2, 1]}>
        <FormControl id="jornada">
          <FormLabel>Jornada</FormLabel>
          <Select name="jornada" value={employee.jornada} onChange={handleInputChange} placeholder="Selecione a jornada">
            <option value="6h">6h</option>
            <option value="8h">8h</option>
          </Select>
        </FormControl>
      </GridItem>

      <GridItem colSpan={[2, 1]}>
        <FormControl id="escala">
          <FormLabel>Escala</FormLabel>
          <Select name="escala" value={employee.escala} onChange={handleInputChange} placeholder="Selecione a escala">
            <option value="5x2">5x2</option>
            <option value="6x1">6x1</option>
          </Select>
        </FormControl>
      </GridItem>

      <GridItem colSpan={[2, 1]}>
        <FormControl id="contrato">
          <FormLabel>Contrato</FormLabel>
          <Select name="contrato" value={employee.contrato} onChange={handleInputChange} placeholder="Selecione o contrato">
            <option value="Estágio">Estágio</option>
            <option value="CLT">CLT</option>
          </Select>
        </FormControl>
      </GridItem>

      <GridItem colSpan={2}>
        <Button style={{ marginTop: '10px' }} colorScheme="purple" onClick={handleSubmit} width="full">
          Cadastrar Funcionário
        </Button>
      </GridItem>
    </Grid>
  );
};

export default EmployeeForm;
