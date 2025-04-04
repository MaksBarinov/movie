import { useMemo } from 'react'
import { useGetPopularMoviesQuery } from '../store/movieApi'
import MovieCard from './MovieCard'

export const RandomMovie = () => {
  const { data, isLoading } = useGetPopularMoviesQuery(1)

  const randomMovie = useMemo(() => {
    if (!data?.Search?.length) return null

    const today = new Date().toISOString().split('T')[0]
    const seed = parseInt(today.replace(/-/g, ''), 10)
    return data.Search[seed % data.Search.length]
  }, [data])

  if (isLoading) return <div>Loading featured movie...</div>
  if (!randomMovie) return null

  return (
    <div className='featured-movie'>
      <h2 className='text-2xl font-bold mb-6 text-yellow-400'>
        🎬 Movie of the Day
      </h2>
      <MovieCard movie={randomMovie} isFeatured className='featured-card' />
    </div>
  )
}

export default RandomMovie
