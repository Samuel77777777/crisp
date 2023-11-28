import styled from "styled-components";

const CompanyValues = () => {
  return (
    <Div>
      <div className="box-set1">
        <div className="header">
          <h1>
            Our Company <span>Values</span>
          </h1>
          <p>
            Our values just speak for themselves. They unite us as a team and
            determine <br /> the way we work on our projects. They are what
            drives and inspires us.
          </p>
        </div>

        <div className="colored-box">
          <div>
            <h2>02</h2>

            <h2>
              Community <br /> EngageMent
            </h2>

            <p>
              We are actively engaged in supporting our local communities and
              giving back through various initiatives and charitable efforts.
            </p>
          </div>

          <img src="assets/box4.png" alt="" />
        </div>

        <div className="box">
          <div>
            <h2 className="number">04</h2>

            <h2>
              Community <br /> EngageMent
            </h2>

            <p>
              We are actively engaged in supporting our local communities and
              giving back through various initiatives and charitable efforts.
            </p>
          </div>

          <img src="assets/box2.png" alt="" />
        </div>

        <div className="box">
          <div>
            <h2 className="number">06</h2>

            <h2>
              Community <br /> EngageMent
            </h2>

            <p>
              We are actively engaged in supporting our local communities and
              giving back through various initiatives and charitable efforts.
            </p>
          </div>

          <img src="assets/box6.png" alt="" />
        </div>
      </div>

      <div className="box-set1">
        <div className="box">
          <div>
            <h2 className="number">06</h2>

            <h2>
              Community <br /> EngageMent
            </h2>

            <p>
              We are actively engaged in supporting our local communities and
              giving back through various initiatives and charitable efforts.
            </p>
          </div>

          <img src="assets/box6.png" alt="" />
        </div>

        <div className="box">
          <div>
            <h2 className="number">06</h2>

            <h2>
              Community <br /> EngageMent
            </h2>

            <p>
              We are actively engaged in supporting our local communities and
              giving back through various initiatives and charitable efforts.
            </p>
          </div>

          <img src="assets/box6.png" alt="" />
        </div>

        <div className="colored-box">
          <div>
            <h2>02</h2>

            <h2>
              Community <br /> EngageMent
            </h2>

            <p>
              We are actively engaged in supporting our local communities and
              giving back through various initiatives and charitable efforts.
            </p>
          </div>

          <img src="assets/box4.png" alt="" />
        </div>
      </div>
    </Div>
  );
};

export default CompanyValues;

const Div = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  .header h1 {
    color: #0b3558;
    text-align: center;
    font-family: Inter;
    font-size: 46.875px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: start;
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
    text-align: start;
  }

  .colored-box {
    width: 428.42px;
    height: 259.63px;
    flex-shrink: 0;
    background: orange;
    display: flex;
    border-radius: 25px;
    box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.15);
    padding: 20px;
    margin-top: 50px;
  }

  .colored-box img {
    width: 113px;
    height: 76px;
  }

  .colored-box h2 {
    color: #fff;
    font-family: Inter;
    font-size: 19.219px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .colored-box p {
    color: #fff;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .colored-box div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .box {
    width: 428.42px;
    height: 259.63px;
    flex-shrink: 0;
    background: #fff;
    display: flex;
    border-radius: 25px;
    box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.15);
    padding: 20px;
    margin-top: 30px;
  }

  .box img {
    width: 113px;
    height: 76px;
  }

  .box h2 {
    color: #ff914d;
    font-family: Inter;
    font-size: 19.219px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .number {
    color: #0b3558;
    font-family: Inter;
    font-size: 19.219px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .box p {
    color: #0b3558;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .box div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;
