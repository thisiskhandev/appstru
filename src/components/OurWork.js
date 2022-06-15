const OurWorkArr = [
  {
    id: 1,
    alterName: "Work shots",
    imgURL: require("../assets/ourwork1.png"),
  },
  {
    id: 2,
    alterName: "Work shots",
    imgURL: require("../assets/ourwork2.png"),
  },
  {
    id: 3,
    alterName: "Work shots",
    imgURL: require("../assets/ourwork3.png"),
  },
  {
    id: 4,
    alterName: "Work shots",
    imgURL: require("../assets/ourwork4.png"),
  },
  {
    id: 5,
    alterName: "Work shots",
    imgURL: require("../assets/ourwork5.png"),
  },
  {
    id: 6,
    alterName: "Work shots",
    imgURL: require("../assets/ourwork6.png"),
  },
];

const OurWork = () => {
  return (
    <>
      <main className="container-fluid our_work padding">
        <section className="row">
          <div className="col-12">
            <h2 className="text-center">Our Latest Creative Work</h2>
          </div>
          <section className="row gallery_fade text-center">
            {OurWorkArr.map((elem) => {
              return (
                <div className="col-md-4 col-sm-12 g-0">
                  <img
                    src={elem.imgURL}
                    alt={elem.alterName + elem.id}
                    className="img-fluid work_shots"
                  />
                </div>
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
};

export default OurWork;
