import { Search2Icon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/input";

export function SearchBar(props) {
  return (
    <InputGroup mb='5'>
      <InputLeftElement 
        pointerEvents="none"
        children={<Search2Icon color="gray.300" />}
      />
      <Input type="text" placeholder={props.placeholder} />
    </InputGroup>
  )
}
