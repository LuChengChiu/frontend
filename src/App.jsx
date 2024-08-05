import {
  Center,
  Image,
  HStack,
  Text,
  VStack,
  Flex,
  keyframes,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import mysteryBox from "/mybox.png";
import bone from "/bone.png";
import clothes from "/clothes.png";
import nerve from "/brain.png";
import counter from "/counter.png";
import ListBlock from "./list-block";

export default function App() {
  const htmlDescription = [
    "The basic structure of the website.",
    "Playing the same role as the skeleton of the human body.",
    "Provide content and Interactivity.",
  ];
  const cssDescription = [
    "Define the visual of the website",
    "Playing the same role as the skin or clothing for human.",
    "Improve the User Experience while watching.",
  ];
  const jsDecscription = [
    "Playing the similar role as the nerve of human body.",
    "Create more functionality & interactivity. e.g. Call data from database, Storing data, etc.",
  ];

  const floatingAnimation = keyframes`0% { transform: translateY(-5px) } 50% { transform: translateY(12px) } 100% { transform: translateY(-5px); }`;
  return (
    <Center
      as={VStack}
      w="100dvw"
      h="100dvh"
      pl="5%"
      bgImg="linear-gradient(to top, #6a11cb 0%, #2575fc 100%)"
    >
      <VStack w="75%" h="90%" rounded="2xl" justifyContent="space-between">
        <HStack w="100%" h="24%">
          <Flex w="20%" h="100%" p="5px" rounded="25px">
            <Image
              src={mysteryBox}
              animation={`${floatingAnimation} 3s ease-in-out infinite`}
            />
          </Flex>
          <VStack
            w="75%"
            h="100%"
            bgImg="linear-gradient(225deg, #89f7fe 0%, #66a6ff 100%)"
            color="#FFF"
            rounded="25px"
            justifyContent="center"
            spacing={0}
          >
            <Text fontSize="50px" fontWeight="500">
              What is Front-End?
            </Text>
            <Text fontSize="27px">
              {`The interface you're watching now is Front-End.`}
            </Text>
          </VStack>
        </HStack>
        <HStack w="100%" h="74%" spacing={3}>
          <VStack
            w="42%"
            h="100%"
            p="10px 15px"
            color="#FFF"
            spacing={0}
            rounded="25px"
            bgImg="linear-gradient(45deg, #89f7fe 0%, #66a6ff 100%)"
            justifyContent="space-between"
            zIndex="2"
          >
            <Text mt="20px" fontSize="23px" fontWeight="600">
              Practical Example - Store Clerk
            </Text>
            <VStack spacing="2px" justifyContent="start" alignItems="start">
              <Text fontSize="19px">
                <Text
                  as="span"
                  w="105px"
                  display="inline-block"
                  textAlign="right"
                  fontWeight="600"
                >
                  HTML
                </Text>{" "}
                <ArrowForwardIcon /> Have a counter
              </Text>
              <Text fontSize="19px">
                <Text
                  as="span"
                  w="105px"
                  display="inline-block"
                  textAlign="right"
                  fontWeight="600"
                >
                  CSS
                </Text>
                {"  "} <ArrowForwardIcon /> Nice Looking Counter
              </Text>
              <Text fontSize="19px">
                <Text
                  as="span"
                  w="105px"
                  display="inline-block"
                  textAlign="right"
                  fontWeight="600"
                >
                  JavaScript
                </Text>{" "}
                <ArrowForwardIcon />
                Well serve clerk
              </Text>
            </VStack>
            <Image src={counter} maxH="70%" />
          </VStack>
          <VStack
            w="58%"
            h="100%"
            rounded="25px"
            justifyContent="start"
            alignItems="start"
          >
            <ListBlock img={bone} title="HTML" description={htmlDescription} />
            <ListBlock
              img={clothes}
              title="CSS"
              description={cssDescription}
              reverse={true}
            />
            <ListBlock
              img={nerve}
              title="JavaScript"
              description={jsDecscription}
            />
          </VStack>
        </HStack>
      </VStack>
    </Center>
  );
}
