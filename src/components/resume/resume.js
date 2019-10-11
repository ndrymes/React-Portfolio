import React, {Component} from 'react';
export default class Footer extends Component {
    render(){
        return(
            <React.Fragment>
             <section id="resume">
            {/* Education
          ----------------------------------------------- */}
            <div className="row education">
              <div className="three columns header-col">
                <h1><span>Education</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Obafemi Awolowo University</h3>
                    <p className="info"> B.sc Civil Enginnering<span>•</span> <em className="date">April 2018</em></p>
                    <p>
                   
                    </p>
                  </div>
                </div> {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Udacity</h3>
                    <p className="info">Web developement<span>•</span> <em className="date"> 2018</em></p>
                    <p>
                      -Algorithms and Data structures
                      </p>
                      <p> -Building Rest Api</p>
                      <p>-Test driven Development </p>
                      <p>-Learning computer Science</p>
                  
                   
                  </div>
                </div> {/* item end */}
              </div> {/* main-col end */}
            </div> {/* End Education */}
            {/* Work
          ----------------------------------------------- */}
            <div className="row work">
              <div className="three columns header-col">
                <h1><span>Work</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Great Brands Nigeria Ltd.</h3>
                    <p className="info">Software Developer <span>•</span> <em className="date"> August - Present</em></p>
                    <p>
                    Helped my team to Improve Company productivity and minimize cost by building microservices architectured inventory optimization software that forecast market sales(using behavioural data, geographical data and other variants).
                    Automated restocking of goods and also automated logistic and distribution of goods on a large scale across Nigeria(processing million of records)
                    </p>
                  </div>
                </div> {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Collins Magnus Resources</h3>
                    <p className="info">Software Developer  <span>•</span> <em className="date">June 2019 - September 2019</em></p>
                    <p>
                      Lead the backend developement team that built a SaaS application that helps companies to reduce ambiguity in team management building services like leave tracker, a learning management system and a  messenger for communication within the companies among many other things.
                    <p>Built infrastructure to handle millions of client files and records across businesses</p>
                    </p>
                  </div>
                </div> {/* item end */}
              </div> {/* main-col end */}
            </div> {/* End Work */}
            {/* Skills
          ----------------------------------------------- */}
            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Skills</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="">
                  <ul className="skills">
                    <li><span className="bar-expand photoshop" /><em>MongoDB</em></li>
                    <li><span className="bar-expand photoshop" /><em>PostgreSQL</em></li>
                    <li><span /><em> PYTHON</em></li>
                    <li><span className="bar-expand node.js" /><em>Node.JS</em></li>
                    <li><span className="bar-expand html5" /><em>HTML5</em></li>
                    <li><span className="bar-expand jquery" /><em>React.js</em></li>
                    <li><span className="bar-expand jquery" /><em>Docker</em></li>
                    <li><span className="bar-expand jquery" /><em>Django</em></li>
                  </ul>
                </div>{/* end skill-bars */}
              </div> {/* main-col end */}
            </div> {/* End skills */}
          </section>
            </React.Fragment>
            
        );
    }
}