import { Box, Button, Collapse, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaRegEdit, FaUserPlus } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";

const PeriodItem = ({ period, onOpenAddEmployee }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box mb={4} p={4} borderWidth="1px" borderRadius="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex gap={8}>
          <Button onClick={handleToggle} size="sm">
            {show ? "-" : "+"}
          </Button>

          <Text>
            <strong>Competência</strong> {period.period}
          </Text>
          <Text>
            <strong>Custo Total</strong> {period.totalMealVoucher}
          </Text>
        </Flex>
        {/* <FaRegEdit size="1.3em"/> */}
        <Flex gap={8}>
          <Button onClick={onOpenAddEmployee}>
            <FaUserPlus />
          </Button>
          <Button
            size="sm"
            onClick={() =>
              navigate(
                `/relatorios/alimentacao/${period.period.replace("/", "-")}`
              )
            }
          >
            Ver relatório
          </Button>
        </Flex>
      </Flex>
      <Collapse in={show}>
        e aew!
        <Box mt={4}></Box>
      </Collapse>
    </Box>
  );
};

export default PeriodItem;
