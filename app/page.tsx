'use client'

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
        <GridItem area={'aside'}>Aside</GridItem>
      </Show>

      <GridItem area={'main'}>Main</GridItem>
    </Grid>
  )
}
