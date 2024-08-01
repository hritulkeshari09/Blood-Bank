import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

function Home(props) {

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="hptitle">
        <h1 className="dabbatext">
          Welcome to <br />
          Online Blood Bank System<br />
          {props.name ? (
            <span className="usname">Hey,&nbsp;{props.name}</span>
          ) : (
            <a href="/login">
              <button
                className="btn btn-lg btn-dark hbtn"
                style={{ width: "200px" }}
              >
                Login
              </button>
            </a>
          )}
        </h1>
      </div>
      <div className="hpbase">
        <h1 className="d-flex container mt-3 mb-3 bg-dark text-light p-2 justify-content-center">
          Things You Should Know
        </h1>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row mt-2">
            <div className="col-md-5 m-auto">
              <h3>The Need for Blood :</h3>
              <p>
                The need for blood in blood banks arises from the fact that
                blood cannot be artificially produced and must be obtained from
                volunteer blood donors. Blood banks collect and process donated
                blood, separating it into its various components, such as red
                blood cells, plasma, and platelets, which can be used to treat
                different medical conditions. Since blood has a limited shelf
                life, blood banks need a constant supply of new blood donations
                to ensure that they have enough blood to meet the needs of
                patients. The demand for blood can also vary based on factors
                such as seasonal fluctuations, natural disasters, and disease
                outbreaks, which can increase the need for blood transfusions.
              </p>
              <img
                width="100%"
                className="chhota"
                style={{ border: "1px solid #000" }}
                src="https://media.istockphoto.com/id/1349428314/video/blood-donation-animation-video-illustration-4k-video.jpg?s=640x640&k=20&c=IKuxsLSfdQNP5q0c93o4_EjMVPEJc2lcAqpWHfsAIKw="
              ></img>
            </div>
            <div className="col-md-5 m-auto">
              <h3>Who Could you Help :</h3>
              <p>
                Donating blood can help a wide range of people who require blood
                transfusions, including patients undergoing surgeries, accident
                victims, cancer patients, people with blood disorders, and women
                with complications during pregnancy and childbirth. In addition
                to the groups of people mentioned above, donating blood can also
                help: People with chronic illnesses: Certain chronic illnesses,
                such as hemophilia or kidney disease, can require blood
                transfusions to manage symptoms. People with bleeding disorders:
                Some bleeding disorders, such as von Willebrand disease, can
                cause excessive bleeding, and blood transfusions may be
                necessary to help control bleeding.
              </p>
              <img
                width="100%"
                style={{ border: "1px solid #000" }}
                src="https://www.pr-medicalevents.com/wp-content/uploads/2016/06/post-img.jpg"
              ></img>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="hpbase pt-5">
        <h1 className="d-flex container mt-4 mb-3 bg-dark text-light p-2 justify-content-center">
          Blood Groups
        </h1>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row mt-2">
            <div className="col-md-5 m-auto">
              <p>
                Blood Group of any Human Being will mainly fall in any one of
                the Following Groups.
                <ul>
                  <li>A positive or A negative</li>
                  <li>B positice or B negative</li>
                  <li>O positice or O negative</li>
                  <li>AB positice or AB negative</li>
                </ul>
                Your Blood group is determined by the genes you inherit from
                your parents. A healthy diet helps ensure a successful blood
                donation, and also makes you feel better !
              </p>
            </div>
            <div className="col-md-5">
              <img
                width="100%"
                style={{ border: "1px solid #000" }}
                src="https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/Save-Life-India.jpg?itok=L240Xrej"
              ></img>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="hpbase pb-5 pt-5">
        <h1 className="d-flex container mt-4 mb-3 bg-dark text-light p-2 justify-content-center">
          Universal Donors and Recipients
        </h1>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row mt-2">
            <div className="col-md-8 m-auto">
              <p>
                A universal donor is someone with blood type O negative, which
                means that their blood lacks the A and B antigens as well as the
                Rh factor. This type of blood can be safely transfused into
                people with any blood type, making it the most valuable type of
                blood for emergency situations when there is no time to test the
                recipient's blood type. A universal recipient, on the other
                hand, is someone with blood type AB positive, which means that
                they have both the A and B antigens as well as the Rh factor on
                their red blood cells. This type of blood can receive
                transfusions from any blood type without the risk of an adverse
                reaction.
              </p>
            </div>
            <div className="col-md-2">
                <button className="btn btn-lg btn-danger" onClick={()=>{
                  navigate('/donor');
                }}>
                  Become a Donor
                </button>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="container mt-4 mb-4 text-light nedblood">
        <h1>In Need of Blood ?</h1>
        <h6 className="mb-3">
          If you are in need of Blood you can visit the 'Need Blood Page' to Request for the required Blood Group.
        </h6>
        <br/>
        <a href="/acceptor"><button className="btn btn-light text-danger">Request Blood</button></a>
      </div>

      <Footer />
    </>
  );
}

export default Home;
