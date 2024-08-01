import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Donate = () => {
  return (
    <>
      <Header />
      <div className="container dabba" style={{ marginTop: "2%" }}>
        <div className="row mt-4 p-3">
          <div className="col-md-7">
            <h1 className="d-flex justify-content-center">
              Why Should I donate Blood ?
            </h1>
            <hr />
            <p className="mt-4">
              There are several reasons why you should consider donating blood:
              <ul className="mt-2">
                <li>
                  It can save lives: <br /> Blood donations are critical for
                  people who require blood transfusions due to medical
                  conditions, injuries, or surgeries. By donating blood, you can
                  help save someone's life.
                </li>

                <li className="mt-2">
                  It's easy and convenient: <br /> Donating blood is a simple
                  process that usually takes less than an hour. Blood banks and
                  donation centers are often located in convenient locations,
                  and many offer flexible hours to accommodate donors'
                  schedules.
                </li>

                <li className="mt-2">
                  It's a way to give back to your community: <br />
                  Donating blood is a selfless act that can help your community
                  in a significant way. By giving blood, you can make a positive
                  impact on the lives of others.
                </li>

                <li className="mt-2">
                  It can improve your own health:
                  <br /> Studies have shown that donating blood can have health
                  benefits for the donor, such as reducing the risk of heart
                  disease and cancer.
                </li>

                <li className="mt-2">
                  It's a way to learn about your own health: <br />
                  Before donating blood, you will undergo a mini-physical, which
                  includes a blood pressure check and a screening for certain
                  medical conditions. This can help you learn more about your
                  own health and identify any potential health issues.
                </li>
              </ul>
              In summary, donating blood is a simple and effective way to give
              back to your community, potentially save lives, and improve your
              own health.
            </p>
          </div>

          <div className="col-md-5">
            <img
              width={"100%"}
              src="https://images.squarespace-cdn.com/content/v1/5d97654cac281379bc1bc2fe/1572538994311-YBVUOCAWW6N5TTZTYFCH/08f2fccc45d2564f74ead4a6d5086871.png"
            ></img>
          </div>
        </div>
      </div>
      <br />

      <Footer />
    </>
  );
};

export default Donate;
