// Sarabia, Adrian Lee S. | WD - 401

import { useState } from 'react'
import './App.css'
import React from 'react'
import TodoList from './components/TodoList'
import MovieList from './components/MovieList'
import BookList from './components/BookList'
import './components/MovieList.css';

function App() {

  return (
    <>
      <div>
      <h1>To do List</h1>
        <TodoList/>
        <h1>Top 3 Movies</h1>
        <MovieList/>
        <h1>3 Favorite Books
          <BookList/>

        </h1>
      </div>

      
    </>
  )
}

export default App
