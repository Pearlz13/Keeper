import React from "react";

function Footer(){
  const date = new Date().getFullYear();
  return(
    <div>
      <footer>
        <p>copyright © {date}</p>
      </footer>
    </div>
  );
}
export default Footer;