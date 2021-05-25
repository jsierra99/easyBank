import React from 'react';
import "../css/about.scss";
import budgeting from "../img/icon-budgeting.svg";
import api from "../img/icon-api.svg";
import onboarding from "../img/icon-onboarding.svg";
import online from "../img/icon-online.svg";

const About = () => 
{
    return (
        <section className="about">
            <div className="container">
                <h1 className="sub_title">Why choose easybank?</h1>
                <p className="subtitle_para">We leverage Open Banking to turn your bank account into your 
                financial hub.</p>
                <p className="subtitle_para">Control your finances like never before.</p>
                <div className="grid_about">
                    <div className="about1">
                        <img src={online} alt="online svg" />
                        <h3>online banking</h3>
                        <p>Our modern web and mobile applications allow you to keep track of your finances 
                        wherever you are in the world.</p>
                    </div>
                    <div className="about1">
                        <img src={budgeting} alt="online svg" />
                        <h3>simple budgeting</h3>
                        <p>See exactly where your money goes each month. Receive notifications when you’re 
                        close to hitting your limits.</p>
                    </div>
                    <div className="about1">
                        <img src={onboarding} alt="online svg" />
                        <h3>fast onboarding</h3>
                        <p>We don’t do branches. Open your account in minutes online and start taking 
                        control of your finances right away.</p>
                    </div>
                    <div className="about1">
                        <img src={api} alt="online svg" />
                        <h3>open api</h3>
                        <p>Manage your savings, investments, pension, and much more from one account. 
                        Tracking your money has never been easier.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
