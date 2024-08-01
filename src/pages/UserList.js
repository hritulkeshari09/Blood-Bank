import React from "react";
import { auth , db} from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const UserList = ({ listing, id }) => {

    const navigate = useNavigate();
    const deldocument = async() =>{
        if(window.confirm("Want to Withdraw your Donation ?"))
        {
            await deleteDoc(doc(db, "donors", id));
            navigate('/profile');
        }
    }

  return (

    <div className="container d-flex justify-content-center ggbox">
      <div className="card" style={{ width: "40rem" }}>
        <div className="card-body p-0">
          <div
            className="bg-dark text-light p-3 crdhead"
            style={{ width: "100%" }}
          >
            <div className="container d-flex justify-content-between">
              <div className="container">
                <h5 className="card-title">{listing.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {listing.address}
                </h6>
              </div>

              <div className="container d-flex justify-content-end">
                <img
                  style={{ width: "15%" }}
                  src="https://www.freepnglogos.com/uploads/blood-drop-png/real-red-blood-drop-clip-art-clkerm-vector-clip-0.png"
                />
              </div>
            </div>
          </div>
          <div className="m-3">
            <h5 className="card-text mb-3">Blood Group : {listing.blood}</h5>
            <h5 className="card-text mb-3">Units of Blood : {listing.units}</h5>
            <h5 className="card-text mb-3">Phone Number : {listing.number}</h5>

            <button
              className="btn btn-dark justify-content-center d-flex container"
              style={{
                backgroundColor: "#b03939",
              }}
              onClick={deldocument}
            >
              Withdraw Donation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
