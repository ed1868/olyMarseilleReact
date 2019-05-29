import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class Activities extends React.Component {
  render() {
    // OwlCarousel Option for Prices
    const options = {
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:2,
            nav:false,
            dots:true
        },
        767:{
            items:2,
            nav:false,
            dots:true
        },
        992:{
            items:3,
            nav:false,
            dots:true
        },
        // 1000:{
        //     items:4
        // }
    };

    // Dynamic Price Data Easy to Update
    let data = [
        {title: 'D.C United Vs Marseille', id:0, lable:'07/24/2019', price:'150', features:'<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>', link:'#'},
        {title: 'D.C United Vs Marseille', id:1, lable:'07/27/2019', price:'230', features:'<li>Section 100, Row 02</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>', link:'#'},
        {title: 'D.C United Vs Marseille',id:2, lable:'07/29/2019', price:'189', features:'<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
        // {title: 'D.C United Vs Marseille', lable:'07/29/2019', price:'190', features:'<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
        // {title: 'D.C United Vs Marseilled', lable:'07/29/2019', price:'359', features:'<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
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
                            <span className="d-block"></span>
                        </h5>
                    </div>
                    <div className="price-plan text-center">
                        <ul>
                            <li>{val.lable}</li>
                            <li>7:00pm</li>
                            <li>Section 100, Row 02</li>
                            <li>Per Ticket</li>
                        </ul>
                        <div id="priceButton"className="btn btn-primary bookButton">Add</div>
                    </div>
                </div>
            </div>
        );
    });
		
  	return (
        <section className="theme-bg" id="activities">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2 className="text-white">Activities</h2>
                            <img src="assets/images/white-line.png" alt="title-line" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                    <OwlCarousel
                        className="plan-slider owl-carousel owl-theme"
                        loop={true}
                        items={3}
                        margin={15}
                        navClass={['owl-prev','owl-next']}
                        navText={['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>']}
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