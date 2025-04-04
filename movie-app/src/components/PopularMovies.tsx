import { useState } from 'react'
import { useGetPopularMoviesQuery } from '../store/movieApi'
import MovieCard from './MovieCard'

export const PopularMovies = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError } = useGetPopularMoviesQuery(page)

  if (isLoading)
    return (
      <div className='flex justify-center items-center h-64'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500'></div>
      </div>
    )

  if (isError)
    return (
      <div className='text-red-500 p-4 text-center'>
        Failed to load movies. Please try again later.
      </div>
    )

  return (
    <div className='popular-movies'>
      <h2 className='text-2xl mb-4'>Popular Movies</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {data?.Search?.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {data?.Search?.length && (
        <button
          onClick={() => setPage(page + 1)}
          className='mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded transition-colors'
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  )
}
