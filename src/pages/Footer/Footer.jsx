import React from "react";
import "./Footer.css";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Copyright © {" "}
        <Link color="primary" href="https://github.com/zbaharyilmaz">zbaharyilmaz</Link>{" "}
        <p>
            {new Date().getFullYear()} {" "} All rights reserved
        </p>
      
      </p>
    </div>
  );
};

export default Footer;
