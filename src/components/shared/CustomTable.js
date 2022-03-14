import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import { checkStrEmpty } from 'variables/utils'

function CustomTable(props) {
  const { fields = [], data = [], className = '' } = props
  return (
    <Table variant="simple" size="sm" {...props}>
      <Thead>
        <Tr>
          {fields.map((_item, _idx) => (
            <Th key={_idx}>{_item.title}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, idx) => (
          <Tr key={idx}>
            {fields.map((_item, _idx) => {
              let val = item[_item.value] || ''
              let value_alt = (_item.value_alt && item[_item.value_alt]) || ''
              if (_item.component) {
                return (
                  <Td key={_idx} className={_item.className}>
                    {_item.component(item,idx)}
                  </Td>
                )
              } else {
                return (
                  <Td key={_idx} className={_item.className}>
                    {checkStrEmpty(val) ? value_alt : val}
                  </Td>
                )
              }
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default CustomTable
