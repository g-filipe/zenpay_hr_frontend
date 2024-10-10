import { Box, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import "../styles/Reports.css";

const Relatorio: React.FC = () => {
  return (
    <Box maxW="100%" mx="auto">
      <Header />
      <Heading as="h1" size="lg" mb={4} style={{ marginTop: "3%" }}>
      Relatórios de Pagamento
      </Heading>
      <body>
        <div className="report-box">
          <div className="benefit-box">
            <img
              className="benefit-icon"
              src="src/assets/meal-voucher.png"
              alt="meal-voucher"
            />
            <p>Vale Alimentação/Refeição</p>
          </div>
          <div className="benefit-box">
            <img
              className="benefit-icon"
              src="src/assets/bonus.png"
              alt="meal-voucher"
            />
            <p>Comissões/Bônus</p>
          </div>
          <div className="benefit-box">
          <img
              className="benefit-icon"
              src="src/assets/passport-real.png"
              alt="meal-voucher"
            />
            <p>Comissões/Bônus</p>
          </div>
        </div>
      </body>
    </Box>
  );
};

export default Relatorio;
