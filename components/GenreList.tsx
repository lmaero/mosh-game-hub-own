import useGenres, { Genre } from '@/hooks/useGenres'
import getCroppedImageUrl from '@/services/image-url'
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react'
import React from 'react'

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, error, isLoading } = useGenres()

  if (error) return null
  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize='2xl' mb={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image
                objectFit='cover'
                alt={genre.name}
                borderRadius={8}
                boxSize={'32px'}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                textAlign='left'
                whiteSpace='normal'
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
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
    </>
  )
}

export default GenreList
