import React from "react";

const ListingItems = ({ listing, id }) => {
  return (
    <div className="col ggbox">
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body p-0">
        <div className="bg-dark text-light p-3 crdhead" style={{width:'100%'}}>
        <h5 className="card-title">{listing.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {listing.address}
        </h6>
        </div>
        <div className="m-3">
        <p className="card-text">
          Phone Number : {listing.number}
        </p>
        <p className="card-text">
          Email : {listing.email}
        </p>
        <p className="card-text">
          Units of Blood : {listing.units}
        </p>
        <a href={`mailto:${listing.email}?Subject=Need%20${listing.blood}%20blood%20urgently`}><button className="btn btn-dark justify-content-center d-flex container">Contact</button></a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ListingItems;
