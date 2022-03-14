import { Button } from "@chakra-ui/button";

export function CustomButton(props) {
  return (
    <Button
    //   fontSize="10px"
      type="submit"
      bg="green.500"
      w="100%"
      h="45"
      mb="20px"
      color="white"
      mt="20px"
      _hover={{
        bg: 'green.800',
      }}
      _active={{
        bg: 'green.400',
      }}
      loadingText="PLEASE WAIT..."
      {...props}
    >
      {props.children}
    </Button>
  )
}
