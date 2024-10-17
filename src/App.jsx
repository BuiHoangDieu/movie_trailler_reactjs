/* eslint-disable no-unused-vars */

import React from 'react'
import { useEffect, useState } from 'react'

import Header from './components/Header'
import Banner from './components/Banner'
import MovieList from './components/MovieList'
import MovieSearch from './components/MovieSearch'
import { MovieProvider } from './context/MovieProvider';



function App() {

  const [movie, setMovie] = useState([])
  const [ratedMovie, setRatedMovie] = useState([])
  const [movieSearch, setMovieSearch] = useState([])

  const handleSearch = async (searchValue) => {
    setMovieSearch([])

    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY
        }
      };

      const searchMovie = await fetch(url, options)
      const data = await searchMovie.json()
      setMovieSearch(data.results)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      }
      const urlMovieTrend = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
      const urlMovieRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
      
      const [res1, res2] = await Promise.all([
        fetch(urlMovieTrend, options),
        fetch(urlMovieRated, options)
      ])

      const data1 = await res1.json()
      const data2 = await res2.json()

      setMovie(data1.results)
      setRatedMovie(data2.results)

      // const response = await fetch(url1, options)
      // const data = await response.json()
      // setMovie(data.results)
    }

    fetchMovie()
  }, [])

  return (
    <>
    <MovieProvider>
      <div className='bg-black pb-40'>
        <Header onSearch={handleSearch}/>
        <Banner />
        {movieSearch.length > 0 ? ( <MovieSearch title = {'Search results'} data={movieSearch}/> 
        ) : (
          <>
            <MovieList title={'Phim hot'} data={movie}/>
            <MovieList title={'Phim đề cử'} data={ratedMovie}/>
          </>
        )}
      </div>
    </MovieProvider>
    </>
  )
}

export default App
