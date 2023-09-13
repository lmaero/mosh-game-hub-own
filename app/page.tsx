'use client'

import GameGrid from '@/components/GameGrid'
import GenreList from '@/components/GenreList'
import { Navbar } from '@/components/Navbar'
import PlatformSelector from '@/components/PlatformSelector'
import { Genre } from '@/hooks/useGenres'
import { Platform } from '@/hooks/usePlatforms'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  )

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
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          }
        </GridItem>
      </Show>

      <GridItem area={'main'}>
        <PlatformSelector
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  )
}
