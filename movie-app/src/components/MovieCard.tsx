import { FC } from 'react'
import { Link } from 'react-router-dom'

export interface Movie {
  imdbID: string
  Title: string
  Poster: string
  Year: string
  Type?: string
}

interface MovieCardProps {
  movie: Movie
  isFeatured?: boolean
  className?: string // Добавляем поддержку className
}

const MovieCard: FC<MovieCardProps> = ({
  movie,
  isFeatured = false,
  className = '',
}) => {
  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      className={`block transition-transform hover:scale-[1.02] ${className}`}
    >
      <div
        className={`
        bg-gray-800 rounded overflow-hidden shadow-lg
        ${isFeatured ? 'flex flex-col md:flex-row' : ''}
      `}
      >
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/300x450'
          }
          alt={movie.Title}
          className={`
            object-cover
            ${isFeatured ? 'w-full md:w-48 h-64' : 'w-full h-64'}
          `}
        />
        <div className={`p-4 ${isFeatured ? 'md:ml-6' : ''}`}>
          <h3 className='font-bold text-lg'>{movie.Title}</h3>
          <p>{movie.Year}</p>
          {isFeatured && (
            <span className='inline-block mt-2 px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded'>
              Featured
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
