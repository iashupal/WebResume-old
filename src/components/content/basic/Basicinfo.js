import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Tooltip from 'react-tooltip-lite';
import {Home} from './home/Home';
import {About} from './about/About';
import {Contact} from './contact/Contact';
import {Cv} from './cv/Cv';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Basicinfo.css';

//const Tooltip = ReactToolTipLite.default;
export const Basicinfo = ()=>{
    return(
      <Router>
        <div className="content-div">
          <div className="content-icons">
                   <ul className="list-unstyled">
                     <li>
                       <Link to="/">
                         <i className="fa fa-home"></i>
                       </Link>
                                         
                     </li>
                     <li>
                       <Tooltip Content="ABOUT US" direction="right" tagName="span" className="target">
                       <Link to="/about">
                         <i className="fa fa-user-circle"></i>
                       </Link>
                       </Tooltip>
                       
                     </li>
                     <li>
                       <Link to="/cv">
                         <i className="fa fa-file-text">
                         </i>
                       </Link>
                      
                     </li>
                     <li>
                       <Link to="contact">
                         <i className="fa fa-map-marker">
                         </i>
                       </Link>
                      
                     </li>
                   </ul>
                 </div>
          <div className="content-info">   
          <Route exact path="/" component={Home} /> 
          <Route path="/about" component={About} />
          <Route path="/cv" component={Cv} />
          <Route path="/contact" component={Contact} />     
          </div>
          
        </div>
      </Router>    
    )
}