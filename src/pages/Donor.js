import React, { useEffect, useState } from "react";
import { auth , db} from "../firebase";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Donor = () => {
  const navigate = useNavigate();
  let user = auth.currentUser;

  const [userdetails, setUserdetails] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    blood: "",
    units:""
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserdetails({name:user.displayName, email:user.email , blood:'N/A'});
      }
      else {
        alert("Please Login First !!");
        navigate("/login");
      }
    });

    //eslint-disable-next-line
  }, []);

  const submithandle = async()=>{
    toast.success('Blood Donation added !')
    await setDoc(doc(db, "donors",user.uid), userdetails);
    navigate('/')
    console.log(userdetails);
  }

  return (
    <>
      <Header />
      <div
        className="dabba container shadow-lg"
        style={{ width: "40%", marginTop: "4.5%" }}
      >
        <h1 className="ms-2">Fill The Donor Details</h1>
        <div className="container mt-4 mb-1">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={userdetails.name}
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              onChange={(event)=>setUserdetails((prev)=>({...prev,name:event.target.value}))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={userdetails.email}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(event)=>setUserdetails((prev)=>({...prev,email:event.target.value}))}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="ex: 8766598792"
              pattern="[0-9]{10}"
              className="form-control"
              id="number"
              aria-describedby="noHelp"
              onChange={(event)=>setUserdetails((prev)=>({...prev,number:event.target.value}))}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="addHelp"
              onChange={(event)=>setUserdetails((prev)=>({...prev,address:event.target.value}))}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Blood Group <br/>
            </label>
            <select name="dog-names" id="dog-names" className="form-control"
            onChange={(event)=>setUserdetails((prev)=>({...prev,blood:event.target.value}))}>
              <option value="N/A">N/A</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="unit" className="form-label">
              Units of Blood to Donate
            </label>
            <input
              type="number"
              min="1"
              max="5"
              className="form-control"
              id="unit"
              aria-describedby="unitHelp"
              onChange={(event)=>setUserdetails((prev)=>({...prev,units:event.target.value}))}
            />
          </div>

          <div className="d-grid">
            <button disabled={userdetails.blood === "N/A"} className="btn dabbabtn p-2" onClick={submithandle}>Submit</button>
          </div>
          <div className="mt-2">
            <span className="lower">
              *Make Sure You don't have any Disease before Donating
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br/>
      <Footer />
    </>
  );
};

export default Donor;
