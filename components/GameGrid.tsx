import GameCard from '@/components/GameCard'
import GameCardSkeleton from '@/components/GameCardSkeleton'
import useGames from '@/hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

function GameGrid() {
  const { games, error, isLoading } = useGames()
  const skeletons = Array(6).fill(Math.random(), 0)

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={'10px'}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
