import { GameQuery } from '@/app/page'
import { Heading } from '@chakra-ui/react'

interface Props {
  gameQuery: GameQuery
}

function GameHeading({ gameQuery }: Props) {
  const { platform, genre } = gameQuery
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`

  return (
    <Heading as='h1' my={5} fontSize='5xl'>
      {heading}
    </Heading>
  )
}

export default GameHeading
