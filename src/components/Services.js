const Services = () => {
  return (
    <>
      <main className="container-fluid services">
        <main className="container">
          <section className="row">
            <div className="col-lg-6 col-sm-12">
              <h2>Native Mobile App Design & Development</h2>
            </div>
            <div className="col-lg-6 col-sm-12">
              <p>
                Take Your Customers’ Experience to the Next Level! Would you
                like to be at the forefront of innovation? Our talented team
                specializes in creating customer-centric apps that will set you
                apart from the competition.
              </p>
            </div>
          </section>
          <ServicesCard />
        </main>
      </main>
    </>
  );
};

export default Services;

const ServicesCard = () => {
  return (
    <>
      <section className="row my-5 mx-auto gy-4" style={{ maxWidth: 800 }}>
        {ServicesCardArr.map((val) => {
          return (
            <div className="col-lg-6 col-sm-12 p-lg-2 p-0" key={val.id}>
              <div className="card border-0 services_card text-center h-100">
                <img
                  src={val.imgURl}
                  className="card-img-top img-fluid mx-auto mt-2"
                  alt="Logos"
                  style={{ width: 75 }}
                />
                <div className="card-body">
                  <h4 className="card-title">{val.title}</h4>
                  <h5 style={{ whiteSpace: "pre-line" }}>{val.services}</h5>
                  <p className="card-text">{val.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

const ServicesCardArr = [
  {
    id: 1,
    imgURl: require("../assets/apple-logo.png"),
    title: "IOS Development",
    services: "SWIFT | REALM | COREDATA | OBJECTIVE C",
    desc: "We develop high-performance IOS apps to keep your customers engaged.",
  },
  {
    id: 2,
    imgURl: require("../assets/virus-logo.png"),
    title: "Android Development",
    services: `JAVA | SQLITE \n | FIREBASE | ROOM`,
    desc: "We develop Android apps packed with features to outperform your competitors.",
  },
];
