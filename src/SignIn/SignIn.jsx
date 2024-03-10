import React from 'react'
import './SignIn.css'
import { useFormik } from 'formik'
import axios from 'axios';
import diamond from './wp1945909.jpg'
export default function Regestier() {  
 async function handelesignin(values){
  const users= await axios.post(`http://localhost:3007/signin`,values)
  console.log(users.data);
   if (users.data=='sucsess'){
    console.log(values);
    alert('Welcome Mr'+values.email)
    window.location.href='/movies/Home'
   }else{
    alert('Password Or Email Is Wrong')
   }
    }
 let formik=useFormik({
    initialValues:{
    email:'',
    password:'',   
    },onSubmit:handelesignin
    });
  return <>
  <div className="All1">
  <div classNameName="container">  
<img className='' src={diamond} alt="" />

<div className="form-body"> 
 <div className="form-holder">
     <div className="form-content">
         <div className="form-items">
             <h3>SignIn Today</h3>
             <p>Fill in the data below.</p>
             <form onSubmit={formik.handleSubmit} className="requires-validation" novalidate>
                 <div className="col-md-12">
                     <input onChange={formik.handleChange} value={formik.values.email} className="form-control" type="email" name="email" id='email' placeholder="E-mail Address" required/>
                      <div className="valid-feedback">Email field is valid!</div>
                      <div className="invalid-feedback">Email field cannot be blank!</div>
                 </div>
                <div className="col-md-12">
                   <input onChange={formik.handleChange} value={formik.values.password} className="form-control" type="password" name="password" id='password' placeholder="Password" required/>
                    <div className="valid-feedback">Password field is valid!</div>
                    <div className="invalid-feedback">Password field cannot be blank!</div>
                </div>
             <div className="form-check">
               <input className="form-check-input" type="checkbox" name='checkbox' id="invalidCheck" required/>
               <label className="form-check-label">I confirm that all data are correct</label>
              <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
             </div>
                 <div className="form-button mt-3">
                     <button id="submit" type="submit" className="btn btn-danger">Signin</button>
                 </div>
             </form>
         </div>
     </div>
 </div>
</div></div>
  </div>

<footer className="footer w-100 text-white text-center text-lg-left  text-white text-center text-lg-start">
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