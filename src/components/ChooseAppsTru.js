const ChooseAppsTru = () => {
  return (
    <>
      <main className="container padding">
        <section className="row">
          <div className="col-lg-6 col-sm-12">
            <h2>Why Choose AppsTru?</h2>
            <p>
              Some of the world’s most innovative companies come to us for
              mobile app development. From applications that empower consumers
              to enterprise-grade solutions – Ask, and you shall receive!
            </p>
            <section className="row">
              <div className="col-md-2 col-sm-12">
                <img
                  src={require("../assets/icn1.png")}
                  alt="iconbox"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-10 col-sm-12">
                <h3>Highly Engaging UI/UX</h3>
                <p>
                  The mobile apps we develop have highly engaging UI/UX designs
                  that make them stand out from the rest.
                </p>
              </div>
            </section>
          </div>

          <div className="col-lg-6 col-sm-12 text-center">
            <img
              src={require("../assets/choose-uss.png")}
              alt=""
              className="img-fluid"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default ChooseAppsTru;
