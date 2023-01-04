// import React, {useState} from "react";
import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
import Rate from "./images/Rate.svg";
import Photo from "./images/img_photo.png";
import Left from "./images/Left button.svg";
import Right from "./images/Right button.svg";

export default class Testimonial extends Component {
  
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const mediaQuery = window.matchMedia('(max-width: 991px)')
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    if (mediaQuery.matches) {
      settings = {
        slidesToShow: 1,
      }
    }

    return (
      <section className="testimony">
        <div className="container">
          <div className="row">
            <div className="col-12 title">
              <h2>Testimonial</h2>
              <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
          </div>
          <div className="carousel">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div key={1} className="card">
                <div className="profile-image">
                  <img src={Photo} alt="" />
                </div>
                <div className="content">
                  <img src={Rate} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias neque ex tenetur maiores, illo nesciunt numquam harum
                    sint qui ipsum, perspiciatis beatae illum laborum incidunt
                    eaque est optio magni voluptate.
                  </p>
                  <h3>John Dee 32, Bromo</h3>
                </div>
              </div>
              <div key={2} className="card">
                <div className="profile-image">
                  <img src={Photo} alt="" />
                </div>
                <div className="content">
                  <img src={Rate} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias neque ex tenetur maiores, illo nesciunt numquam harum
                    sint qui ipsum, perspiciatis beatae illum laborum incidunt
                    eaque est optio magni voluptate.
                  </p>
                  <h3>John Dee 32, Bromo</h3>
                </div>
              </div>
              <div key={3} className="card">
                <div className="profile-image">
                  <img src={Photo} alt="" />
                </div>
                <div className="content">
                  <img src={Rate} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias neque ex tenetur maiores, illo nesciunt numquam harum
                    sint qui ipsum, perspiciatis beatae illum laborum incidunt
                    eaque est optio magni voluptate.
                  </p>
                  <h3>John Dee 32, Bromo</h3>
                </div>
              </div>
              <div key={4} className="card">
                <div className="profile-image">
                  <img src={Photo} alt="" />
                </div>
                <div className="content">
                  <img src={Rate} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias neque ex tenetur maiores, illo nesciunt numquam harum
                    sint qui ipsum, perspiciatis beatae illum laborum incidunt
                    eaque est optio magni voluptate.
                  </p>
                  <h3>John Dee 32, Bromo</h3>
                </div>
              </div>
            </Slider>
            <div style={{ textAlign: "center" }}>
              <a className="icon-button" href="" onClick={this.previous}>
                <img src={Left} alt="" />
              </a>
              <a className="icon-button" href="" onClick={this.next}>
                <img src={Right} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// import React from 'react';

// const Testimonial = () => {
//   // const [nama, setNama] = useState('nama kosong')

//   return (
//     <section className="testimony">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 title">
//             <h2>Testimonial</h2>
//             <p>Berbagai review positif dari para pelanggan kami</p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="center">
//             <div>your content</div>
//             <div>your content</div>
//             <div>your content</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Testimonial;