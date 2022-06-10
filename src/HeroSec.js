import CTA from "./components/CTA";
const HeroSec = () => {
  return (
    <>
      <main className="container-fluid hero">
        <main className="container">
          <section className="row">
            <div className="col-lg-6 col-sm-12 center_start text-lg-start text-center">
              <h1 className="title">
                We Create Mobile Apps To Make Life Better!
              </h1>
              <p>
                Our Native IOS and Android Apps Help Your Customers Get More
                Done with Increased Convenience & Fantastic Functionality.
              </p>
              <CTA />
            </div>
            <div className="col-lg-6 col-sm-12 text-center mt-lg-0 mt-sm-5 position-relative">
              <img
                src={require("./assets/hero-burger-shot.png")}
                alt="burger"
                className="img-fluid"
              />
              <img
                src={require("./assets/hero-bike.png")}
                alt="burger"
                className="img-fluid position-absolute end-0 bottom-0 w-lg-auto w-50"
              />
            </div>
          </section>
        </main>
      </main>
    </>
  );
};

export default HeroSec;
