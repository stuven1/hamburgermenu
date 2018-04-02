import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <Grid className="header-grid">

               <label for="hamburger" >
                 <div className="hamburger-lable"></div>
                 <div className="hamburger-lable"></div>
                 <div className="hamburger-lable"></div>
               </label>
               <input id="hamburger" type="checkbox" class="hamburger-checkbox"/>
               <div class="menu"> 
                 <a href="http://technigo.io">Technigo</a>
                 <a href="http://technigo.io">Boot Camp</a>
                 <a href="http://technigo.io">Stories</a>
                 <a href="http://technigo.io">About</a>
               </div>

        </Grid>

      </header>
    )
  }
}

export default Header
