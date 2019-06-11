import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
export default class Package extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packageOne: [
        {
          packageTitle: "Package One",
          gameOne: "Montepellier HSC VS AS Saint Etienne",
          gameOneTotalPrice: 45.0,
          gameTwo: "O.Marseille VS Girondins de Bordeaux",
          gameTwoTotalPrice: 35.44,
          gameThree: "Tournament Championship Game",
          gameThreeTotalPrice: 50.44,
          activityOne: "Access to OM special area in the stadium",
          activityOneTotalPrice: 10.0,
          activityTwo: "Training Session + Transport on July 19th. Time TBC",
          activityTwoTotalPrice: 20.0,
          activityThree:
            "Exclusive Party on Saturday July 20th, Evening-Time TBC",
          activityThreeTotalPRice: 30.0,
          activityFour:
            "Friendly Game on Wednesday July 24th, Afternoon-Time TBC",
          activityFourTotalPrice: 40.0,

          packageId: Number(0),
          packageTotalPrice: 230.88,
          quantity: 1
        }
      ],
      packageTwo: [
        {
          packageTitle: "Package Two",
          gameOne: "Montepellier HSC VS AS Saint Etienne",
          gameOneTotalPrice: 45.0,
          gameTwo: "O.Marseille VS Girondins de Bordeaux",
          gameTwoTotalPrice: 35.44,

          activityOne: "Access to OM special area in the stadium",
          activityOneTotalPrice: 10.0,
          activityTwo: "Training Session + Transport on July 19th. Time TBC",
          activityTwoTotalPrice: 20.0,
          activityThree:
            "Exclusive Party on Saturday July 20th, Evening-Time TBC",
          activityThreeTotalPRice: 30.0,

          packageId: Number(1),
          packageTotalPrice: 122.44,
          quantity: 1
        }
      ],
      packageThree: [
        {
          packageTitle: "Package Three",
          gameTwo: "O.Marseille VS Girondins de Bordeaux",
          gameTwoTotalPrice: 35.44,
          gameThree: "Tournament Championship Game",
          gameThreeTotalPrice: 50.44,

          activityOne: "Access to OM special area in the stadium",
          activityOneTotalPrice: 10.0,
          activityThree:
            "Exclusive Party on Saturday July 20th, Evening-Time TBC",
          activityThreeTotalPRice: 30.0,
          activityFour:
            "Friendly Game on Wednesday July 24th, Afternoon-Time TBC",
          activityFourTotalPrice: 40.0,

          packageId: Number(2),
          packageTotalPrice: 165.88,
          quantity: 1
        }
      ],
      option: Number(0),
      packageQuantity: 1
    };
  }

  numberOfTickets = e => {
    e.preventDefault();

    console.log(e.target.value);
    this.setState({ packageQuantity: e.target.value });
  };

  onPackageClick = e => {
    e.preventDefault();
    var element = document.getElementById("hotels");
    element.scrollIntoView();
    console.log("entro en on package click");

    let packageOne = this.state.packageOne[0];
    let packageTwo = this.state.packageTwo[0];
    let packageThree = this.state.packageThree[0];

    if (e.target.id == packageOne.packageId) {
      console.log("you hit package one baby ");

      let staringPrice =
        this.state.packageOne[0].packageTotalPrice * this.state.packageQuantity;

      packageOne.packageTotalPrice = staringPrice;
      packageOne.quantity = Number(this.state.packageQuantity);

      this.props.onPackageClick(this.state.packageOne);
    }
    if (e.target.id == packageTwo.packageId) {
      console.log("you hit package two baby ");

      let staringPrice =
        this.state.packageTwo[0].packageTotalPrice * this.state.packageQuantity;

      packageTwo.packageTotalPrice = staringPrice;  
      packageTwo.quantity = Number(this.state.packageQuantity);
      
      
      this.props.onPackageClick(this.state.packageTwo);
    }
    if (e.target.id == packageThree.packageId) {
      console.log("you hit package three baby ");
      let staringPrice =
      this.state.packageThree[0].packageTotalPrice * this.state.packageQuantity;

      packageThree.packageTotalPrice = staringPrice;  
      packageThree.quantity = Number(this.state.packageQuantity);


      this.props.onPackageClick(this.state.packageThree);
    }
  };

  render() {
    // OwlCarousel Option for Prices
    console.log(this.state);
    const options = {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      600: {
        items: 2,
        nav: false,
        dots: true
      },
      767: {
        items: 2,
        nav: false,
        dots: true
      },
      992: {
        items: 3,
        nav: false,
        dots: true
      }
      // 1000:{
      //     items:4
      // }
    };

    // Dynamic Price Data Easy to Update
    let data = [
      {
        title: "3 GAMES ",
        id: 0,
        gameOne: "Montepellier HSC VS AS Saint Etienne",
        gameOneTeamOneUrl: "assets/images/MONTPELLIERcouleur.png",
        gameOneTeamTwoUrl: "assets/images/SAINTETIENNEcouleur.png",

        gameTwo: "3rd place game OR Championship Game TBC",
        gameTwoTeamOneUrl: "assets/images/marseilleGameLogo.png",
        gameTwoTeamTwoUrl: "assets/images/BORDEAUXcouleur.png",

        gameThree: "Friendly between OM and D.C United",
        activities: {
          activityOne: "Access to OM special area in the stadium",
          activityTwo: "Training Session + Transport on July 19th and July 23rd. Time TBC",
          activityThree:
            "Exclusive Party on Saturday July 20th, Evening-Time TBC",
          activityFour:
            "Friendly Game on Wednesday July 24th, Afternoon-Time TBC"
        }
      },
      {
        title: "2 GAMES",
        id: 1,
        gameOne: "Montepellier HSC VS AS Saint Etienne",
        gameOneTeamOneUrl: "assets/images/MONTPELLIERcouleur.png",
        gameOneTeamTwoUrl: "assets/images/SAINTETIENNEcouleur.png",
        gameTwo: "3rd place game OR Championship Game TBC",
        gameTwoTeamOneUrl: "assets/images/marseilleGameLogo.png",
        gameTwoTeamTwoUrl: "assets/images/BORDEAUXcouleur.png",

        activities: {
          activityOne: "Access to OM special area in the stadium",
          activityTwo: "Training Session + Transport on July 19th and July 23rd. Time TBC",
          activityThree:
            "Exclusive Party on Saturday July 20th, Evening-Time TBC"
        }
      },
      {
        title: "2 GAMES PT 2",
        id: 2,
        gameTwo: "3rd place game OR Championship Game TBC",
        gameTwoTeamOneUrl: "assets/images/marseilleGameLogo.png",
        gameTwoTeamTwoUrl: "assets/images/BORDEAUXcouleur.png",

        gameThree: "Friendly between OM and D.C United",
        activities: {
          activityOne: "Access to OM special area in the stadium",
          activityThree:
            "Exclusive Party on Saturday July 20th, Evening-Time TBC",
          activityFour:
            "Friendly Game on Wednesday July 24th, Afternoon-Time TBC"
        }
      }
      // {
      //   title: "The Golden Goal",
      //   id: 3,
      //   gameOne: "Montepellier HSC VS AS Saint Etienne",
      //   activities: {
      //     activityOne: "Access to OM special area in the stadium",
      //     activityTwo: "Training Session + Transport on July 19th. Time TBC",
      //     activityThree:
      //     "Exclusive Party on Saturday July 20th, Evening-Time TBC",
      //   }
      // }, {
      //   title: "The Golden Goal pt 2",
      //   id: 4,
      //   gameTwo: "O.Marseille VS Girondins de Bordeaux",
      //   activities: {
      //     activityOne: "Access to OM special area in the stadium",
      //     activityTwo: "Training Session + Transport on July 19th. Time TBC",
      //     activityThree:
      //     "Exclusive Party on Saturday July 20th, Evening-Time TBC",
      //   }
      // }
      // , {
      //   title: "The Golden Goal pt 3",
      //   id: 5,
      //   gameThree: "Tournament Championship Game",
      //   activities: {
      //     activityOne: "Access to OM special area in the stadium",
      //     activityTwo:
      //     "Friendly Game on Wednesday July 24th, Afternoon-Time TBC"

      //   }
      // }
      // {title: 'D.C United Vs Marseille', lable:'07/29/2019', price:'190', features:'<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
      // {title: 'D.C United Vs Marseilled', lable:'07/29/2019', price:'359', features:'<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
    ];

    // Dynamic Price Data Loop
    let DataList = data.map((val, i) => {
      let gameOne = val.gameOne;

      let gameOneTeamOneUrl = val.gameOneTeamOneUrl;

      let gameOneTeamTwoUrl = val.gameOneTeamTwoUrl;
      let gameTwo = val.gameTwo;
      let gameTwoTeamOneUrl = val.gameTwoTeamOneUrl;
      let gameTwoTeamTwoUrl = val.gameTwoTeamTwoUrl;
      let gameThree = val.gameThree;
      let urlOne = gameOneTeamOneUrl;
      let gameFour = "3rd Place Game";

      let activityOne = val.activities.activityOne;
      let activityTwo = val.activities.activityTwo;
      let activityThree = val.activities.activityThree;
      let activityFour = val.activities.activityFour;

      if (
        gameOne != undefined &&
        gameTwo != undefined &&
        gameThree != undefined
      ) {
        return (
          <div className="item" id="packages" key={i}>
            <div className="package-box">
              <h3 className="packageTitle">{val.title}</h3>
              <div className="price-box">
                <h3 className="packageGameHeader">Games Included</h3>
                {/* <ul> */}
                {/* <p>{gameOne}</p> */}
                {/* <div className="row">
                  <div className="col-md-12">
                    <img className="heightPic" src={gameOneTeamOneUrl} />{" "}
                    <strong className="vs">VS.</strong>{" "}
                    <img
                      id="special"
                      className="heightPic"
                      src={gameOneTeamTwoUrl}
                    />
                  </div>
                </div> */}

                <div className="row">
                  <div className="col-md-12">
                    <img id="marseilleSpecial" src={gameTwoTeamOneUrl} />{" "}
                    <strong className="vs">VS.</strong>{" "}
                    <img
                      // id="special"
                      className="heightPic"
                      src={gameTwoTeamTwoUrl}
                    />
                  </div>
                </div>
                <br />
                <p className="unknown">{gameTwo}</p>
                <p className="unknown">{gameThree}</p>
                <br />
                {/* </ul> */}

                <h5 className="plan-clr">
                  <span className="d-block" />
                </h5>
              </div>
              <br />
              <h3 className="packageTitle">Activities</h3>
              {/* <ul> */}
              <p className="activitiesPackage">{activityOne}</p>
              <br />
              <p className="activitiesPackage">{activityTwo}</p>
              <br />
              <p className="activitiesPackage">
                Exclusive events at Audi Field
              </p>
              <br />
              {/* <p>{activityFour}</p> */}
              {/* </ul> */}

              <br />
              <p id="ex" />
              <input
                autoComplete="off"
                className="form-control"
                id="quantity"
                placeholder="Quantity  "
                name="quantity"
                onChange={e => this.numberOfTickets(e)}
                type="number"
              />

              <div className="price-plan text-center">
                <button
                  onClick={this.onPackageClick}
                  id={val.id}
                  className="btn btn-primary bookButton"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      }

      if (gameOne != undefined && gameTwo != undefined) {
        return (
          <div className="item" id="tickets" key={i}>
            <div className="package-box">
              <h3 className="packageTitle">{val.title}</h3>
              <div className="price-box">
                <h3 className="packageGameHeader">Games Included</h3>
                {/* <div className="row">
                  <div className="col-md-12">
                    <img className="heightPic" src={gameOneTeamOneUrl} />{" "}
                    <strong className="vs">VS.</strong>{" "}
                    <img
                      id="special"
                      className="heightPic"
                      src={gameOneTeamTwoUrl}
                    />
                  </div>
                </div> */}

                {/* <ul> */}
                {/* <p></p> */}

                <div className="row">
                  <div className="col-md-12">
                    <img id="marseilleSpecial" src={gameTwoTeamOneUrl} />{" "}
                    <strong id="vsSpecialTwo" className="vs">
                      VS.
                    </strong>{" "}
                    <img
                      id="specialTwo"
                      className="heightPic"
                      src={gameTwoTeamTwoUrl}
                    />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <p className="unknown">{gameTwo}</p>
                <br />
                {/* </ul> */}

                <h5 id="helper" className="plan-clr">
                  <span className="d-block" />
                </h5>
              </div>
              <p id="helperTwo" />
              <h3 className="packageTitle">Activities</h3>
              {/* <ul id="special"> */}
              <p className="activitiesPackage">{activityOne}</p>
              <br />
              <p className="activitiesPackage">{activityTwo}</p>
              <br />
              <p className="activitiesPackage">
                Exclusive events at Audi Field
              </p>
              <br />

              {/* </ul> */}

              <br />
              <input
                autoComplete="off"
                className="form-control "
                id="quantity"
                placeholder="Quantity  "
                name="quantity"
                onChange={e => this.numberOfTickets(e)}
                type="number"
              />

              <div className="price-plan text-center">
                <button
                  onClick={this.onPackageClick}
                  id={val.id}
                  className="btn btn-primary bookButton"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      }
      if (gameTwo != undefined && gameThree != undefined) {
        return (
          <div className="item" id="tickets" key={i}>
            <div className="package-box">
              <h3 className="packageTitle">{val.title}</h3>
              <div className="price-box">
                <h3 className="packageGameHeader">Games Included</h3>
                {/* <ul> */}
                <div className="row">
                  <div className="col-md-12">
                    <img id="marseilleSpecial" src={gameTwoTeamOneUrl} />{" "}
                    <strong className="vs">VS.</strong>{" "}
                    <img
                      // id="special"
                      className="heightPic"
                      src={gameTwoTeamTwoUrl}
                    />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <p className="unknown">{gameThree}</p>
                {/* <p className="activitiesPackage">
                  Exclusive events at Audi Field
                </p> */}
                <br />
                {/* <br />
                <br />
                <p id="custom" />
                <br />
                <br /> */}
                {/* </ul> */}

                <h5 id="helper" className="plan-clr">
                  <span className="d-block" />
                </h5>
              </div>
              <br />
              <h3 className="packageTitle">Activities</h3>
              {/* <ul id="specialTwo"> */}
              <p className="activitiesPackage">{activityOne}</p>
              <br />
              <p className="activitiesPackage">
                Exclusive events at Audi Field
              </p>
              <br />
              {/* <p>{activityFour}</p> */}
              <br />
              <br />
              <br />
              <p id="fillerTwo" />

              {/* </ul> */}

              <br />
              <input
                autoComplete="off"
                className="form-control "
                id="quantity"
                placeholder="Quantity  "
                name="quantity"
                onChange={e => this.numberOfTickets(e)}
                type="number"
              />

              <div className="price-plan text-center">
                <button
                  onClick={this.onPackageClick}
                  id={val.id}
                  className="btn btn-primary bookButton"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      }
      // if (gameOne == undefined) {
      //   return (
      //     <div className="item" id="tickets" key={i}>
      //       <div className="package-box">
      //         <h3 className="packageTitle">{val.title}</h3>
      //         <div className="price-box">
      //           <h3 className="packageGameHeader">Games Included</h3>
      //           <ul>
      //             <li className="games">{gameTwo}</li>
      //             <br />
      //             <br />
      //             <br />
      //             <br />
      //           </ul>

      //           <h5 className="plan-clr">
      //             <span className="d-block" />
      //           </h5>
      //         </div>
      //         <br />
      //         <h3 className="packageTitle">Activities</h3>
      //         <ul>
      //           <li className="activities">{activityOne}</li>
      //           <br />
      //           <li className="activities">{activityThree}</li>
      //           <br />
      //           <li className="activities">{activityFour}</li>
      //           <br />
      //           <br />
      //           <br />
      //           <br />
      //           <br />
      //         </ul>

      //         <br />
      //         <input
      //           autoComplete="off"
      //           className="form-control "
      //           id="quantity"
      //           placeholder="Quantity  "
      //           name="quantity"
      //           // onChange={e => this.handleRoomPrince(e)}
      //           type="number"
      //         />

      //         <div className="price-plan text-center" />
      //         <button
      //           onClick={this.onPackageClick}
      //           id={val.id}
      //           className="btn btn-primary bookButton"
      //         >
      //           Add
      //         </button>
      //       </div>
      //     </div>
      //   );
      // }
    });

    return (
      <section id="packages">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 id="packageHeader">The Packages</h2>
                {/* <img
                  src="assets/images/blueTitleLine.png"
                  alt="title-line"
                  className="img-fluid"
                /> */}
              </div>
            </div>
            <div className="col-md-12 text-center">
              <OwlCarousel
                className="plan-slider owl-carousel owl-theme"
                loop={false}
                items={3}
                margin={15}
                navClass={["owl-prev", "owl-next"]}
                navText={[
                  '<i class="fa fa-angle-left"></i>',
                  '<i class="fa fa-angle-right"></i>'
                ]}
                nav={true}
                dots={false}
                responsive={options}
              >
                {DataList}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
