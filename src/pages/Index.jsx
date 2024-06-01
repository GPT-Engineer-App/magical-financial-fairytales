import { Container, Text, VStack, Heading, Box, Button, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Financial Fairytales
        </Heading>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBncm93dGh8ZW58MHx8fHwxNzE3MjczNTIwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Financial Growth" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Welcome to Financial Fairytales, where we turn your financial dreams into reality. Explore our resources and start your journey towards financial freedom today!
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
