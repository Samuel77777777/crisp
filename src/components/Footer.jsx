// import React from 'react'
import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <div className="section-1">
        <div className="logo">
          <div className="img">
            <img src="assets/logo.png" alt="" />
          </div>
          <div className="socials">
            <img src="assets/twit.png" alt="" />
            <img src="assets/reddit.png" alt="" />
            <img src="assets/linkedin.png" alt="" />
          </div>
        </div>

        <div className="site-map">
          <h2>Site Map</h2>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Testimonial</li>
            <li>Booking Consultants</li>
            <li>Membership Plans</li>
          </ul>
        </div>

        <div className="help">
          <h2>Help and Support</h2>

          <ul>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div>
        <form action="" className="form">
          <h4>Contact Us</h4>
          <div className="form-set1">
            <div>
              <label htmlFor="">First Name</label>
              <input type="text" name="" id="" placeholder="John" />
            </div>

            <div>
              <label htmlFor="">Last Name</label>
              <input type="text" name="" id="" placeholder="John" />
            </div>
          </div>

          <div className="form-set1" style={{ marginTop: 20 }}>
            <div>
              <label htmlFor="">Email</label>
              <input type="text" name="" id="" placeholder="John" />
            </div>

            <div>
              <label htmlFor="">Phone</label>
              <input type="text" name="" id="" placeholder="John" />
            </div>
          </div>

          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <button className="submit">Submit</button>
        </form>
      </div>
    </Div>
  );
};

export default Footer;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  padding: 30px;

  .section-1 {
    display: flex;
    gap: 40px;
    align-items: start;
  }

  h2 {
    color: #000;
    font-family: Inter;
    font-size: 19.063px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 167.869% */
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  li {
    list-style: none;
    text-align: start;
    color: #000;
    font-family: Inter;
    font-size: 15.625px;
    font-style: normal;
    font-weight: 400;
    line-height: 25.6px;
  }

  .socials {
    display: flex;
    gap: 15px;
  }

  .form-set1 {
    display: flex;
    gap: 20px;
  }

  .form-set1 div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  label {
    color: #000;
    font-family: Inter;
    font-size: 13.672px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.6px;
  }

  input {
    display: flex;
    width: 201.69px;
    padding: 11px 0px 13px 0px;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #000;
    border-top: none;
    border-left: none;
    border-right: none;
    background: #fff;
    outline: none;
    margin-top: 5px;
  }

  textarea {
    display: flex;
    width: 100%;
    padding: 11px 0px 13px 0px;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #000;
    border-top: none;
    border-left: none;
    border-right: none;
    background: #fff;
    outline: none;
    margin-top: 5px;
  }

  h4 {
    color: #000;
    font-family: Inter;
    font-size: 21.313px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
  }

  .submit {
    display: flex;
    width: 201.69px;
    height: 40px;
    padding: 12px 0px;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    background: #ff914d;
    margin-top: 10px;
    outline: none;
    border: none;
  }
`;
