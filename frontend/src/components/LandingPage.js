import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container jumbo">
      <div className="row">
        <div className="col-sm-12">
          <div class="jumbotron">
            <h1>What Ever Projects you Make, </h1>
            <h1>You Can Do it With Mobo </h1>
            <p>
              Mobo gives your team the power and alignment you need to do your
              best work.
            </p>
            <div className="btn-landing">
              <Link to="/signup" className="btn btn-primary">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
