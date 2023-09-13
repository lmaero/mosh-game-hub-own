import PlatformIconList from '@/components/PlatformIconList'
import { Game } from '@/hooks/useGames'
import { Card, CardBody } from '@chakra-ui/card'
import { Heading, Image } from '@chakra-ui/react'
import React from 'react'

interface Props {
  game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  )
}

export default GameCard
