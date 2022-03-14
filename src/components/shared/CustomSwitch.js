import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Switch } from '@chakra-ui/switch'

export function CustomSwitch(props) {
  return (
    <FormControl display="flex" alignItems="center" >
      <Switch colorScheme="green" me="10px" {...props} />
      <FormLabel htmlFor={props.id} mb="0" ms="1" fontWeight="normal">
        {props.label}
      </FormLabel>
    </FormControl>
  )
}
