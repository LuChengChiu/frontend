import {
  Box,
  Image,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function ListBlock({ img, description, title, reverse }) {
  return (
    <VStack
      h="32%"
      aspectRatio="1/1"
      p="14px 10px"
      bg="white"
      spacing={3}
      alignItems="start"
      alignSelf={reverse && "end"}
      rounded="25px"
      pos="relative"
      // left={!reverse && "70px"}
      left={!reverse && "18%"}
      right={reverse && "18%"}
      // right={reverse && "70px"}
      _hover={{
        rounded: reverse ? "0 25px 25px 0" : "25px 0 0 25px",
        left: !reverse && "0px",
        right: reverse && "0px",
      }}
      sx={{
        transition: "all 350ms ease-in-out",
        "&:hover > .description": {
          opacity: "1",
          translate: reverse ? "-2% 0" : "2% 0",
        },
      }}
    >
      <VStack
        h="100%"
        aspectRatio="1/0.9"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="30px" fontWeight="500">
          {title}
        </Text>
        <Image w="65%" h="65%" src={img} />
      </VStack>{" "}
      <Box
        className="description"
        w="185%"
        h="100%"
        p="15px 10px"
        pl={reverse && "20px"}
        bg="white"
        pos="absolute"
        top="0"
        left={!reverse && "86%"}
        right={reverse && "86%"}
        opacity="0"
        translateX="0"
        sx={{ transition: "all 350ms ease-in-out" }}
        rounded={reverse ? "25px 0 0 25px" : "0 25px 25px 0"}
      >
        <List fontSize="20px">
          {description.map((p, index) => (
            <ListItem key={p + index}>
              <ListIcon as={CheckIcon} color="#2FEB2F" />
              {p}
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
}