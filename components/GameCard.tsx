import CriticStore from '@/components/CriticStore'
import Emoji from '@/components/Emoji'
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
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent='space-between' mb={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticStore score={game.metacritic} />
        </HStack>

        <Heading fontSize={'2xl'}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
