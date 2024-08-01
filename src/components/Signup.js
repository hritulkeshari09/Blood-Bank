import React, {useState}  from 'react'
import Header from './Header';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from '../firebase'
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

const Signup = () => {
    const [details, setDetails] = useState({
        name: "",
        pass: "",
        email: ""
    })
    const navigate = useNavigate();

    const HandleSubmission=()=>{  
        if(!details.name || !details.email || !details.pass)  
        {
            toast.error("Please Fill all the Details !");
            return;
        }
        console.log(details);
        createUserWithEmailAndPassword(auth, details.email, details.pass).then(async(res)=>{
            toast.success("Registration Successful");
            const user = res.user;
            await updateProfile(user, {displayName: details.name});
            navigate('/');
        }).catch((err)=>toast.error('Something Went Wrong !'))
    }

  return (
    <><Header/>
        <ToastContainer/>
    <div className="dabba container shadow-lg" style={{ width: '40%' }}>
    <h1 className="ms-2">Create Your Account !</h1>
    <div className="container mt-4 mb-3">
    <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
                Name
            </label>
            <input
                type="text"
                className="form-control"
                id="name" 
                onChange={(event)=>setDetails((prev)=>({...prev,name:event.target.value}))}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp" 
                onChange={(event)=>setDetails((prev)=>({...prev,email:event.target.value}))}/>
            <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
            </div>
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
            <button className="btn dabbabtn" onClick={HandleSubmission}>
                Register
            </button>
        </div>
        <div className="mt-3">
        Already Have an Account ? <a href="/login">Log In</a> Now! 
        </div>
    </div>
</div>
<div style={{marginTop:'11%'}}></div>
      <Footer/>
</>
  )
}

export default Signup