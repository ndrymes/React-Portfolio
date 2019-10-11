import React,{Component} from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonial';


class App extends Component {
  render(){
    return(
       <div>
         <Header />
         <About />
         <Resume />
         <Portfolio />
         <Testimonials />
       </div>
    );
  }
}

export default App;
