import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

function GameCardContainer({ children }: { children: ReactNode }) {
  return (
    <Box borderRadius={10} overflow={'hidden'}>
      {children}
    </Box>
  )
}

export default GameCardContainer
