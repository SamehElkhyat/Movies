import React from 'react'
import { useFormik } from 'formik'
import './SignUp.css'
import diamond from './wp1945909.jpg'
import axios from 'axios';
export default function SignUp() {
  async function handeleSignUp(values){
  const value= await axios.post(`http://localhost:3007/signup`,values)
    if(value.data='sucsses') {
      alert('Hello Mr '+values.name)
      window.location.href='/movies/Home'
          }else{
      alert('email already exist')
 }
 }
let formik=useFormik({
  initialValues:{
  name:'',
  email:'', 
  password:'',
  repassword:'',
  gender:'',
    },onSubmit:handeleSignUp
  });
  return <>
  <div className="All1">
<img className='' src={diamond} alt="" />
  <div className="form-body">
  <div className="form-holder">
  <div className="form-content">
  <div className="form-itemss">
  <h3>SignUp Today</h3>
  <p>Fill in the data below.</p>
  <form onSubmit={formik.handleSubmit} className="requires-validation" novalidate>
  <div className="col-md-12">
  <input onChange={formik.handleChange} value={formik.values.name} className="form-control" id='name' type="text" name="name" placeholder="Full Name" required/>
                           <div className="valid-feedback">Username field is valid!</div>
                           <div className="invalid-feedback">Username field cannot be blank!</div>
                        </div>
                        <div className="col-md-12">
                            <input onChange={formik.handleChange} value={formik.values.email} className="form-control" id='email' type="email" name="email" placeholder="E-mail Address" required/>
                             <div className="valid-feedback">Email field is valid!</div>
                             <div className="invalid-feedback">Email field cannot be blank!</div>
                        </div>
                        <div className="col-md-12">
                          <input onChange={formik.handleChange} value={formik.values.password} className="form-control" id='Password' type="password" name="password" placeholder="Password" required/>
                           <div className="valid-feedback">Password field is valid!</div>
                           <div className="invalid-feedback">Password field cannot be blank!</div>
                       </div>
                       <div className="col-md-12">
                       <input onChange={formik.handleChange} value={formik.values.repassword} className="form-control" id='repassword' type="password" name="repassword" placeholder="Repassword" required/>
                             <div className="valid-feedback">password field is valid!</div>
                             <div className="invalid-feedback">password field cannot be blank!</div>
                       </div>
                       <div className="col-md-12 mt-3">
                        <label className="mb-3 mr-1" for="gender">Gender: </label>
                        <input  type="radio" className="btn-check" name="gender" id='male' autocomplete="off" required/>
                        <label className="btn btn-sm btn-outline-secondary" for="male">Male</label>
                        <input  type="radio" className="btn-check" name="gender" id='female' autocomplete="off" required/>
                        <label className="btn btn-sm btn-outline-secondary" for="female">Female</label>
                           <div className="valid-feedback mv-up">You selected a gender!</div>
                            <div className="invalid-feedback mv-up">Please select a gender!</div>
                        </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                      <label className="form-check-label">I confirm that all data are correct</label>
                     <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                    </div>
                        <div className="form-button mt-3">
                            <button id="submit" type="submit" className="btn btn-danger">Register</button>
                        </div>
                    </form>
                </div>
            </div>
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