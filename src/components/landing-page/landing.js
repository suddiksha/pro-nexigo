import "../../assests/css/land.css";
import Button from "@mui/material/Button";
import Rec from "../../assests/img/rectangle.png";
import Bty1 from "../../assests/img/bty.png";

import Appln from "../../assests/img/appln1.png";
import Appln1 from "../../assests/img/appln2.png";
import { useMediaQuery } from "react-responsive";

function Landing() {
  const isLanding = useMediaQuery({ query: "(max-width: 768px)" });
  const isApplication = useMediaQuery({ query: "(max-width: 400px)" });
  return (
    <>
      <div className="land-page mt-5">
        {isLanding ? (
          <div className="container land text-center mt-5 pt-5 ">
            <h2 className="vigor-phone">VIGOR BATTERY</h2>
            <p className="best-phone mt-3">BEST IN CLASS PERFORMANCE</p>
            <img src={Bty1} className="bty-phone"></img>
            <p className="lithium-phone mt-3">Lithium-Ion Battery</p>
            <p className="para-phone">
              The VIGOR is a breakthrough in ENERGY needs for a Light-Electric
              Vechicle.
            </p>
            <Button variant="contained" className="learn mt-3">
              LEARN MORE
            </Button>
            {isApplication ? (
             <div className="application m-0 p-0">
              <h2 className="appln-phone mt-5">Applications</h2>
              <div className="row mt-4 ms-3">
                <div className="col  text-start p-0">
                  <p className="text-phone">
                  
                    <img src={Appln} className="apln me-2"></img> For Electric
                    Bike{" "}
                  </p>
                </div>  </div>
                <div className="row me-3">
                <div className="col text-end p-0">
                  <p className="text-phone">
                    <img src={Appln1} className="apln me-2 ms-3"></img> For Electric
                    Scooter
                  </p>
              
              </div>
              </div>
            </div>)
            :
            (

              <div className="application m-0 p-0">
              <h2 className="appln-phone mt-5">Applications</h2>
              <div className="row mt-4">
                <div className="col p-0">
                  <p className="text-phone">
                    {" "}
                    <img src={Appln} className="apln me-2"></img> For Electric
                    Bike{" "}
                  </p>
                </div>
                <div className="col p-0">
                  <p className="text-phone">
                    <img src={Appln1} className="apln me-2"></img> For Electric
                    Scooter
                  </p>
                </div>
              </div>
            </div>
           
            )}
          </div>
        ) : (
          <div className="landing">
            <div className="row  p-0 m-0">
              <div className="col-6">
                <div className="ms-5 ps-2">
                  <h1 className="best">BEST IN CLASS PERFORMANCE</h1>
                  <p className="lithium mt-2">Lithium-Ion Battery</p>
                  <p className="lithium-sub ">
                    The VIGOR is a breakthrough in ENERGY needs for a
                    Light-Electric Vechicle.
                  </p>
                  <Button variant="contained" className="learn_more  ">
                    LEARN MORE
                  </Button>
                </div>
              </div>
              <div className="col-6 p-0">
                <img src={Bty1} className="bty4 mt-5"></img>
              </div>
            </div>

            <div class="row m-0 rectangle">
              <div class="col-12 p-0">
                <img src={Rec} className="rect"></img>
              </div>
            </div>

            <div class="appln-img ">
              <h1 class="appln ">Applications</h1>
              <div className="land-appln">
                <div className="row text-end mt-4">
                  <div className="col p-0">
                    <p class="appln-text me-4">
                      <img src={Appln} className="app1 me-2"></img> For Electric
                      Bike
                    </p>
                  </div>
                </div>
                <div className="row text-end">
                  <div className="col p-0">
                    {" "}
                    <p className="appln-text">
                      <img src={Appln1} className="app1 me-1"></img> For
                      Electric Scooter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Landing;
