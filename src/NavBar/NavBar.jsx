import React from 'react';
import './navbar.scss'
import './nnav.css'
import { Link } from 'react-router-dom';
import './nnav.css'
import './navbar.scss'
export default function App() {
    return <>
<body>
</body>
<header id="nav-wrapper">
<nav id="nav">
<div className="nav left">
<span className="gradient skew"><h1 className="logo un-skew"><Link to="">Trending Movie</Link></h1></span>
<button id="menu" className="btn-nav"><span className="fas fa-bars"></span></button>
</div>
<div className="cards">
<div className="scroller">
<span className='span'>
Most<br/>
Rating<br/>
Movies<br/>
2024
</span>
</div>
</div>
<div className="nav right">
<Link to="" className="nav-link active"><span className="nav-link-span"><span className="u-nav">Home</span></span></Link>
<Link to="Regestier" className="nav-link"><span className="nav-link-span"><span className="u-nav">Sign In</span></span></Link>
<Link to="SignUp" className="nav-link"><span className="nav-link-span"><span className="u-nav">Sign Up</span></span></Link>
</div>
</nav>
</header>
</>  
}