import React from "react";

const Navbar = () => {
  return (
      <div className="container-fluid h-5 sticky-top col-12">
        <nav
          className="navbar d-flex justify-content-evenly  "
          style={{ fontFamily: "Lora" }}
        >
          <h4 className="site d-none d-md-block">Ecommerce Sites</h4>
          <div>
            <h1 className="home">Home</h1>
          </div>
          <div>
            <h1 className="cart">Cart</h1>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
