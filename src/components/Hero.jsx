import styled from "styled-components";

const Hero = () => {
  return (
    <Div>
      <div className="img">
        <h1>
          Transforming Spaces, One <br /> Clean at a Time
        </h1>

        <p>
          Explore our range of cleaning solutions and experience the difference
          of a pristine space today.
        </p>
        <button className="readmore">Read More</button>
      </div>
    </Div>
  );
};

export default Hero;

const Div = styled.div`
  div {
    background-image: url("assets/hero-img.png");
    height: 600px;
    margin-top: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: column;
    text-align: center;
  }

  h1 {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 48.242px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 18.75px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  .readmore {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 16.875px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.8px;
    outline: none;
    border: none;
    background: transparent;
  }
`;
