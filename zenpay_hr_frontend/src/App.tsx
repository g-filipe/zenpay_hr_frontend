import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Grid,
  GridItem,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@chakra-ui/react';

import React, { useState } from 'react';
import './index.css';
import './EmployeeRegistration.css';

interface Employee {
  nome: string;
  cpf: string;
  setor: string;
  jornada: string;
  escala: string;
  contrato: string;
}

const EmployeeRegistration: React.FC = () => {
  const [employee, setEmployee] = useState<Employee>({
    nome: '',
    cpf: '',
    setor: '',
    jornada: '',
    escala: '',
    contrato: ''
  });
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [expandedEmployee, setExpandedEmployee] = useState<string | null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    setEmployees([...employees, employee]);
    toast({
      title: 'Funcionário registrado.',
      description: `Funcionário ${employee.nome} foi registrado com sucesso.`,
      status: 'success',
      duration: 5000,
      isClosable: true
    });
    setEmployee({
      nome: '',
      cpf: '',
      setor: '',
      jornada: '',
      escala: '',
      contrato: ''
    });
    onClose();
  };

  const toggleExpand = (name: string) => {
    setExpandedEmployee((prevName) => (prevName === name ? null : name));
  };

  return (
    <Box maxW="800px" mx="auto" mt={4}>
      <Button colorScheme="purple" onClick={onOpen} position="absolute" top={4} right={4}>
        Novo Funcionário
      </Button>

      {/* Modal de cadastro */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Funcionário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem colSpan={[2, 1]}>
                <FormControl id="nome">
                  <FormLabel>Nome</FormLabel>
                  <Input
                    name="nome"
                    value={employee.nome}
                    onChange={handleInputChange}
                    placeholder="Nome do funcionário"
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={[2, 1]}>
                <FormControl id="cpf">
                  <FormLabel>CPF</FormLabel>
                  <Input
                    name="cpf"
                    value={employee.cpf}
                    onChange={handleInputChange}
                    placeholder="000.000.000-00"
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={[2, 1]}>
                <FormControl id="setor">
                  <FormLabel>Setor</FormLabel>
                  <Select
                    name="setor"
                    value={employee.setor}
                    onChange={handleInputChange}
                    placeholder="Selecione o setor"
                  >
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
                  <Select
                    name="jornada"
                    value={employee.jornada}
                    onChange={handleInputChange}
                    placeholder="Selecione a jornada"
                  >
                    <option value="6h">6h</option>
                    <option value="8h">8h</option>
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem colSpan={[2, 1]}>
                <FormControl id="escala">
                  <FormLabel>Escala</FormLabel>
                  <Select
                    name="escala"
                    value={employee.escala}
                    onChange={handleInputChange}
                    placeholder="Selecione a escala"
                  >
                    <option value="5x2">5x2</option>
                    <option value="6x1">6x1</option>
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem colSpan={[2, 1]}>
                <FormControl id="contrato">
                  <FormLabel>Contrato</FormLabel>
                  <Select
                    name="contrato"
                    value={employee.contrato}
                    onChange={handleInputChange}
                    placeholder="Selecione o contrato"
                  >
                    <option value="Estágio">Estágio</option>
                    <option value="CLT">CLT</option>
                  </Select>
                </FormControl>
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" onClick={handleSubmit} width="full">
              Cadastrar Funcionário
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Lista de funcionários */}
      <Box mt={8}>
        {employees.map((emp, index) => (
          <Box key={index} mb={4} p={4} borderWidth="1px" borderRadius="md">
            <Box display="flex" justifyContent="space-between">
              <Box>
                <strong>Nome:</strong> {emp.nome}
              </Box>
              <Button size="sm" onClick={() => toggleExpand(emp.nome)}>
                {expandedEmployee === emp.nome ? 'Ocultar' : 'Ver Mais'}
              </Button>
            </Box>
            <Box mt={2}>
              <strong>Setor:</strong> {emp.setor}
            </Box>
            <Box>
              <strong>Escala:</strong> {emp.escala}
            </Box>

            {expandedEmployee === emp.nome && (
              <Box mt={2}>
                <Box>
                  <strong>Jornada:</strong> {emp.jornada}
                </Box>
                <Box>
                  <strong>Contrato:</strong> {emp.contrato}
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EmployeeRegistration;
