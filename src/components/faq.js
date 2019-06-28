import React from "react";

class FAQ extends React.Component {
  render() {
    return (
      <section className="faq " id="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="text-white">Frequently asked Questions</h2>
                <img
                  src="assets/images/white-line.png"
                  alt="title-line"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row faq-row">
            <div className="col-lg-6">
              <div className="accordion" id="accordionExample">
                <div className="card mb-3">
                  <div className="card-header" id="headingzero">
                    <h5 className="mb-0">
                      <button
                        className="faq-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsezero"
                        aria-expanded="false"
                        aria-controls="collapsezero"
                      >
                        What days can I book the hotel with the OM US Tour
                        Experience package?
                        <i className="fa fa-angle-down pull-right" />
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapsezero"
                    className="collapse"
                    aria-labelledby="headingzero"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      The OM US Tour Experience rates are available only for
                      fans by booking through https://omustourexperience.com/
                      between July 17th and July 25th, 2019, with a two-nights
                      minimum. If a guest wishes to book earlier or later than
                      these dates, they may do so directly with the hotel
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="faq-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What do I need upon check in at the hotel?
                        <i className="fa fa-angle-down pull-right" />
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      A valid form of identification (i.e. ID card, driver's
                      license, passport) and a valid credit card to be kept on
                      file for hotel incidentals. Guests are responsible for any
                      hotel incidentals. A deposit may be required at the time
                      of arrival. This deposit is fully refundable upon
                      inspection of your accommodations after departure.
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="faq-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What if I want to cancel my hotel reservation?
                        <i className="fa fa-angle-down pull-right" />
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      In the event a guest wishes to cancel their hotel
                      reservation, they must do so at least 72 hours prior to
                      the day of arrival otherwise a one night's room and tax
                      charge will apply. Cancellation must be requested by
                      emailing omustour@overseasinternational.com In the event
                      of a "no show" for a guaranteed reservation, a charge of
                      one night room and tax will be charged to the credit card.
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header" id="roomTypeG">
                    <h5 className="mb-0">
                      <button
                        className="faq-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Is my room type guaranteed?
                        <i className="fa fa-angle-down pull-right" />
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="roomTypeG"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      Room bedding type is not guaranteed. You may request a
                      single or double room but this request is subject to hotel
                      availability only. Please advise in the comment box if you
                      are traveling with children.
                    </div>
                  </div>
                </div>
              </div>
            </div>





{/* SECOND ROW OF QUESTIONS  */}




            <div className="col-lg-6">
              <div className="accordion" id="accordionFix">
                <div className="card mb-3">
                  <div className="card-header" id="rewardPoints">
                    <h5 className="mb-0">
                      <button
                        className="faq-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Can I use my Rewards/Points for the hotel?
                        <i className="fa fa-angle-down pull-right" />
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="rewardPoints"
                    data-parent="#accordionFix"
                  >
                    <div className="card-body">
                      The hotel is booked as a group event. This was done so
                      that we can offer these great rates to OM fans. Because of
                      the nature of this group room block, it is not possible
                      for individual Marriott Bonvoy points to be granted.
                    </div>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header" id="transportOpt">
                    <h5 className="mb-0">
                      <button
                        className="faq-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        What is the transportation option for?
                        <i className="fa fa-angle-down pull-right" />
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseFive"
                    className="collapse show"
                    aria-labelledby="transportOpt"
                    data-parent="#accordionFix"
                  >
                    <div className="card-body">
                      Transportation is being offered exclusively for OM fans,
                      roundtrip, between the hotel (Courtyard Marriott Capitol
                      Hill/Navy Yard and Residence Inn by Marriott Capitol
                      Hill/Navy Yard) and the location of the training sessions.
                      The cost is $30/person, per day (round-trip). The training
                      sessions are being held at an undisclosed location (for OM
                      security reasons) about 45 minutes outside of Washington,
                      D.C. Fans are NOT obligated to add this option to their
                      trips, and have access to ride services such as Uber and
                      Lyft. The price of these services fluctuate and may cost
                      anywhere between $14-$40 each way depending on the time of
                      day.
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header" id="cancellation">
                    <h5 className="mb-0">
                      <button
                        className="faq-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Can I cancel my purchase of game tickets and
                        transportation to the training sessions?
                        <i className="fa fa-angle-down pull-right" />
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    aria-labelledby="cancellation"
                    data-parent="#accordionFix"
                  >
                    <div className="card-body">
                      No. Purchases of game ticket and transportation to
                      training sessions are final. Please make sure to check the
                      dates of the games and training sessions to make sure you
                      will be able to attend.
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default FAQ;
