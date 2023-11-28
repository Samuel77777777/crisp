// import React from 'react'
import styled from "styled-components";

const Process = () => {
  return (
    <Div>
      <div className="header">
        <h1>
          Our Seamless <span>Cleaning Process</span>{" "}
        </h1>
        <p>
          At Crisp Cleaning Corporation, we believe in simplifying your life
          through our seamless process.
        </p>
      </div>

      <div className="items">
        {/* item 1 */}
        <div className="item">
          <div className="img">
            <img src="assets/book.png" alt="" />
          </div>

          <h2>Bookings</h2>
          <p>
            {" "}
            Simply tell us your preferences, select a date and time that suits
            you.
          </p>
        </div>

        {/* items 2 */}
        <div className="item">
          <div className="img">
            <img src="assets/spray.png" alt="" />
          </div>

          <h2>Cleaning</h2>
          <p>
            We take pride in not only meeting but exceeding your expectations.
          </p>
        </div>

        {/* items 3 */}
        <div className="item">
          <div className="img">
            <img src="assets/star.png" alt="" />
          </div>

          <h2>Relaxing</h2>
          <p>
            Kick back, enjoy the cleanliness, and savor your newfound free time.
          </p>
        </div>
      </div>
    </Div>
  );
};

export default Process;

const Div = styled.div`
  margin-top: 300px;
  text-align: center;

  .header h1 {
    color: #0b3558;
    text-align: center;
    font-family: Inter;
    font-size: 46.875px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .header span {
    color: #ff914d;
  }

  .header p {
    color: #06253d;
    text-align: center;
    font-family: Inter;
    font-size: 18.75px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  .items {
    display: flex;
    justify-content: space-between;
    align-itens: center;
    margin-top: 50px;
    align-items: center;
    gap: 20px;
  }

  .img {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.2);
    width: 155.22px;
    height: 112.02px;
    align-items: center;
  }

  .item {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .item h2 {
    color: #ff914d;
    text-align: center;
    font-family: Inter;
    font-size: 18.594px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 50px;
  }

  .item p {
    color: #06253d;
    text-align: center;
    font-family: Inter;
    font-size: 13.945px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
