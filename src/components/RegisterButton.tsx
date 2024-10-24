import { Button as ChakraButton } from "@chakra-ui/react";
import { ReactNode } from "react";

interface RegisterButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ onClick, children }) => {
  return (
    <ChakraButton
      className="register-btn"
      style={{ marginTop: "10px" }}
      colorScheme="purple"
      onClick={onClick}
    >
      {children}
    </ChakraButton>
  );
};

export default RegisterButton;
