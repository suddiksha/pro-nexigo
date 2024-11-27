import "../../assests/css/vivid.css";
import Bty2 from "../../assests/img/rr.png";
import Bty4 from "../../assests/img/bty4.png";
import { useMediaQuery } from "react-responsive";

import CircleIcon from "@mui/icons-material/Circle";
function Vivid() {
  const isVivid = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <div className="containe mt-5  viw">
        {isVivid ? (
          <div className="vividsec">
            <h1 className="btyhead1 text-center">VIVID</h1>
            <h5 className="head1 text-center pt-2">
              <span className="ultra">ULTRA FAST</span> CHARGING & LIFE
            </h5>
            <div className="row justify-content-center mt-5">
              <div className="col-12 col-lg-6  col-sm-12 col-xs-12 text-end bty">
                <img src={Bty4} className="img-fluid bty2 "></img>
              </div>
              <div className="col-12 col-lg-6  col-sm-12 col-xs-12  mt-5  ">
                <p className="vividpara  ">
                  The VIVID is best in the WORLD battery pack for light electric
                  vehicles. VIVID brings the best in both world of ENERGY and
                  POWER. Our Innovative and proprietary Thermal Management
                  techniques takes the heat away from cells for performance,
                  reliability and safety.
                </p>
                <p className="vividpoint ">
                  <CircleIcon className="circle1 me-2" />
                  MODULAR & SCALABLE Technology
                  <p className=" mb-0">
                    <CircleIcon className="circle1 t1 me-2" />
                    Energy : 1.8kwh - 4.1kwh
                  </p>
                  <p className="mb-0">
                    <CircleIcon className="circle1 t1 me-2" /> 
                    Voltage:50.4V - 57.6V
                  </p>
                </p>
                <p className="vividpoint    ">
                  <CircleIcon className="circle1 me-2" />
                  Recharge 3.0x FASTER
                </p>
                <p className="vividpoint">
                  <CircleIcon className="circle1 me-2" />
                  3.0x more Durable and impact resistance
                </p>
                <p className="vividpoint">
                  <CircleIcon className="circle1 me-2" />
                  IOT Enabled
                </p>
                <p className="vividpoint ">
                  <CircleIcon className="circle1 me-2" />
                  Warranty* : 5yrs / 1,25,000 kms
                </p>

                <p className="vividpoint ">
                  <CircleIcon className="circle1 me-2" />
                  Perfect for Heavy Use , long daily commutes, and abusive
                  environments
                </p>

                <p className="vividpoint mb-5">
                  <CircleIcon className="circle1 me-2" />
                  Relatively ZERO down time for Last Mile logistics and ride
                  sharing companies
                </p>
              </div>
            </div>
          </div>
         ) : (
          <div className="row justify-content-center  pt-5 mb-5">
            <div className="col-6 mt-5  ">
              <h1 className="btyhead1">VIVID</h1>
              <h5 className="head1 ">
                <span className="ultra">ULTRA FAST</span> CHARGING & LIFE
              </h5>
              <p className="vividpara mt-3 ">
                The VIVID is best in the WORLD battery pack for light electric
                vehicles. VIVID brings the best in both world of ENERGY and
                POWER. Our Innovative and proprietary Thermal Management
                techniques takes the heat away from cells for performance,
                reliability and safety.
              </p>
              <p className="vividpoint ">
                <CircleIcon className="circle1 me-2" />
                MODULAR & SCALABLE Technology
                <p className=" mb-0">
                  <CircleIcon className="circle1 t1 me-2" />
                  Energy : 1.8kwh - 4.1kwh
                </p>
                <p className="mb-0">
                  <CircleIcon className="circle1 t1 me-2" />
                  Voltage:50.4V - 57.6V
                </p>
              </p>
              <p className="vividpoint    ">
                <CircleIcon className="circle1 me-2" />
                Recharge 3.0x FASTER
              </p>
              <p className="vividpoint">
                <CircleIcon className="circle1 me-2" />
                3.0x more Durable and impact resistance
              </p>
              <p className="vividpoint">
                <CircleIcon className="circle1 me-2" />
                IOT Enabled
              </p>
              <p className="vividpoint ">
                <CircleIcon className="circle1 me-2" />
                Warranty* : 5yrs / 1,25,000 kms
              </p>

              <p className="vividpoint ">
                <CircleIcon className="circle1 me-2" />
                Perfect for Heavy Use , long daily commutes, and abusive
                environments
              </p>

              <p className="vividpoint">
                <CircleIcon className="circle1 me-2" />
                Relatively ZERO down time for Last Mile logistics and ride
                sharing companies
              </p>
            </div>

            <div className="col-6 text-end bty">
              <img src={Bty2} className="img-fluid bty2 "></img>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Vivid;
