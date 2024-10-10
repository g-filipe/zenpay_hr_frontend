import React/*, { useState }*/ from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import MealVoucherForm from "./MealVoucherForm";
import { MealVoucherInfo } from "../../types/types";

interface MealVoucherModalProps {
  employees: { nome: string; cpf: string; setor: string }[];
  onSubmit: (mealVoucher: MealVoucherInfo) => void;
}

const MealVoucherModal: React.FC<MealVoucherModalProps> = ({ employees, onSubmit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (mealVoucher: MealVoucherInfo) => {
    onSubmit(mealVoucher);
    // setSubmitted(true); // Marca como enviado após o submit
    onClose(); // Fecha o modal após o envio
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="purple">
        Abrir Formulário de Vales
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Vale Alimentação</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MealVoucherForm employees={employees} onSubmit={handleSubmit} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MealVoucherModal;
