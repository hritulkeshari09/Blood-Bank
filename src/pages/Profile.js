import React, { useEffect, useState } from "react";
import { auth , db} from "../firebase";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { doc, getDoc } from "firebase/firestore"; 
import UserList from './UserList';

const Profile = () => {
    const navigate = useNavigate();

  const [userdetails, setUserdetails] = useState({
    name: "",
    email: "",
    uid : ""
  });

  const [useRef,setUserref] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(async(user) => {
      if (user) {
        setUserdetails({name:user.displayName, email:user.email, uid:user.uid});
        const docRef = doc(db, "donors", user.uid);
        const docSnap = await getDoc(docRef);
        setUserref(docSnap.data());
        console.log(useRef);
      }
      else {
        navigate("/login");
      }
    });

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
        <br/>
        
       
        <div className="container bg-light mt-4 p-0 mb-3 dabba" style={{width:'43%'}}>
        <div className="row">
            <div className="col-md-4 pe-4">
            <img 
            style={{width:'120%',
            padding:'20px'
            }}
            src="https://cdn-icons-png.flaticon.com/512/1022/1022533.png"/>
            </div>

            <div className="col-md-7 pro mt-3">
            <h1 className="ms-2 pt-2 ps-2"> Profile Details </h1>
            <hr/>
            <h5 className="ms-2 p-2 pt-1">Name : {userdetails.name}</h5>
            <h5 className="ms-2 p-2 pb-3">Email : {userdetails.email}</h5>
            </div>
        </div>
        </div>
        <br/>
        { useRef ? (
                <>
                <div className="container p-0 bg-light">
                  <h3 className="d-flex justify-content-center bg-dark text-light p-3 mb-4">Your Donation</h3>
              </div><UserList listing={useRef} id={userdetails.uid} key={userdetails.uid} />
              <br/>

              </>

        ) : (
            <>
            <br/>
            <div className="container p-0 bg-light">
                <h3 className="d-flex justify-content-center bg-dark text-light p-2">Donate Blood Now !</h3>
                <h5 className="m-4">You are not donating Blood yet. If you are not in need of Blood and are Perfectly healthy you should consider Donating. </h5>
                <h5 className="m-4">Why Should You Donate Blood ? <a href="/whydonate">Know Why</a></h5>
                <h5 className="m-4">Blood donation is a selfless act of kindness that has the power to save lives. Your donation of blood can make a significant difference in the lives of people in need, including those undergoing surgeries, suffering from illnesses, or experiencing traumatic injuries. So, roll up your sleeves and donate blood today - it's a small act that can have a big impact!"</h5>
                <a href="/donor"><button className="btn btn-primary container w-50 d-flex justify-content-center">Become A Donor Now</button></a>
                <br/>
            </div>
            <br/>
            </>
        ) }
        

      <Footer/>
    </>
  )
}

export default Profile