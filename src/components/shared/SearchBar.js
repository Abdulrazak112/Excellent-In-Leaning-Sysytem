import { Search2Icon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/input";

export function SearchBar(props) {
	const {
    placeholder = "Search",
    filterText = "",
    onFilterTextChange = (f) => f,
    _ref = null,
  } = props;
	
  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };
	
  return (
    <InputGroup mb='5'>
      <InputLeftElement 
        pointerEvents="none"
        children={<Search2Icon color="gray.300" />}
      />
      <Input type="text"
	   	ref={_ref}
        name="filterText"
        value={filterText}
        onChange={handleFilterTextChange}
        type="text"
        placeholder={placeholder}
        {...props}
	  />
    </InputGroup>
  )
}
