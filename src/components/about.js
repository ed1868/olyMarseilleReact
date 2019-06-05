import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed} from '@fortawesome/fontawesome-free-solid';
import { faTicketAlt} from '@fortawesome/fontawesome-free-solid';
import { faCalendar, faFutbol, faStar} from '@fortawesome/fontawesome-free-regular';


class About extends React.Component {
  render() {
		
  	return (
        
  	    <section id="about"  className="sectionTwo">

              <div className="about-chat">
                 <div className="container ">
                    <div className="row">
                       <div className="col-md-12 text-center">
                          <div className="section-title">
                             <h2 className="hotelTitle">THE EXPERIENCE</h2>
                             <img src="assets/images/title-line.png" alt="title-line" className="img-fluid"/>
                          </div>
                       </div>

                       <div className="col-md-12 about-box">
                          <div className="row">
                             <div className="col-lg-3 col-6 about-border">
                                <div className="chat-box">
                                <a href="#hotels" ><FontAwesomeIcon className="aboutIcons" icon={faBed} /> </a>
                                      <h3  className="sub-title subtitles">Hotels</h3>
                                </div>
                             </div>
                             <div className="col-lg-3 col-6 about-border">
                                <div className="chat-box">
                                   {/* <img src="assets/images/get-notified.png" alt="get-notified" /> */}
                                   <a href="#tickets" ><FontAwesomeIcon className="aboutIcons" icon={faTicketAlt} /> </a>
                                      <h3  className="sub-title subtitles">Tickets</h3>
                                </div>
                             </div>
                             <div className="col-lg-3 col-6 about-border">
                                <div className="chat-box">
                                   {/* <img src="assets/images/stay-updated.png" alt="stay-updated"/>
                                  */}
                                 <a href="#games" ><FontAwesomeIcon className="aboutIcons" icon={faCalendar}/></a>
                                      <h3  className="sub-title subtitles">Schedule</h3>
                                </div>
                             </div>
                             <div className="col-lg-3 col-6">
                                <div className="chat-box">
                                <a href="#team" > <FontAwesomeIcon className="aboutIcons" icon={faFutbol}/></a>
                                      <h3 className="sub-title subtitles">Team</h3>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="col-md-12">
                          <div className="chat-slide">
                             <h3>Audi Field will have French accent with four-team tournament this summer Including your very own <span style=
                             {{color:' #009DDC;'}} id="marseille">Olympic Marseille</span></h3>
                             <br></br>
                             <h3>We Will Provide you with the best deals on hotels, Tickets to watch this thrilling tournament with style and comfort</h3>
                                {/* <img id="teamPic" src="assets/images/marseilleTeam.png" alt="stay-connected"/> */}

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