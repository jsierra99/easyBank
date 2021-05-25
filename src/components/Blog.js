import React from 'react';
import "../css/blog.scss";
import currency from "../img/image-currency.jpg";
import plane from "../img/image-plane.jpg";
import restaurant from "../img/image-restaurant.jpg";
import confetti from "../img/image-confetti.jpg";

const Blog = () => 
{
    return (
        <section className="blog">
            <div className="container">
                <h1 className="sub_title">Latest Article</h1>
                <div className="grid_blog">
                    <div className="blogs1">
                        <img src={currency} alt="currency" />
                        <div className="blog_info">
                            <h5>by claire robinson</h5>
                            <h3>receive money in any currency with no fees</h3>
                            <p>The world is getting smaller and we’re becoming more mobile. So why should 
                            you be forced to only receive money in a single …</p>
                        </div>
                    </div>
                    <div className="blogs1">
                        <img src={restaurant} alt="restaurant" />
                        <div className="blog_info">
                            <h5>by wilson hutton</h5>
                            <h3>treat yourself without worrying about money</h3>
                            <p>Our simple budgeting feature allows you to separate out your spending and 
                            set realistic limits each month. That means you …</p>
                        </div>
                    </div>
                    <div className="blogs1">
                        <img src={plane} alt="currency" />
                        <div className="blog_info">
                            <h5>by wilson hutton</h5>
                            <h3>take your easybank card wherever you go</h3>
                            <p>We want you to enjoy your travels. This is why we don’t charge any fees on 
                            purchases while you’re abroad. We’ll even show you …</p>
                        </div>
                    </div>
                    <div className="blogs1">
                        <img src={confetti} alt="currency" />
                        <div className="blog_info">
                            <h5>by claire robinson</h5>
                            <h3>our invite-only beta accounts are now live!</h3>
                            <p>After a lot of hard work by the whole team, we’re excited to launch our 
                            closed beta. It’s easy to request an invite through the site ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
