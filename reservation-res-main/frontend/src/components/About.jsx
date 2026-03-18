import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              At New Wave, we bring a fresh twist to dining with a blend of modern flavors and timeless classics. Our passion lies in crafting dishes that not only satisfy your taste buds but also create a memorable experience. From carefully sourced ingredients to expertly prepared meals, every detail is designed with you in mind.

We believe great food should be paired with a welcoming atmosphere, where friends and family can gather, relax, and enjoy every moment. Our team is dedicated to delivering exceptional service, ensuring each visit feels special.

Whether you’re here for a quick bite or a leisurely meal, New Wave promises a vibrant culinary journey that keeps you coming back for more.
            </p>
            <Link to={"/menu"} className="exploreBtn">
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
