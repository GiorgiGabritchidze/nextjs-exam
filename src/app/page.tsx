'use client'
import React from 'react'
import HomePage from './components/HomePage/page';
import TodoPage from './components/TodoPage/page';
import ProductPage from './components/ProductPage/page';
import PostPage from './components/PostPage/page';

const Home = () => {
  return (
    <div>
      <TodoPage />
      <ProductPage />
      <PostPage />
    </div>
  )
}

export default Home;
