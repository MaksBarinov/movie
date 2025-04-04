import { useState } from 'react'
import { MovieOfTheDay } from '../components/MovieOfTheDay'
import { PopularMovies } from '../components/PopularMovies'
import { SearchBar } from '../components/SearchBar'
import { SearchResults } from '../components/SearchResult'

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* 1. SearchBar - всегда сверху */}
      <section className='mb-8'>
        <SearchBar onSearchChange={setSearchQuery} />
      </section>

      {/* 2. MovieOfTheDay - только когда нет поиска */}
      {!searchQuery && (
        <section className='mb-12'>
          <MovieOfTheDay />
        </section>
      )}

      {/* 3. Либо результаты поиска, либо популярные фильмы */}
      <section>
        {searchQuery ? (
          <SearchResults query={searchQuery} />
        ) : (
          <PopularMovies />
        )}
      </section>
    </div>
  )
}

export default HomePage
