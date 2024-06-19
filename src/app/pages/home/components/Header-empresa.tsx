"use client";

import Menu from "./Menu";
import BtnHeader from "./Btn-header";
import "../styles.css";
import MenuEmpresa from "./Menu.empresa";
import Image from "next/image"; // Importing the Image component from next/image

function HeaderEmpresa() {
  return (
    <>
      <div className="header">
        <a href="/">
          <Image 
            className="img-logo" 
            src="/path/to/your/logo.png" // Provide the path to your logo image
            alt="Company Logo" 
            width={50} // Adjust the width as per your requirements
            height={50} // Adjust the height as per your requirements
          />
        </a>
        <MenuEmpresa />
        <BtnHeader />
      </div>
    </>
  );
}

export default HeaderEmpresa;
