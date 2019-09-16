import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

export default function() {
    return (
        <div className="container ">
          <div className=" introduction text-center row justify-content-center align-items-center start-bootstrap">
            <div className="col-lg-10 align-self-end">
              <h1 className="display-4 text-white font-weight-bolder text-primary">
                WELCOME TO Z01NN'S WEB
              </h1>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="h5 text-white font-weight-light mb-5 text-primary">
                Web is built by Bootstrap. This just demo reactstrap
              </p>
              <Link
                className="btn btn-danger btn-xl badge-pill js-scroll-trigger text-white px-4 py-3 text-uppercase font-weight-bolder"
                to=""
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
      );
}