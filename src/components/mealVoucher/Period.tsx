import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Period } from '../../types/types';
import { FaUserEdit } from 'react-icons/fa';
import { TbReportSearch } from 'react-icons/tb';

type PeriodItemProps = {
  period: Period;
};

const PeriodItem = ({ period }: PeriodItemProps) => {
  const navigate = useNavigate();

  const periodStr = period.period.replace('/', '-');

  const urlEditPeriod = `/alimentacao/${periodStr}`;
  const urlReport = `/alimentacao/${periodStr}/relatorio`;

  return (
    <Box mb={4} p={4} borderWidth="1px" borderRadius="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex gap={8}>
          <Text>
            <strong>Competência</strong> {period.period}
          </Text>
          <Text>
            <strong>Custo Total</strong> {period.totalMealVoucher}
          </Text>
        </Flex>
        {/* <FaRegEdit size="1.3em"/> */}
        <Flex gap={6}>
          <Button onClick={() => navigate(urlEditPeriod)} size="sm">
            <Flex gap={1.5} alignItems="center">
              <FaUserEdit /> Colaboradores
            </Flex>
          </Button>
          <Button size="sm" onClick={() => navigate(urlReport)}>
            <Flex gap={1.5} alignItems="center">
              <TbReportSearch /> Relatório
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PeriodItem;
