import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

export default function SortSelector() {
    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
           order by relevence
          </MenuButton>
          <MenuList>
           <MenuItem>1</MenuItem>
           <MenuItem>2</MenuItem>
           <MenuItem>3</MenuItem>
           <MenuItem>4</MenuItem>
           <MenuItem>5</MenuItem>
           <MenuItem>6</MenuItem>
          </MenuList>
        </Menu>
      );
}
