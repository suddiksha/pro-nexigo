import Navbar from "../navbar";
import Corevalues from "../../sub components/core";
import Energy from "../../assests/img/energy.png";
import "../../assests/css/about.css";
import Vis from "../../assests/img/vision.png";
import Mis from "../../assests/img/mission.png";
import Core1 from "../../assests/img/core1.png";
import Core2 from "../../assests/img/core2.png";
import Core3 from "../../assests/img/core3.png";
import Core4 from "../../assests/img/core4.png";
import Core5 from "../../assests/img/core5.png";
import Core from "../../assests/img/core-img.png";
import Contact from "../contact-us/contact";
import { useMediaQuery } from "react-responsive";

function About() {
  const isAbout = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <Navbar />

      <div className="product-page mt-5  ">
        {isAbout ? (
          <>
            <h1 className="about-us text-center">About Us</h1>
            <div className="card card-about mt-3">
              <div className="row justify-content-center">
                <div className="col-12">
                  <img src={Energy} className="ene-img " alt="energy"></img>
                  <div className="about-para pt-0 pb-0 text-center">
                    NexiGO Energy pioneers in Research and development of
                    Advanced Energy solutions to EV and Energy Storage markets.
                    We specialize in Designing, Developing and Delivering highly
                    efficient battery packs through Innovative packing methods
                    and bringing cutting edge cell technologies to market. Our
                    technology sets new standards in performance, reliability
                    and safety.
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <h1 className="vision text-center">Our Vision</h1>
              <div className="col-12 text-center">
                <img src={Vis} className="vis mt-5"></img>

                <p className="vis-para mt-5">
                  Our Vision is to increase Global adoption of sustainable
                  energy by Designing, Developing and Delivering cutting edge
                  technologies to Electric Vehicles and Energy storage markets.
                </p>
              </div>
            </div>

            <div className="row">
              <h1 className="mission text-center">Our Mission</h1>

              <div className="col-12 text-center">
                <img src={Mis} className="mis mt-5"></img>
                <p className="mis-para mt-5">
                  Our Missions is to be best in the market of providing energy
                  solutions. We seek to develop the most technologically
                  advanced battery packs keeping Quality, Reliability,
                  affordability, and Value in mind. We Use technology as a Guide
                  to bring trust, reduce anxiety, provide education to end user
                  and contribute to global goal of switching to sustainable
                  energy.
                </p>
              </div>
            </div>


            <h1 className="core text-center">Core Values</h1>
              <div className="row mt-4 justify-content-center">
                <div className="col-12">
                <p className="core-para text-center mt-3">
                    To provide clean and reliable energy storage solution that
                    enhance the way people live and work around the world.
                  </p>
                  <img src={Core} className="core-img  text-center mt-4 mb-5"></img>
                </div>
            
                  
                  <Corevalues
                    className="core1 "
                    img={Core1}
                    name="QUALITY"
                    para="Manufactured using the latest technology and stringent quality control, our battery products are designed to exceed in performance and reliability."
                    para1="Obtaining the best possible outcome in the least wasteful manner."
                  ></Corevalues>
                  <Corevalues
                    className="core2"
                    img={Core2}
                    name="RELIABILITY"
                    para="We uphold the values and principles of our organization in every action and decision."
                    para1="To do our job to the best of our ability."
                  ></Corevalues>

                  <Corevalues
                    className="core3"
                    img={Core3}
                    name="AFFORDABILITY"
                    para="An affordable product or services is one that is within most people’s budget
                then our product is affordable."
                    para1="We develop affordable product that can easy to carry.
                "
                  ></Corevalues>

                  <Corevalues
                    className="core4"
                    img={Core4}
                    name="INNOVATION"
                    para="We advance through creativity and efficient processes to implement new ideas."
                    para1="We encourage and development of new innovative products,technologies and ideas for development of new market."
                    para2="We continue to maintain our leadership position.
"
                  ></Corevalues>
                  <Corevalues
                    className="core5"
                    img={Core5}
                    name="CUSTOMER DELIGHT"
                    para="Customer satisfaction is at the center of what we do everyday.
                "
                    para1="We are a trusted partner of our customer."
                    para2="We build and maintain effective and proactive relationship with customers.
                "
                    para3="We consistently deliver ideal energy solutions for a wide range of application.
                "
                  ></Corevalues>
                </div>
          </>
        ) : (
          <>
            <h1 className="about-us text-center">About Us</h1>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card card-about mt-3">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={Energy}
                        className="ene-img text-center"
                        alt="energy"
                      ></img>
                    </div>
                    <div className="col-8 p-0">
                      <div className="about-para me-3">
                        NexiGO Energy pioneers in Research and development of
                        Advanced Energy solutions to EV and Energy Storage
                        markets. We specialize in Designing, Developing and
                        Delivering highly efficient battery packs through
                        Innovative packing methods and bringing cutting edge
                        cell technologies to market. Our technology sets new
                        standards in performance, reliability and safety.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mivi mt-5 pt-5">
              <div className="row mt-5">
                <div className="col">
                  <img src={Vis} className="vis"></img>
                </div>
                <div className="col ">
                  <h1 className="vision ">Our Vision</h1>
                  <p className="vis-para mt-3">
                    Our Vision is to increase Global adoption of sustainable
                    energy by Designing, Developing and Delivering cutting edge
                    technologies to Electric Vehicles and Energy storage
                    markets.
                  </p>
                </div>
              </div>

              <div className="row mt-5 pt-3">
                <div className="col">
                  <h1 className="mission ">Our Mission</h1>
                  <p className="mis-para mt-3">
                    Our Missions is to be best in the market of providing energy
                    solutions. We seek to develop the most technologically
                    advanced battery packs keeping Quality, Reliability,
                    affordability, and Value in mind. We Use technology as a
                    Guide to bring trust, reduce anxiety, provide education to
                    end user and contribute to global goal of switching to
                    sustainable energy.
                  </p>
                </div>
                <div className="col  text-end pt-2">
                  <img src={Mis} className="mis"></img>
                </div>
              </div>
            </div>

            <div className="core-values ">
              <h1 className="core text-center">Core Values</h1>
              <div className="row mt-5">
                <div className="col-6 ">
                  <img src={Core} className="core-img"></img>
                </div>
                <div className="col-6">
                  <p className="core-para  mt-3">
                    To provide clean and reliable energy storage solution that
                    enhance the way people live and work around the world.
                  </p>
                  <Corevalues
                    className="core1"
                    img={Core1}
                    name="QUALITY"
                    para="Manufactured using the latest technology and stringent quality control, our battery products are designed to exceed in performance and reliability."
                    para1="Obtaining the best possible outcome in the least wasteful manner."
                  ></Corevalues>
                  <Corevalues
                    className="core2"
                    img={Core2}
                    name="RELIABILITY"
                    para="We uphold the values and principles of our organization in every action and decision."
                    para1="To do our job to the best of our ability."
                  ></Corevalues>

                  <Corevalues
                    className="core3"
                    img={Core3}
                    name="AFFORDABILITY"
                    para="An affordable product or services is one that is within most people’s budget
                then our product is affordable."
                    para1="We develop affordable product that can easy to carry.
                "
                  ></Corevalues>

                  <Corevalues
                    className="core4"
                    img={Core4}
                    name="INNOVATION"
                    para="We advance through creativity and efficient processes to implement new ideas."
                    para1="We encourage and development of new innovative products,technologies and ideas for development of new market."
                    para2="We continue to maintain our leadership position.
"
                  ></Corevalues>
                  <Corevalues
                    className="core5"
                    img={Core5}
                    name="CUSTOMER DELIGHT"
                    para="Customer satisfaction is at the center of what we do everyday.
                "
                    para1="We are a trusted partner of our customer."
                    para2="We build and maintain effective and proactive relationship with customers.
                "
                    para3="We consistently deliver ideal energy solutions for a wide range of application.
                "
                  ></Corevalues>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Contact className="mt-5" />
    </>
  );
}

export default About;
