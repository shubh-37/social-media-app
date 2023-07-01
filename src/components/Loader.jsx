import React from "react";
import "../css/loader.css";
import loader from "../7DZq.gif";
export default function Loader() {
  return (
    <div className="loader-div">
      <img src={loader} alt="loading" />
    </div>
  );
}
