import useGenres, { Genre } from '@/hooks/useGenres'
import getCroppedImageUrl from '@/services/image-url'
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react'
import React from 'react'

interface Props {
  onSelectGenre: (genre: Genre) => void
}

function GenreList({ onSelectGenre }: Props) {
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
            <Button
              variant={'link'}
              fontSize={'lg'}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
