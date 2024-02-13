import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export default function GameCardContainer({ children }: Props) {
  return (
    <Box width='230px' borderRadius={10} overflow='hidden'>
        {children}
    </Box>
    )
}
