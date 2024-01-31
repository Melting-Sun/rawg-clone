import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/-JTt60iX_400x400.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}
