import { Button as ChakraButton } from "@chakra-ui/react";
import { ReactNode } from "react";

interface RegisterButtonProps {
  children: ReactNode;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ children }) => {
  return (
    <ChakraButton
      className="register-btn"
      style={{ marginTop: "10px" }}
      colorScheme="purple"
    >
      {children}
    </ChakraButton>
  );
};

export default RegisterButton;
