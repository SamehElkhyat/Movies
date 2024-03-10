import NavBar from '../NavBar/NavBar';
import { Outlet} from 'react-router-dom';
import React from 'react'


export default function Layout() {
    return <div>
    <NavBar/>
    <Outlet></Outlet>
    </div>
    }
    







