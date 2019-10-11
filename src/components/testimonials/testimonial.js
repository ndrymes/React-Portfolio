import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1><span>Team-mates Testimonials</span></h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>Sunmonu Oluwole goes beyond being just a quality software engineer, he is also a talented engineer that puts his best into every project he does, amazing to work with, follow best practices and doesn’t just build softwares for the sake of it but equally ensures that he also builds these softwares to scale.
                          Oluwole is smart, enthusiastic but most importantly he ships great code!
                      </p>
                        <cite>Adeyinka Micheal Senior Software Enginner at Great Brands</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>Sunmonu Oluwole is a passionate and driven Software Engineer with a phenomenal mix of problem solving skills. He is a very self driven reliable engineer. He’s got a lot of grit. Ships great code fast. Knowledgeable and dependent!
                      </p>
                        <cite>Karo Uwede
                               Software Engineer at Terragon Group</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                  </ul>
                </div> {/* div.flexslider ends */}
              </div> {/* div.flex-container ends */}
            </div> {/* row ends */}
          </div>  {/* text-container ends */}
        </section>
      </React.Fragment>

    );
  }
}