import { Component } from 'react';
import './App.css';
import SignUp from './SignUp/SignUp';
import About  from  './About/About';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Start from './Start/Start';
import Layout from './Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import { AnimatePresence } from 'framer-motion';
let routers=createBrowserRouter([

    {path:'Movies',element:<Layout/>,children:[

        {path:'NavBar',element:<NavBar/>},

        {path:'Movies',element:<About/>},

        {path:'SignUp',element:<SignUp/>},

        {path:'Home',element:<About/>},

        {index:'Movies',element:<Start/>},

        {path:'Footer',element:<Footer/>},

        {path:'Regestier',element:<SignIn/>},
    ]}
    ])
export default class App extends Component
{
render()
{
return <AnimatePresence><RouterProvider router={routers}></RouterProvider></AnimatePresence>
}

}