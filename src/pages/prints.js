import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Prints = () => (
  <div>
    <h3>Prints</h3>
    <p>All images are availabe as an Open Edition Print and are priced at:</p>
    <p>
      <b>A4: &pound;55</b> | <b>A3: &pound;70</b>
    </p>
    <p>
      To order use the <Link to="/contact">contact email</Link>
    </p>
  </div>
);

export default DefaultLayout(Prints);
