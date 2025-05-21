import React from "react";
import { Link } from "react-router-dom";

function BodyHeader({text,btntext,link}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: "1% 7%",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div>
        <h1 style={{ display: "inline-block" }}>{text}</h1>
      </div>
      <div>
        <Link to={link}>
          <button
            className="btn btn-primary"
            style={{ display: "inline-block", backgroundColor: "#003454" }}
          >
            {btntext}
          </button>
        </Link>{" "}
      </div>
    </div>
  );
}

export default BodyHeader;
