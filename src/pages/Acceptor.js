import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ListingItems from './ListingItems'
import {db} from '../firebase'
import { collection, getDocs, query, where,} from "firebase/firestore";
import { toast } from 'react-toastify';

const Acceptor = () => {

  const [listings, setListing] = useState("")
  const [userdetails, setUserdetails] = useState("NA")
  const [search, setSearch] = useState(false);
  const [reason, setReason] = useState("")

  useEffect (() =>
  {
    const fetchListing = async () => {
      try {
        const listingRef = collection(db, "donors");
        const q = query(
          listingRef,
          where("blood", "==", userdetails),
        );

        console.log(userdetails)
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListing(listings);
        setSearch(false);
      } catch (error) {
        toast.error("Unable to fetch data!");
        console.log(error);
      }
    };

    fetchListing();

  },[userdetails])

  const submithandle=()=>{
    setSearch(true);
    console.log(listings)
  }

  return (
    <>
    <Header/>
    
    <div
        className="dabba container shadow-lg"
        style={{ width: "40%", marginTop: "4.5%" }}
      >
        <h1 className="ms-2">Request for Blood</h1>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Blood Group <br/>
            </label>
            <select name="blood-grp" id="blood-grp-names" className="form-control"
            onChange={(event)=>setUserdetails(event.target.value)}>
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
            <label htmlFor="reason" className="form-label">
              Reason for the Need<span className='text-danger'>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="reason"
              aria-describedby="unitHelp"
              onChange={(event)=>setReason(event.target.value)}
            />
          </div>

          <div className="d-grid">
            <button className="btn dabbabtn p-2" disabled={!reason} onClick={submithandle}>Submit</button>
          </div>
        </div>
        <br/>
    <h1 className="d-flex container mt-4 mb-3 bg-light text-dark p-2 justify-content-center tit">
          Available Donors
        </h1>
  <div className='container justify-content-center d-flex '>
    { search ? listings && listings.length > 0 ? (
          <>
          <div className='row row-cols-1 row-cols-md-2 g-4'>
            {listings.map(list => (
                <ListingItems listing={list.data} id={list.id} key={list.id} />
            ))}
          </div>
          </>
        ) : (
          <h3 className='text-light'>No Donors Available</h3>
        ) :
        console.log("")}

</div>

    </>
  )
}

export default Acceptor