import { Box, Heading } from '@chakra-ui/react';
import Header from '../components/Header';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <Box maxW="100%" mx="auto">
      <Header />
      {/* <Heading as="h1" size="lg" mb={4} style={{ marginTop: "3%" }}>
        Relatórios de Pagamento
      </Heading> */}

      <div className="home-box" style={{  }}>
        <div className="content-box">
          <img className="content-icon" src="src/assets/meal-voucher.png" alt="meal-voucher" />
          <p>Vale Alimentação/Refeição</p>
        </div>

        <div className="content-box">
          <img className="content-icon" src="src/assets/bonus.png" alt="bonus" />
          <p>Comissões/Bônus</p>
        </div>

        <div className="content-box">
          <img className="content-icon" src="src/assets/passport-real.png" alt="passport-real" />
          <p>Passaporte Real</p>
        </div>

        <div className="content-box">
          <img className="content-icon" src="src/assets/add-employee.png" alt="add-employee" />
          <p>Colaboradores</p>
        </div>
      </div>
    </Box>
  );
};

export default Home;
