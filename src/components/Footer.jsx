import React from "react";

const today = new Date();
const year = today.getFullYear();
const Footer = () => (
  <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      {year} © Cutie Math
    </p>
  </div>
);

export default Footer;
