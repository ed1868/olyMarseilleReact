import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/fontawesome-free-solid";
import { faTicketAlt } from "@fortawesome/fontawesome-free-solid";

import {
  faCalendar,
  faFutbol,
  faStar
} from "@fortawesome/fontawesome-free-regular";

class About extends React.Component {



  render() {
    return (
      <section id="about" className="sectionTwo">
        <div className="about-chat">
          <div className="container ">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="section-title">
                  <h2 className="hotelTitle">THE EXPERIENCE</h2>
                  <img
                    src="assets/images/blueTitleLine.png"
                    alt="title-line"
                    className="img-fluid"
                  />
                </div>
              </div>
  
      
         
              {/* <div className="row">
                <div className="col-md-12">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a data-toggle="tab" href="#home">
                        Home
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu1">
                        Menu 1
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu2">
                        Menu 2
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div id="home" class="tab-pane fade in active">
                      <h3>HOME</h3>
                      <p>Some content.</p>
                    </div>
                    <div id="menu1" class="tab-pane fade">
                      <h3>Menu 1</h3>
                      <p>Some content in menu 1.</p>
                    </div>
                    <div id="menu2" class="tab-pane fade">
                      <h3>Menu 2</h3>
                      <p>Some content in menu 2.</p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-md-12 about-box">
                <div className="row">
                  <div className="col-lg-4 col-6 about-border">
                    <div className="chat-box ">
                      <a
                        data-toggle="tab"
                        href="#juego"
                        id="game"
                        value="game"
                        onClick={this.myFunction}
                      >
                        {" "}
                        <FontAwesomeIcon
                          className="aboutIcons"
                          icon={faFutbol}
                        />
                      </a>
                      <h3 className="sub-title subtitles">Games</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 about-border">
                    <div className="chat-box">
                      {/* <img src="assets/images/get-notified.png" alt="get-notified" /> */}
                      <a href="#hotels">
                        <FontAwesomeIcon className="aboutIcons" icon={faBed} />{" "}
                      </a>
                      <h3 className="sub-title subtitles">Hotels</h3>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="chat-box">
                      {/* <img src="assets/images/stay-updated.png" alt="stay-updated"/>
                       */}
                      <a href="#games">
                        <FontAwesomeIcon
                          className="aboutIcons"
                          icon={faCalendar}
                        />
                      </a>
                      <h3 className="sub-title subtitles">Activities</h3>
                    </div>
                  </div>

                  {/* <div className="col-lg-3 col-6">
                                <div className="chat-box">
                                <a href="#team" > <FontAwesomeIcon className="aboutIcons" icon={faFutbol}/></a>
                                      <h3 className="sub-title subtitles">Team</h3>
                                </div>
                             </div> */}
                </div>
              </div>
              {/* <div class="tab-content">
                    <div id="juego" className="tab-pane fade in active">
                      <h3>HOME</h3>
                      <p>Some content.</p>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                      <h3>Menu 1</h3>
                      <p>Some content in menu 1.</p>
                    </div>
                    <div id="menu2" className="tab-pane fade">
                      <h3>Menu 2</h3>
                      <p>Some content in menu 2.</p>
                    </div>
                  </div> */}

              <div className="col-md-12">
                <div className="chat-slide">
                  <h3>
                    Audi Field will have French accent with four-team tournament
                    this summer Including your very own{" "}
                    <span style={{ color: " #009DDC;" }} id="marseille">
                      Olympic Marseille
                    </span>
                  </h3>
                  <br />
                  <h3>
                    We Will Provide you with the best deals on hotels, Tickets
                    to watch this thrilling tournament with style and comfort
                  </h3>
                  {/* <img id="teamPic" src="assets/images/marseilleTeam.png" alt="stay-connected"/> */}
                  <p id="disclaimerP">
                    {" "}
                    <span id="disclaimer">NOT</span> included in packages -
                    Flights – Airport transfer – VISA formalities – Hotel taxes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container-fluid text-center">
                 <img src="assets/images/banner.png" alt="banner.png" className="img-fluid full-banner"/>
              </div> */}
      </section>
    );
  }
}

export default About;
