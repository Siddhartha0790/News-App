import './App.css';

import Navbar from './components/Navbar'
import News  from './components/News'
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";
import Load from './components/Load'


function App(){
 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/>
      <News key = "g" pageSize = {8} country = "in" category = 'general' progress = {0}/></>,
    },
    {
      path: "/sports",
      element: <><Navbar/>
      <News key = "s" pageSize = {8} country = "in" category = 'sports' progress = {0} /></>,
    },
    {
      path: "/entertainment",
      element: <><Navbar/>
      <News key = "e" pageSize = {8} country = "in" category = 'entertainment' progress = {0} /></>,
    },
    {
      path: "/business",
      element: <><Navbar/>
      <News key = "b" pageSize = {8} country = "in" category = 'business' progress = {0} /></>,
    },
    {
      path: "/health",
      element: <><Navbar/>
      <News key = "h" pageSize = {8} country = "in" category = 'health' progress = {0} /></>,
    },
    {
      path: "/technology",
      element: <><Navbar/>
      <News key = "t" pageSize = {8} country = "in" category = 'technology' progress = {0} /></>,
    },
    
  ]);
  
    return(
      
      <RouterProvider router = {router}></RouterProvider>
      
    )
  }


export default App

