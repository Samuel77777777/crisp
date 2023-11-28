// import React from 'react'
import styled from "styled-components";

const Card = () => {
  return (
    <Div>
      <div className="cards">
        <div className="card-1">
          <h3>One Time</h3>
          <p>
            Need a thorough one-time clean for your space? Our One <br /> Time
            Clean service is your solution.
          </p>
          <p>Perfect for special occasions or one-off needs.</p>

          <span>One time clean only</span>

          <button>Get a Quote</button>
        </div>
        {/*               
              //card 2 */}

        <div className="card-2">
          <button className="top-button">Most Popular</button>
          <h3>One Time</h3>
          <p>
            Need a thorough one-time clean for your space? Our One <br /> Time
            Clean service is your solution.
          </p>
          <p>Perfect for special occasions or one-off needs.</p>

          <span>One time clean only</span>

          <button className="bottom-button">Get a Quote</button>
        </div>

        <div className="card-3">
          <button className="top-button-3">Most Popular</button>
          <h3>One Time</h3>
          <p>
            Need a thorough one-time clean for your space? Our One <br /> Time
            Clean service is your solution.
          </p>
          <p>Perfect for special occasions or one-off needs.</p>

          <span>One time clean only</span>

          <button className="bottom-button-3">Get a Quote</button>
        </div>
      </div>
    </Div>
  );
};

export default Card;

const Div = styled.div`
  margin-top: 300px;
  width: 100%;

  .cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  .card-1 {
    max-width: 511.5px;
    height: 507.38px;
    flex-shrink: 0;

    border-radius: 25px;
    background: #fff;
    box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.15);
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .card-1 h3 {
    color: #ff914d;
    text-align: center;
    font-family: Inter;
    font-size: 29.648px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 30px;
  }

  .card-1 p {
    color: #0b3558;
    text-align: center;
    font-family: Inter;
    font-size: 14.297px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 167.869% */
  }

  .card-1 span {
    color: #ff914d;
    text-align: center;
    font-family: Inter;
    font-size: 14.297px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .card-1 button {
    border-radius: 999px;
    border: 1px solid #ff914d;
    background: #ff914d;

    width: 409.56px;
    height: 49.94px;
    flex-shrink: 0;

    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 14.18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
         margin:10px;
  }

  .card-2 {
    max-width: 511.5px;
    height: 507.38px;
    flex-shrink: 0;

    border-radius: 25px;
    background: #ff914d;
    box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.15);
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .card-2 h3 {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 29.648px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 30px;
  }

  .card-2 p {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 14.297px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 167.869% */
  }

  .card-2 span {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 14.297px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .bottom-button {
    border-radius: 999px;
    border: 1px solid #fff;
    background: #fff;

    width: 409.56px;
    height: 49.94px;
    flex-shrink: 0;

    color: #ff914d;
    text-align: center;
    font-family: Inter;
    font-size: 14.18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
         margin:10px;
  }

  .top-button {
    border-radius: 999px;
    border: 1px solid #fff;
    background: #fff;

    width: 242.11px;
    height: 49.94px;
    flex-shrink: 0;

    color: #ff914d;
    text-align: center;
    font-family: Inter;
    font-size: 14.18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
  }

  .card-3 {
    max-width: 511.5px;
    height: 507.38px;
    flex-shrink: 0;

    border-radius: 25px;
    background: #fff;
    box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.15);
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .card-3 h3 {
    color: #ff914d;
    text-align: center;
    font-family: Inter;
    font-size: 29.648px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 30px;
  }

  .card-3 p {
    color: #0b3558;
    text-align: center;
    font-family: Inter;
    font-size: 14.297px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 167.869% */
  }

  .card-3 span {
    color: #ff914d;
    text-align: center;
    font-family: Inter;
    font-size: 14.297px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .bottom-button-3 {
    border-radius: 999px;
    border: 1px solid :#ff914d;
    background: #ff914d;

    width: 409.56px;
    height: 49.94px;
    flex-shrink: 0;

    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 14.18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    outline:none;
    border:none;
     margin:10px;
  }

  .top-button-3 {
    border-radius: 999px;
    border: 1px solid #ff914d;
    background: #ff914d;

    width: 242.11px;
    height: 49.94px;
    flex-shrink: 0;

    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 14.18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;

      outline:none;
    border:none;
    margin:10px;
  }
`;
