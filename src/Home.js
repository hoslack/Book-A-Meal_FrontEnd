import React from "react";
const bg =
  "https://images.pexels.com/photos/8313/food-eating-potatoes-beer-8313.jpg?cs=srgb&dl=dinner-food-meal-8313.jpg&fm=jpg";

const Home = props => {
  return (
    <div>
      <section className="login-block">
        <div className="container">
          <div className="row">
            <div className="col-md-4 login-sec">
              <h2 className="text-center">Login To Make an Order</h2>
              <form className="login-form">
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="text-uppercase"
                  >
                    Username
                  </label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-uppercase"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder=""
                  />
                </div>

                <div className="form-check">
                  <button type="submit" className="btn btn-login float-right">
                    Submit
                  </button>
                </div>
              </form>
              <div className="copy-text">
                Created with <i className="fa fa-heart" /> by{" "}
                <a href="https://github.com/hoslack">Hoslack Ochieng</a>
              </div>
            </div>
            <div className="col-md-8 banner-sec">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid"
                    src={bg}
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <div className="banner-text">
                      <h2>The FoodPal</h2>
                      <p>
                        I am your friend. I will help you order the best food.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
