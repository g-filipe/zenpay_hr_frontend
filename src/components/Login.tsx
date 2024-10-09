import { Box, Button, FormControl, FormLabel, Input, Heading, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo'; // Importando a Logo
import '../styles/Login.css';

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // Hook para navegação

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    // Simulação de login bem-sucedido
    if (loginData.username === 'user' && loginData.password === 'password') {
      navigate('/cadastro'); // Redirecionar para a página de cadastro
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Logo /> {/* Adicionando o componente Logo */}
      <Box className="login-form" p={8} maxW="400px" borderWidth="1px" borderRadius="md">
        <Heading as="h1" size="lg" mb={6} textAlign="center">
          Login
        </Heading>
        <FormControl id="username" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            name="username"
            value={loginData.username}
            onChange={handleInputChange}
            placeholder="Digite seu email"
          />
        </FormControl>
        <FormControl id="password" mb={6}>
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            placeholder="Digite sua senha"
          />
        </FormControl>
        <Button colorScheme="purple" onClick={handleSubmit} width="full">
          Entrar
        </Button>
      </Box>
    </Flex>
  );
};

export default Login;
