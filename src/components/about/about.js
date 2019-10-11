import React,{Component} from 'react';
 
export default class About extends Component {
    render(){
        return(
            <React.Fragment>
               <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/29352113_2172846779410817_5430310912549032007_o.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              I am a Software Enginner that is passionate and really driven about sofwares,I have years of experience building software at scale for businesses and I also love to create things.
              I have hands on experience building web applications and mobile applications. You can always reach me on social media to chat me up or if you have something you want to build.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Sunmonu Oluwole</span><br />
                  <span> No 22, Lekki marawa<br />
                    Lagos NG
                  </span><br />
                  <span>08136593660</span><br />
                  
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
            </React.Fragment>
        );
    }
}
        