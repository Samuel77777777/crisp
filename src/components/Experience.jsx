// import React from 'react'
import styled from "styled-components";

const Experience = () => {
  return (
    <Div>
      <div>
        <h1>Experience the difference</h1>
        <p>Feel free to contact us to establish project details.</p>
      </div>

      <div>
        <button>Get Started</button>
        <p>Learn More</p>
      </div>
    </Div>
  );
};

export default Experience;

const Div = styled.div`
  display: flex;
  max-width: 85%;
  height: 304.52px;
  flex-shrink: 0;
  background-color: #ff914d;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 20px;

  h1 {
    color: #fff;
    font-family: Inter;
    font-size: 44.797px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    color: #fff;
    font-family: Inter;
    font-size: 18.594px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 172.101% */
    letter-spacing: 0.6px;
    text-align: center;
  }

  button {
    width: 332.67px;
    height: 64.55px;
    flex-shrink: 0;
    border-radius: 999px;
    border: 1px solid #ff914d;
    background: #fff;
    outline: none;
  }
`;
