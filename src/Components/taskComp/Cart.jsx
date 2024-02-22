// React component for rendering a shopping cart with functionalities like increasing, decreasing quantities, removing items, and displaying total price and quantity
import React, { useContext } from "react";
import { myContext } from "../../App";

const Cart = () => {
  const [data, setData] = useContext(myContext);
  // Calculates total price and total quantity of items in the cart using data from the context
  // Renders the total price and total quantity at the top of the component
  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );
  const totalQuantity = data.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );
  // Function to handle the increase in quantity for a specific item
  const handelIncrease = (id, quantity) => {
    setData((preData) => {
      return preData.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 || quantity + 1 };
        }
        return item;
      });
    });
  };
  // Function to handle the decrease in quantity for a specific item
  const handelDecrease = (id, quantity) => {
    setData((preData) => {
      return preData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: Math.max(0, item.quantity - 1 || quantity - 1),
          };
        }
        return item;
      });
    });
  };
  // Function to handle the removal of a specific item from the cart
  const handleRemove = (id) => {
    setData((preData) => preData.filter((item) => item.id !== id));
  };
  return (
    <>
      <div
        className="top container-fluid d-flex justify-content-evenly col-12 "
        style={{ fontFamily: "Lora" }}
      >
        <h1 className="price d-none d-md-block">Total Price:{totalPrice}</h1>
        <h5 className="price d-block d-md-none">Total Price:{totalPrice}</h5>

        <h1 className="price d-none d-md-block">
          Total Quantity :{totalQuantity}
        </h1>
        <h5 className="price d-block d-md-none">
          Total Quantity :{totalQuantity}
        </h5>
      </div>
      <div className=" container mt-5 ">
        {data.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div className="card  mb-5 p-3  bg-transparent text-black rounded shadow-lg ">
                  <div className="row ">
                    <div className="col-md-4 col-sm-12  img-container p-3 ">
                      <img src={item.thumbnail} className="card-img-top  " />
                    </div>
                    <div className="content col-sm-12 col-md-6 col-lg-6 ">
                      <p>Product Name :{item.title}</p>
                      <p>Discount Percentage :{item.discountPercentage}</p>
                      <p>Ratings :{item.rating} ⭐⭐⭐⭐</p>
                      <p>Stock :{item.stock}</p>
                      <p>Brand :{item.brand}</p>
                      <p>Category :{item.category}</p>
                      {/* Provides buttons for increasing, decreasing quantities,
                      and removing items */}
                      <div className=" column button col-sm-12 col-md-12 col-lg-6 my-3">
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            handelDecrease(item.id, item.quantity || 1)
                          }
                          // Updates the context data with the decreased quantity, ensuring it doesn't go below zero
                        >
                          -
                        </button>
                        {item.quantity || 1}
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            handelIncrease(item.id, item.quantity || 1)
                          }
                          // Updates the context data with the increased quantity
                        >
                          +
                        </button>
                        {/* Updates the context data by filtering out the item
                        with the specified id */}
                        <button
                          className="btn btn-dark"
                          onClick={() => handleRemove(item.id)}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
