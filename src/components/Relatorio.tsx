import { Box, Heading, Text } from '@chakra-ui/react';
import Header from './Header';

const Relatorio: React.FC = () => {
  return (
    <Box maxW="100%" mx="auto">
      <Header />
      <Heading as="h1" size="lg" mb={4} style={{marginTop:"3%"}}>
        Relatórios de Pagamento
      </Heading>
      <Text style={{marginTop:"3%"}}>Aqui você encontrará informações sobre os pagamentos de va/vr, comissões, bônus.</Text>
    </Box>
  );
};

export default Relatorio;
