import React from "react";
import "./Navbar.css"

function Navbar() {

    return (
         <nav class="nav-box">
         <div class="box1">
          <h3> 
            <span>FITNESS & GYM</span> CLUB    
            </h3>
            </div>
            <div class="box2">
              <h6>YOUR HEALTH PARTNER</h6>
              <div>
               <h5>
                 CALL US TODAY<span class="phone">800.587.2583</span>
              </h5>
            </div>
         </div>
        </nav>
    );  
}

export default Navbar;