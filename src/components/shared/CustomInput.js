import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

export function CustomInput(props) {
  return (
    <FormControl isInvalid={props.isInvalid}>
      <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
        {props.label}
      </FormLabel>
      <Input
        height="10"
        type="text"
        size="lg"
        {...props}
      />
      {props.isInvalid && (
        <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
}
