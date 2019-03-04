import React from "react"

import header from "../../img/header.png"
import search from "../../img/search.png"

import "../../css/header.css"

class Header extends React.Component{
    render(){
       return(
        <header>
           <div className="air">
                <img src={header} />
           </div>
            <div className="search">
                <img src={search} />

           </div>
    </header>
       ) 
    }
}

export default Header;