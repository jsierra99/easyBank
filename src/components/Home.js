import React from 'react';
import "../css/home.scss";
import "../css/header.scss";
import homeImage from "../img/bg-intro-desktop.svg";
import mobileImage from "../img/bg-intro-mobile.svg";
import phoneImage from "../img/image-mockups.png";

const Home = () => 
{
    return (
        <section className="home">
            <div className="container">
                <div className="grid_home">
                    <div className="home_images_mobile">
                        <img className="home_background_mobile" src={mobileImage} alt="background" />
                        <img className="home_overlap_mobile" src={phoneImage} alt="overlaps" />
                    </div>
                    <div className="home_info">
                        <h1>next generation digital banking</h1>
                        <p className="subtitle_para">Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more. </p>
                        <button className="btn btn_invite">Request Invite</button>
                    </div>
                    <div className="home_images">
                        <img className="home_background" src={homeImage} alt="background" />
                        <img className="home_overlap" src={phoneImage} alt="overlaps" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
