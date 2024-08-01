import React, {useState} from "react";
import Header from "./Header";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


const Login = () => {
    const [details, setDetails] = useState({
        pass: "",
        email: ""
    })
    const navigate = useNavigate();

    const HandleSubmission=()=>{  
        if(!details.email || !details.pass)  
        {
            toast.error("Please Fill all the Details !");
            return;
        }
        console.log(details);
        signInWithEmailAndPassword(auth, details.email, details.pass).then((res)=>{
            toast.success("login Successful");
            navigate('/');
        }).catch((err)=>toast.error('Something Went Wrong !'))
    }
  return (
    <><Header/><div className="dabba container shadow-lg" style={{ width: '40%' }}>
          <h1 className="ms-2">Welcome Back !</h1>
          <div className="container mt-4 mb-3">
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                  </label>
                  <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp" 
                      onChange={(event)=>setDetails((prev)=>({...prev,email:event.target.value}))}
                />
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                      Password
                  </label>
                  <input
                      type="password"
                      className="form-control"
                      id="pass" 
                      onChange={(event)=>setDetails((prev)=>({...prev,pass:event.target.value}))}/>
              </div>
              <div className="d-grid">
                  <button className="btn dabbabtn p-2" disabled={!details.email & !details.pass} onClick={HandleSubmission}>
                      Login
                  </button>
              </div>
              <div className="mt-3">
              Don't Have an Account ? <a href="/signup">Sign up</a> Now! 
              </div>
          </div>
      </div>
      
      <div style={{marginTop:'15.5%'}}></div>
      <Footer/>
      </>
  );
};

export default Login;
