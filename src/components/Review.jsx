// import React from 'react'
import "./review.css";

const Review = () => {
  return (
    <>
      <div className="main">
        <div className="header">
          <h1>
            We believe in the{" "}
            <span>
              {" "}
              power of <br /> Community{" "}
            </span>{" "}
          </h1>
          <p>
            Explore the real experiences and success stories from <br /> our
            valued customers. Dive into these captivating video <br />{" "}
            testimonials that showcase their journeys with our <br /> services.
          </p>

          <button>Read More</button>
        </div>

        <div className="reviews">
          <div className="review1">
            <div className="top">
              <img src="assets/acc.png" alt="" />
              <h3>Enoch Ngawuja</h3>
            </div>
            <p>
              `From the moment they stepped in, it was clear that their <br />{" "}
              commitment to excellence was unparalleled``.
            </p>

            <h3>RedBull</h3>
            <h4>June 18 2023</h4>
          </div>

          <div className="review1">
            <div className="top">
              <img src="assets/acc.png" alt="" />
              <h3>Enoch Ngawuja</h3>
            </div>
            <p>
              `From the moment they stepped in, it was clear that their <br />{" "}
              commitment to excellence was unparalleled``.
            </p>

            <h3>RedBull</h3>
            <h4>June 18 2023</h4>
          </div>

          <div className="review1">
            <div className="top">
              <img src="assets/acc.png" alt="" />
              <h3>Enoch Ngawuja</h3>
            </div>
            <p>
              `From the moment they stepped in, it was clear that their <br />{" "}
              commitment to excellence was unparalleled``.
            </p>

            <h3>RedBull</h3>
            <h4>June 18 2023</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;

// const Div = styled.div;
// `
//

// `;
