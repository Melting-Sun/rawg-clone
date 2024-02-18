import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/-JTt60iX_400x400.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchTerm: string) => void 
}

export default function NavBar({ onSearch }: Props) {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
      </HStack>
    </>
  );
}
