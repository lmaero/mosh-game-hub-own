'use client'

import GameGrid from '@/components/GameGrid'
import GenreList from '@/components/GenreList'
import { Navbar } from '@/components/Navbar'
import { Grid, GridItem, Show } from '@chakra-ui/react'

export default function Home() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area={'nav'}>
        <Navbar />
      </GridItem>

      <Show above={'lg'}>
        <GridItem area={'aside'}>{<GenreList />}</GridItem>
      </Show>

      <GridItem area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}
