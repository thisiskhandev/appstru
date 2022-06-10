import { useState } from "react";
import ecommerce from "../assets/Ecommerce-min.jpg";

const IndustriesShot = [
  {
    id: 1,
    btnTitle: "eCommerce",
    imgURL: require("../assets/Ecommerce-min.jpg"),
    iconURL: require("../assets/shopping-online.png"),
  },
  {
    id: 2,
    btnTitle: "Finance",
    imgURL: require("../assets/Finance-min.jpg"),
    iconURL: require("../assets/budget.png"),
  },
  {
    id: 3,
    btnTitle: "Healthcare",
    imgURL: require("../assets/Health-and-medical-min.jpg"),
    iconURL: require("../assets/healthcare.png"),
  },
  {
    id: 4,
    btnTitle: "Restaurant",
    imgURL: require("../assets/Restaurant-min.jpg"),
    iconURL: require("../assets/restaurant.png"),
  },
  {
    id: 5,
    btnTitle: "Real estate",
    imgURL: require("../assets/Realestate-min.jpg"),
    iconURL: require("../assets/real-estate.png"),
  },
  {
    id: 6,
    btnTitle: "Tour & Travels",
    imgURL: require("../assets/Travel-and-tours-min.jpg"),
    iconURL: require("../assets/travel.png"),
  },
  {
    id: 7,
    btnTitle: "Transport",
    imgURL: require("../assets/Transport-min.jpg"),
    iconURL: require("../assets/taxi.png"),
  },
];

const Industries = () => {
  const [images, setImages] = useState(ecommerce);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <main className="container industries padding">
        <section className="row">
          <div className="col-lg-6 col-sm-12">
            <img
              src={images}
              alt="Industries"
              className="img-fluid text-center"
            />
          </div>
          <div className="col-lg-6 col-sm-12">
            <h2>We Serve These Industries</h2>
            <section className="row">
              {IndustriesShot.map((val) => {
                return (
                  <div className="col-md-6 col-sm-12" key={val.id}>
                    <button
                      id={"Btn" + val.id}
                      key={val.id}
                      className={
                        "btn rounded-3 w-100 py-3 my-3 bg-light text-black border-0 btn_industries"
                      }
                      style={{
                        boxShadow: isActive ? "0px 0px 30px 0px #0000002e" : "",
                      }}
                      onClick={(() => setImages(val.imgURL), handleClick)}
                    >
                      <span>
                        <img
                          src={val.iconURL}
                          alt="icon"
                          className="img-fluid"
                          width="90px"
                        />
                      </span>
                      <span>{val.btnTitle}</span>
                    </button>
                  </div>
                );
              })}
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Industries;
