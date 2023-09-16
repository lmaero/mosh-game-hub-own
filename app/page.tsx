'use client'

import GameGrid from '@/components/GameGrid'
import GenreList from '@/components/GenreList'
import { Navbar } from '@/components/Navbar'
import PlatformSelector from '@/components/PlatformSelector'
import SortSelector from '@/components/SortSelector'
import { Genre } from '@/hooks/useGenres'
import { Platform } from '@/hooks/usePlatforms'
import { Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
}

export default function Home() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area={'nav'}>
        <Navbar />
      </GridItem>

      <Show above={'lg'}>
        <GridItem area={'aside'} paddingX={5}>
          {
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          }
        </GridItem>
      </Show>

      <GridItem area={'main'}>
        <Flex gap={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />

          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </Flex>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}
