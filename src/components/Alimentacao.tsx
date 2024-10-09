import { Box, Heading, Text } from '@chakra-ui/react';
import Header from './Header';

const Alimentacao: React.FC = () => {
  return (
    <Box maxW="100%" mx="auto">
      <Header />
      <Heading as="h1" size="lg" mb={4} style={{marginTop:"3%"}}>
        Benefícios de Alimentação
      </Heading>
      <Text style={{marginTop:"3%"}}>Aqui você encontrará informações sobre os benefícios de Vale Alimentação e Vale Refeição.</Text>
    </Box>
  );
};

export default Alimentacao;
