import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { BsSearch } from 'react-icons/bs'

function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>

      <Input borderRadius={20} placeholder='Search games...' variant='filled' />
    </InputGroup>
  )
}

export default SearchInput
