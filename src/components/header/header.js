import React,{Component} from 'react';
export default class Header extends Component {
render(){
    return(
      <React.Fragment>
           <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Sunmonu Oluwole.</h1>
            {/* <h3>I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
              effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr /> */}
            <ul className="social">
            <li><a href="https://www.linkedin.com/in/sunmonu-oluwole-b561a5166/"><i className="fa fa-linkedin" /></a></li>
            <li><a href="https://github.com/ndrymes?tab=repositories"><i className="fa fa-github" /></a></li>
            <li><a href="https://twitter.com/ndrymes"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.instagram.com/ndrymes/"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://facebook.com/sunmonu.oluwole?ref=bookmarks"><i className="fa fa-facebook" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
      </React.Fragment>
    );

}
}