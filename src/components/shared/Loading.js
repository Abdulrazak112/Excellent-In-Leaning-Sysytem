import { Flex } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'

function Loading() {
  return (
    <Flex direction="row">
      <Spinner /> <span>PLEASE WAIT</span>
    </Flex>
  )
}

export default Loading
