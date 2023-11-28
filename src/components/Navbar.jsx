// import React from 'react'
import styled from "styled-components";

const Navbar = () => {
  return (
    <Div>
      <nav className="nav">
        <div className="logo">
          <img src="assets/logo.png" />
          <div>
            <ul className="links">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>

        <div className="buttons">
          <button className="login">
            <img src="assets/login-img.png" alt="" /> Login
          </button>

          <button className="getstarted">Get Started</button>
        </div>
      </nav>
    </Div>
  );
};

export default Navbar;

const Div = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    height: 76px;
    width: 100%;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0px;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    width: 97px;
    height: 31px;
    margin-right: 80px;
  }

  .links {
    display: flex;
    gap: 50px;
    align-items: center;
  }

  .links li {
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    color: #0b3558;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
  }

  .buttons {
    display: flex;
    gap: 40px;
  }

  .login {
    display: flex;
    gap: 14px;
    background: transparent;
    border: none;
    outline: none;
    align-items: center;

    color: #ff914d;
    text-align: center;
    font-family: Inter;
    font-size: 14.414px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }

  .getstarted {
    border-radius: 999px;
    border: 1px solid #ff914d;
    background: #ff914d;
    width: 200.17px;
    height: 39.69px;

    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 13.711px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
  }
`;
