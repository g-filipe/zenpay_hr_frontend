import React /*, { useState }*/ from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import MealVoucherForm from './MealVoucherForm';
import { Employee } from '../../types/types';
import '../../styles/EmployeeModal.css';

interface MealVoucherModalProps {
  employees: { nome: string; cpf: string; setor: string }[];
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (mealVoucher: Employee) => void;
}

const MealVoucherModal = ({
  employees,
  onSubmit,
  isOpen,
  onClose,
}) => {
  // const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (mealVoucher: Employee) => {
    onSubmit(mealVoucher);
    // setSubmitted(true); // Marca como enviado após o submit
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="700px">
          <ModalHeader>Cadastrar Vale Alimentação</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MealVoucherForm employees={employees} onSubmit={handleSubmit} />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MealVoucherModal;
