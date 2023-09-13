import { GameQuery } from '@/app/page'
import useData from '@/hooks/useData'
import { Platform } from '@/hooks/usePlatforms'

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery],
  )

export default useGames
