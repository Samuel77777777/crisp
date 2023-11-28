// import React from "react";
import styled from "styled-components";

const BookingsForm = () => {
  return (
    <Div>
      <form action="" className="form">
        <div>
          <div className="set1">
            <label htmlFor="cleaning">Cleaning Type</label> <br />
            <input type="text" id="cleaning" />
          </div>

          <div className="set1">
            <label htmlFor="">Full Name</label> <br />
            <input type="text" id="cleaning" />
          </div>
        </div>

        <div>
          <div className="set1">
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" />
          </div>

          <div className="set1">
            <label htmlFor="">Address</label> <br />
            <input type="text" id="Address" />
          </div>
        </div>
        <button className="book-now">Book Now</button>
      </form>
    </Div>
  );
};

export default BookingsForm;

const Div = styled.div`
  position: relative;
  justify-content: center;
  margin-bottom: 200px;
  .form {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.15);
    width: 80%;
    height: 271.19px;
    flex-shrink: 0;
    position: absolute;
    top: -100px;
    left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  div {
    display: flex;
    justify-content: space-between;
  }

  .set1 {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  input {
    width: 500px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 2px solid #e3e3e3;
    background: #fff;
    outline: none;
  }

  label {
    color: #000;
    font-family: Inter;
    font-size: 13.344px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.6px;
  }

  .book-now {
    border-radius: 5px;
    background: #ff914d;

    width: 510px;
    height: 40px;
    padding: 12px 0px;
    justify-content: center;
    align-items: center;

    margin-left: 10px;
    margin-bottom: 10px;
    outline: none;
    border: none;

    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 15.25px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
`;
