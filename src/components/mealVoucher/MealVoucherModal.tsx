import React/*, { useState }*/ from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import MealVoucherForm from "./MealVoucherForm";
import { MealVoucherInfo } from "../../types/types";
import '../../styles/EmployeeModal.css'

interface MealVoucherModalProps {
  employees: { nome: string; cpf: string; setor: string }[];
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (mealVoucher: MealVoucherInfo) => void;
}

const MealVoucherModal: React.FC<MealVoucherModalProps> = ({ employees, onSubmit, isOpen, onClose }) => {

  // const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (mealVoucher: MealVoucherInfo) => {
    onSubmit(mealVoucher);
    // setSubmitted(true); // Marca como enviado após o submit
    onClose(); // Fecha o modal após o envio
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"700px"}>
          <ModalHeader>Cadastrar Vale Alimentação</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MealVoucherForm employees={employees} onSubmit={handleSubmit} />
          </ModalBody>

          <ModalFooter>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MealVoucherModal;
