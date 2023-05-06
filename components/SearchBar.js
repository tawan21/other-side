import React from 'react'
import { Box, Input } from 'native-base'

function SearchBar() {
  return (
    <Box>
      <Input variant='rounded' placeholder='Search' bg='gray.600' color='white' borderWidth='0' _focus={{bg: 'gray.700'}} />
    </Box>
  )
}

export default SearchBar