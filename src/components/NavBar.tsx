import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/-JTt60iX_400x400.jpg";

export default function NavBar() {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>NavBar</Text>
      </HStack>
    </>
  );
}
