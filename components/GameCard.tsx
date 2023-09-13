import CriticStore from '@/components/CriticStore'
import PlatformIconList from '@/components/PlatformIconList'
import { Game } from '@/hooks/useGames'
import getCroppedImageUrl from '@/services/image-url'
import { Card, CardBody } from '@chakra-ui/card'
import { HStack, Heading, Image } from '@chakra-ui/react'
import React from 'react'

interface Props {
  game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticStore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
