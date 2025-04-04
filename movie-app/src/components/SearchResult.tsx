import { useSearchMoviesQuery } from '../store/movieApi'
import type { Movie } from './MovieCard' // Явный импорт типа
import MovieCard from './MovieCard'

interface SearchResultsProps {
  query: string
}

export const SearchResults = ({ query }: SearchResultsProps) => {
  const { data, isLoading, error } = useSearchMoviesQuery(query)

  if (isLoading) return <div className='py-8 text-center'>Searching...</div>
  if (error)
    return <div className='py-8 text-red-500'>Error loading results</div>
  if (!data?.Search) return <div className='py-8'>No results found</div>

  return (
    <div className='search-results'>
      <h2 className='text-xl font-bold mb-6'>
        Search results for: <span className='text-yellow-400'>"{query}"</span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.Search.map(
          (
            movie: Movie // Явное указание типа
          ) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          )
        )}
      </div>
    </div>
  )
}

export default SearchResults
