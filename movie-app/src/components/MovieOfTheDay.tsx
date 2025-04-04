import { useMemo } from 'react'
import { useGetPopularMoviesQuery } from '../store/movieApi'
import MovieCard from './MovieCard'

export const MovieOfTheDay = () => {
  const { data } = useGetPopularMoviesQuery(1)

  const movieOfTheDay = useMemo(() => {
    if (!data?.Search?.length) return null

    // Генерация стабильного случайного индекса на основе даты
    const today = new Date()
    const seed =
      today.getFullYear() * 10000 +
      (today.getMonth() + 1) * 100 +
      today.getDate()
    const randomIndex = seed % data.Search.length

    return data.Search[randomIndex]
  }, [data])

  if (!movieOfTheDay) return null

  return (
    <div className='movie-of-the-day bg-gray-900 p-6 rounded-xl border-l-4 border-yellow-500'>
      <h2 className='text-2xl font-bold mb-6 flex items-center'>
        <span className='mr-2'>🎬</span> Movie of the Day
      </h2>
      <MovieCard movie={movieOfTheDay} isFeatured />
    </div>
  )
}
