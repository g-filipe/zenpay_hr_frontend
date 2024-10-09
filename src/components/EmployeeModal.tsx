import { Modal, ModalOverlay, ModalContent, /*ModalHeader,*/ ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import React from 'react';
import EmployeeForm from './EmployeeForm';
import { Employee } from './EmployeeForm'
import '../styles/EmployeeModal.css';

interface EmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (employee: Employee) => void;
}

const EmployeeModal: React.FC<EmployeeModalProps> = ({ isOpen, onClose, onSubmit }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
     
        <ModalCloseButton />
        <ModalBody>
          <EmployeeForm onSubmit={onSubmit} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="purple" width="full" onClick={onClose}>
            Cadastrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EmployeeModal;
