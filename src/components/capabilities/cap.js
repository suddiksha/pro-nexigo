import "../../assests/css/cap.css";
import Cap1 from "../../assests/img/cap.png";
import Custom1 from "../../assests/img/custom1.png";
import Custom2 from "../../assests/img/custom2.png";
import Custom3 from "../../assests/img/custom3.png";
import Custom4 from "../../assests/img/custom4.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Contact from "../contact-us/contact";
import St from "../../assests/img/state-of.png"
function Cap() {
  const [ref, inView] = useInView({
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <>
      <div className="capability">
        <div className="row cap-row">
          <div className="col-5">
            <img src={Cap1} className="cap1" alt="Cap1"></img>
          </div>
          <div className="col-7">
            <div className="card cap-card">
              <p className="innovation mt-3">Innovation</p>
              <ul className="cap-points p-0 ms-3">
                <li>Patent Pending Thermal Management Techniques</li>
                <li className="mt-1">
                  Efficiency improvement in power and energy delivery
                </li>
                <li className="mt-1">
                  Research and Development to enable Ultra Fast charging, long
                  life and Safety
                </li>
                <li className="mt-1">
                  Innovation in IoT and data collection for continuous product
                  improvement
                </li>
                <li className="mt-1">
                  Unique packaging methods to Increase safety and reliability
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className="custom text-center" ref={ref}>
          Custom Design
        </h1>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1}}
          className="row mt-5 justify-content-around"
        >
          <div className="col-3">
            <div className="card custom-card">
              <img src={Custom1} className="custom1 mt-5" alt="Custom1"></img>
              <p className="custom-para text-center mt-3">
                Our innovations are scalable and modular to fit into any shape,
                size, and energy needs
              </p>
            </div>
          </div>

          <div className="col-3">
            <div className="card custom-card">
              <img src={Custom2} className="custom1 mt-5" alt="Custom2"></img>
              <p className="custom-para1 text-center mt-3">
                Modular and easily customizable Battery management System
                Architecture
              </p>
            </div>
          </div>

          <div className="col-3">
            <div className="card custom-card">
              <img src={Custom3} className="custom1 mt-5" alt="Custom3"></img>
              <p className="custom-para2 text-center mt-3">
                Proven Thermal management solutions for various cell formats
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="state-of mb-5">
   
        <div className="row ">
         
          <div className="col-5 ms-5 mt-5 p-0">
            <p className="rd-lab">State of the Art R&D LAB</p>
            <ul className="cap-points p-0 ms-3">
              <li>
                Growing database of cell technologies, suppliers and respective
                cell characterization data
              </li>
              <li className="mt-1">
                Innovation in Charging Algorithms based on cell characterization
              </li>
              <li className="mt-1">
                Extensive life testing of cells and battery packs
              </li>
              <li className="mt-1">
                End user charging and load profile characterization on battery
                packs at various operating conditions
              </li>
            </ul>
          </div>
          <div className="col-5 ms-4">
            <img src={Custom4} className="st-img p-0 " alt="Custom4"></img>
          </div>
         
        </div>
 
      </div>
   
    </>
  );
}

export default Cap;
