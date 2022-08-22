import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Badge,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

const Home = () => {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [result, setResult] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleSelection = (value) => {
    //random value between 1 and 3
    const random = Math.floor(Math.random() * 3);
    const res = (random - value) % 3;
    if (res === 0) {
      setResult("Empate");
    } else if (res === 1) {
      setResult("Ganaste");
      setWins(wins + 1);
    } else {
      setResult("Perdiste");
      setLosses(losses + 1);
    }
  };

  return (
    <>
      <VStack spacing={8} minH="100%">
        <Flex align="center" justify="center" mt="1%">
          <Heading size="lg">Piedra Papel o Tijera 😮</Heading>
        </Flex>
        <Container h="xl">
          <HStack spacing={8} alignItems="center" minH={"full"}>
            <Center>
              <VStack spacing={8} minH="100%" alignItems={"center"}>
                <HStack spacing={8} alignItems="center">
                  <Button
                    colorScheme={"cyan"}
                    variant="outline"
                    onClick={() => {
                      handleSelection(0);
                      onOpen();
                    }}
                    borderRadius="50%"
                    size="50%"
                    boxSize={["50%", "50%"]}
                  >
                    <Image src="papel.png" alt="papel" boxSize="100%" />
                  </Button>
                  <Button
                    colorScheme={"cyan"}
                    variant="outline"
                    onClick={() => {
                      handleSelection(1);
                      onOpen();
                    }}
                    borderRadius="50%"
                    size="50%"
                    boxSize={["50%", "50%"]}
                  >
                    <Image src="piedra.png" alt="piedra" boxSize="100%" />
                  </Button>
                </HStack>
                <Button
                  colorScheme={"cyan"}
                  variant="outline"
                  onClick={() => {
                    handleSelection(2);
                    onOpen();
                  }}
                  borderRadius="50%"
                  size="50%"
                  boxSize={["50%", "50%"]}
                >
                  <Image src="tijeras.png" alt="tijeras" boxSize="100%" />
                </Button>
                <HStack spacing={8} alignItems="center">
                  <Badge colorScheme="green">Wins: {wins}</Badge>
                  <Badge colorScheme="red">Losses: {losses}</Badge>
                </HStack>
              </VStack>
            </Center>
          </HStack>
        </Container>
      </VStack>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Resultado
            </AlertDialogHeader>
            <AlertDialogBody>
              <Text fontSize="lg">{result}</Text>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Home;
