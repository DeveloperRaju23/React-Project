import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Header/Home';
import Header from './Component/Header/Header';
import Books from './Component/Header/Books';
import About from './Component/Header/About';
import Contact from './Component/Contact';
import BookDetails from './Component/Header/BookDetails';
import Loading from './Component/Header/Loading';
import Foods from './Component/Foods';
import Products from './Products';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children : [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/book',
        element: <Books></Books>,
        loader : () => fetch(`https://api.itbook.store/1.0/new`)
        
      },
      {
        path:'book/:id',
        element:<BookDetails></BookDetails>,
        // loader: ({params}) => fetch(`https://api.itbook.store/1.0/new/${params.id}`)
        loader: ({params} ) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path: '/food',
        element: <Foods></Foods>,
        loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
      },
      {
        path:'/product',
        element: <Products></Products>,
        loader: () => fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/loading',
        element: <Loading></Loading>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
