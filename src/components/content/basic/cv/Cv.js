import React from 'react';
import '../../../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Cv.css';
import '../about/About.css';

export const Cv = ()=>{
    return(
        <div className="cv">
            <div className="container about-icon cv-icon">
              <i className="fa fa-file-text"></i>
               <h3>ABOUT <span>ME</span></h3>
            </div> 
            <div className="container about-skills">
                <div className="about-heading">
                    <h3>
                       WORK <span>EXPERIENCE</span>
                    </h3>
                </div>
                <div className="about-para">
                    <p>
                        Be. Under female subdue woman air midst moved dominion also morning, green rule saw saying don't
                         Abundantly creeping herb great there spirit brought appear heaven, sea that.
                    </p>
                </div>
                {/* education */}
                <div className="about-heading">
                    <h3>
                       MY <span>EDUCATION</span>
                    </h3>
                </div>
                <div className="about-para">
                    <p>
                        Be. Under female subdue woman air midst moved dominion also morning, green rule saw saying don't
                         Abundantly creeping herb great there spirit brought appear heaven, sea that.
                    </p>
                </div>
                <div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}