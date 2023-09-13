import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props {
  score: number
}

function CriticStore({ score }: Props) {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''

  return (
    <Badge
      borderRadius={'4px'}
      colorScheme={color}
      fontSize={'14px'}
      paddingX={2}
    >
      {score}
    </Badge>
  )
}

export default CriticStore
