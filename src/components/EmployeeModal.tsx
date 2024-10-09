import { Modal, ModalOverlay, ModalContent, /*ModalHeader,*/ ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
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
        <ModalBody style={{ paddingTop: '40px' }}>
          <EmployeeForm onSubmit={onSubmit} />
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EmployeeModal;
