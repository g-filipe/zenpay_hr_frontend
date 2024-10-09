import { Box, Heading, Text } from '@chakra-ui/react';

const Alimentacao: React.FC = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="lg" mb={4}>
        Benefícios de Alimentação
      </Heading>
      <Text>Aqui você encontrará informações sobre os benefícios de Vale Alimentação e Vale Refeição.</Text>
    </Box>
  );
};

export default Alimentacao;
