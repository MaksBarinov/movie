import { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'

interface SearchBarProps {
  onSearchChange: (query: string) => void
}

export const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    onSearchChange(debouncedQuery)
  }, [debouncedQuery, onSearchChange])

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search movies...'
        className='w-full p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  )
}
