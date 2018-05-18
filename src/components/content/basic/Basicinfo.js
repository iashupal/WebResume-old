import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Tooltip from 'react-tooltip-lite';
// import { Tooltip } from 'react-lightweight-tooltip';
import {Home} from './home/Home';
import {About} from './about/About';
import {Contact} from './contact/Contact';

import {Cv} from './cv/Cv';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Basicinfo.css';
// import $ from 'jquery';


// const Basicinfo = {
//   content: {
//     backgroundColor: '#3d4a6e',
//     color: 'white'
//   },
//   Tooltip:{
//     borderRadius: '10px',
//     backgroundColor:'#3d4a6e',
//   },
//   arrow: {
//     borderRight: 'solid #3d4a6e 5px',
//   },
// };
//const Tooltip = ReactToolTipLite.default;
export const Basicinfo = ()=>{
    return(
      // $(document).ready(function(){
      //   $('[data-toggle="tooltip"]').tooltip();
      // });
      <Router>
        <div className="content-div">
          <div className="content-icons hidden-xs">
            <div className="content-inner-div">
                   <ul className="list-unstyled">
                     <li>
                       <Link to="/" data-toggle="tooltip" data-placement="right" title="HOME">
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
                       <Link to="/cv" data-toggle="tooltip" data-placement="right" title="RESUME">
                         <i className="fa fa-file-text">
                         </i>
                       </Link>
                      
                     </li>
                     <li>
                       <Link to="contact" data-toggle="tooltip" data-placement="right" title="CONTACT">
                         <i className="fa fa-map-marker">
                         </i>
                       </Link>
                      
                     </li>
                   </ul>
            </div>       
                   
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