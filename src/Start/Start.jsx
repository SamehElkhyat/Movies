import React from 'react';
import './Start.css'
import diamond1 from './e647e7704a63917cd4799d74a6aafbb9.jpg'
import diamond2 from './e647e7704a63917cd4799d74a6aafbb9.jpg'
import diamond from './wp1945909.jpg'
import { Link } from 'react-router-dom';

export default function App() {
  return <>
    <img className='imag'src={diamond} alt=""/>

  <div className="section-fluid-main">
  <h1 className='center'> <span className='f'>Hello To</span><span className='g'>Trending Movie</span><span className='full'>WepSite</span></h1>
      <div className="section-row">
        <div className="section-col">
          <div className="section">
            <div className="section-in">
            <Link to="SignUp"><img src={diamond1}alt=""/></Link>
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>SignUp</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <Link to="Regestier"> <img src={diamond2} alt=""/></Link>
             
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>SignIn</h2>
        </div>
      </div>  
    </div> 
    <footer className="footer w-100 text-white text-center text-lg-left text-white text-center text-lg-start">
<div className="container p-4">

<div className="row mt-4">

 <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
   <h5 className="text-uppercase mb-4">About company</h5>

   <p>
     At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
     voluptatum deleniti atque corrupti.
   </p>

   <p>
     Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
     molestias.
   </p>

   <div className="mt-1">
     
     <a type="button" className="btn btn-floating btn-warning btn-lg"><i className="fab fa-facebook-f"></i></a>
     
     <a type="button" className="btn btn-floating btn-warning btn-lg"><i className="fab fa-linkedin"></i></a>
    
     <a type="button" className="btn btn-floating btn-warning btn-lg"><i className="fab fa-instagram"></i></a>

     <a type="button" className="btn btn-floating btn-warning btn-lg"><i className="fab fa-google-plus-g"></i></a>
 
   </div>
 </div>



 <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
   <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

   <div className="form-outline form-white mb-4">
     <input type="text" id="formControlLg" className="form-control form-control-lg"/>
     <label className="form-label" for="formControlLg" >Search</label>
   <div className="form-notch"><div className="form-notch-leading" ></div><div className="form-notch-middle"></div><div className="form-notch-trailing"></div></div></div>

   <ul className="fa-ul">
     <li className="mb-3">
       <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Cairo, HN 10012, Eg</span>
     </li>
     <li className="mb-3">
       <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">https://www.linkedin.com/in/sameh-salih-02179b271/</span>
     </li>
     <li className="mb-3">
       <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">01065369433</span>
     </li>
     <li className="mb-3">
       <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2">01121446667</span>
     </li>
   </ul>
 </div>
 <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
   <h5 className="text-uppercase mb-4">Opening hours</h5>

   <table className="table text-center text-white">
     <tbody className="font-weight-normal">
       <tr>
         <td>Mon - Thu:</td>
         <td>8am - 9pm</td>
       </tr>
       <tr>
         <td>Fri - Sat:</td>
         <td>8am - 1am</td>
       </tr>
       <tr>
         <td>Sunday:</td>
         <td>9am - 10pm</td>
       </tr>
     </tbody>
   </table>
 </div>

</div>

</div>
<div className="text-center p-3">
© 2020 Copyright:
<a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>

</div>
</footer>
    
    </>





}
