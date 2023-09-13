import useGenres from '@/hooks/useGenres'
import getCroppedImageUrl from '@/services/image-url'
import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import React from 'react'

function GenreList() {
  const { data, error, isLoading } = useGenres()

  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              alt={genre.name}
              borderRadius={8}
              boxSize={'32px'}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
