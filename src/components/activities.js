import React from "react";
import OwlCarousel from "react-owl-carousel";

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityOne: [
        {
          price: "54.00",
          activityName: "DC Unveiled",
          date: "05/20/2019",
          duration: "2 hours",
          totalPrice: "54.00",
          time: "10:00am ",
          description:
            "Leave the oversized tour buses behind and take open-air electric Red Roadsters to see DC in a sustainable way! On this mall and monuments” tour, explore famous monuments, war memorials, as well as venture through Capitol Hill and the Smithsonian museum areas, as well as other hot spots. ",
          ticketId: Number(0)
        }
      ],
      activityTwo: [
        {
          price: "60.00",
          activityName: "Monuments By NIght'",
          duration: "2 hours",
          date: "05/21/2019",
          totalPrice: "60.00",
          time: "8:00pm",
          description:
            "Hop on board an open-air sustainable electric Red Roadster for a journey through the most iconic DC monuments and memorials by night. Enjoy the Washington Monument, Licoln, FDR and Jefferson Memorials plus many more!",
          ticketId: Number(1)
        }
      ],
      activityThree: [
        {
          price: "34.00",
          activityName: "Museum of American History Thru Music'",
          duration: "2 hours",
          date: "05/22/2019",
          totalPrice: "34.00",
          description:
            "Travel through time and experience US History with a musical twist! Learn the evolution of spiritual music to blues, jazz & rock n roll, as well as the controversies of the American national anthem.Live out your DJ dreams by learning a funky beat with your local guide as well! ",
          time: "1:00pm ",
          ticketId: Number(2)
        }
      ],
      activityFour: [
        {
          price: "34.00",
          activityName: "Smithsonian American Art Adventure",
          duration: "2 hours",
          date: "05/22/2019",
          totalPrice: "34.00",
          description:
            "Dive into American History through art as you tour one of the world’s largest collections of art while listening to your local guide tell amazing tales of the power players who shaped the country ",
          time: "5:00pm ",
          ticketId: Number(3)
        }
      ],
      activityFive: [
        {
          price: "46.00",
          activityName: "French Speaking Tour through Washington DC",
          duration: "4 hours",
          totalPrice: "46.00",
          date: "05/22/2019",
          description:
            "Experience The Capitol, Supreme Court, Library of Congress, Thomas Jefferson Memorial, Lincoln Memorial and more with a french-speaking local guide. ",
          time: "5:00pm ",
          ticketId: Number(4)
        }
      ],
      activitySix: [
        {
          price: "34.00",
          duration: "4 hours",
          totalPrice: "34.00",
          activityName: "Rooftop Party at Audi Field",
          date: "07/20/2019",
          description:
            "Dive into American History through art as you tour one of the world’s largest collections of art while listening to your local guide tell amazing tales of the power players who shaped the country ",
          time: "9:00pm ",
          ticketId: Number(5)
        }
      ]
    };
  }
  onClickActivity = e => {
    e.preventDefault();
    console.log("ENTROOOO", e.target.id);

    let activityOne = this.state.activityOne[0];

    let activityTwo = this.state.activityTwo[0];
    let activityThree = this.state.activityThree[0];
    let activityFour = this.state.activityFour[0];
    let activityFive = this.state.activityFive[0];
    let activitySix = this.state.activitySix[0];

    var element = document.getElementById("checkoutForm");
    element.scrollIntoView();

    if (e.target.id == activityOne.ticketId) {
      console.log("ACTIVITY ONE IS TRYING TO BE ADDED TO HOME COMPONENT");
      this.props.onActivityClick(this.state.activityOne);
    }

    if (e.target.id == activityTwo.ticketId) {
      console.log("ACTIVITY TWO IS TRYING TO BE ADDED TO HOME COMPONENT");
      this.props.onActivityClick(this.state.activityTwo);
    }

    if (e.target.id == activityThree.ticketId) {
      console.log("ACTIVITY THREE IS TRYING TO BE ADDED TO HOME COMPONENT");
      this.props.onActivityClick(this.state.activityThree);
    }
    if (e.target.id == activityFour.ticketId) {
      console.log("ACTIVITY THREE IS TRYING TO BE ADDED TO HOME COMPONENT");
      this.props.onActivityClick(this.state.activityFour);
    }
    if (e.target.id == activityFive.ticketId) {
      console.log("ACTIVITY THREE IS TRYING TO BE ADDED TO HOME COMPONENT");
      this.props.onActivityClick(this.state.activityFive);
    }
    if (e.target.id == activitySix.ticketId) {
      console.log("ACTIVITY THREE IS TRYING TO BE ADDED TO HOME COMPONENT");
      this.props.onActivityClick(this.state.activitySix);
    }
  };

  render() {
    // OwlCarousel Option for Prices
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
      892: {
        items: 3,
        nav: true,
        dots: true
      },
      992: {
        items: 3,
        nav: true,
        dots: true
      },
      1000: {
        items: 3,
        nav: true,
        dots: true
      }
    };

    // Dynamic Price Data Easy to Update
    let data = [
      {
        title: "Electric Roadster Tour : DC Unveiled",
        id: 0,
        duration: "2 hours",
        lable: "07/24/2019",
        price: "54.00",
        time: "10:00am or 2:00pm",
        description:
          "Leave the oversized tour buses behind and take open-air electric Red Roadsters to see DC in a sustainable way! On this mall and monuments” tour, explore famous monuments, war memorials, as well as venture through Capitol Hill and the Smithsonian museum areas, as well as other hot spots. ",
        features:
          "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
        link: "#"
      },
      {
        title: "Electric Roadster Tour : Monuments By Night",
        id: 1,
        duration: "2 hours",
        price: "60.00",
        lable: "07/27/2019",
        time: "8:00pm",
        description:
          " Hop on board an open-air sustainable electric Red Roadster for a journey through the most iconic DC monuments and memorials by night. Enjoy the Washington Monument, Licoln, FDR and Jefferson Memorials plus many more ",
        features:
          "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
        link: "#"
      },
      {
        title: "Museum of American History Thru Music",
        id: 2,
        duration: "2 hours",
        lable: "07/29/2019",
        price: "34.00",
        time: "1:00pm",
        description:
          "Travel through time and experience US History with a musical twist! Learn the evolution of spiritual music to blues, jazz & rock n roll, as well as the controversies of the American national anthem.Live out your DJ dreams by learning a funky beat with your local guide as well! ",
        features:
          "<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>",
        link: "#"
      },
      {
        title: "Smithsonian American Art Adventure",
        id: 3,
        lable: "07/29/2019",
        duration: "2 hours",
        price: "34.00",
        time: "5:00pm",
        description:
          "Dive into American History through art as you tour one of the world’s largest collections of art while listening to your local guide tell amazing tales of the power players who shaped the country ",
        features:
          "<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>",
        link: "#"
      },
      {
        title: "French Speaking Tour through Washington DC",
        lable: "07/29/2019",
        duration: "4 hours",
        id: 4,
        price: "46.00",
        time: "5:00pm",
        description:
          "xperience The Capitol, Supreme Court, Library of Congress, Thomas Jefferson Memorial, Lincoln Memorial and more with a french-speaking local guide.",
        features:
          "<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>",
        link: "#"
      },
      {
        title: "Rooftop Party at Audi Field or SIX FLAGS America         ",
        id: 5,
        duration: "4 hours",
        lable: "07/20/2019",
        price: "100.00",
        time: "8:00pm",
        description: "After party at the rooftop of the Audi Field Stadium",
        features:
          "<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
        link: "#"
      }
    ];

    // Dynamic Price Data Loop
    let DataList = data.map((val, i) => {
      return (
        <div className="item" key={i}>
          <div className="package-box">
            <h3 className="subtitles">{val.title}</h3>
            <div className="price-box">
              <span id="moneyTag">$</span>
              <h2 className="prices">{val.price}</h2>
              <h5 className="plan-clr">
                <span className="d-block" />
              </h5>
            </div>
            <div className="price-plan text-center">
              <ul>
                <li>{val.lable}</li>
                <li>{val.time}</li>
                <li>Duration: {val.duration}</li>
                <li>Per Ticket</li>
              </ul>
              <button
                onClick={this.onClickActivity}
                id={val.id}
                className="btn btn-primary bookButton"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section className="backgroundColor" id="activities">
        {/* <section className="theme-bg" id="activities"> */}
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="hotelTitle">Activities</h2>
                <img
                  src="assets/images/blueTitleLine.png"
                  alt="title-line"
                  className="img-fluid"
                />
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

export default Activities;
