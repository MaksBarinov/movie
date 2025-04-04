import { useParams } from 'react-router-dom'
import { useGetMovieByIdQuery } from '../store/movieApi'

export const MovieDetailPage = () => {
  const { id } = useParams()
  const { data: movie, isLoading } = useGetMovieByIdQuery(id || '')

  if (isLoading) return <div>Loading...</div>
  if (!movie) return <div>Movie not found</div>

  return (
    <div className='p-4 max-w-4xl mx-auto'>
      <div className='flex flex-col md:flex-row gap-6'>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className='w-64 h-96 object-cover'
        />
        <div>
          <h1 className='text-3xl font-bold'>{movie.Title}</h1>
          <p className='mt-2'>{movie.Plot}</p>
          <div className='mt-4 space-y-2'>
            <p>Year: {movie.Year}</p>
            <p>Rating: {movie.imdbRating}</p>
            <p>Actors: {movie.Actors}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
