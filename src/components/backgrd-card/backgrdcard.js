import "../../assests/css/backgrdcard.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Backgrdcard() {
  const [ref, inView] = useInView({
    rootMargin: "0px",
  });

  return (
    <div ref={ref} className="cardbackgrd">
      <div className="text-center">
        <div className="row justify-content-center ms-1 me-1">
          <div className="col-10 col-sm-3 col-md-3 col-lg-3 pt-3 pb-3 text-center">
            <div className="card_box card p-0 crd1 m-0">
              <motion.div
                className="original-text"
                initial={{ y: 0, opacity: 1 }}
                animate={inView ? { y: 90, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">2.3KWH</h4>
                <p className="p1 text-center">Capacity</p>
              </motion.div>
              <motion.div
                className="new-text"
                initial={{ y: -90, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">1.5Hr</h4>
                <p className="p1 text-center">Fast Charging</p>
              </motion.div>
            </div>
          </div>
       
       
          <div className="col-10 col-sm-3 col-md-3 col-lg-3 pt-3 pb-3 text-center">
            <div className="card_box card p-0 crd1 m-0">
              <motion.div
                className="original-text"
                initial={{ y: 0, opacity: 1 }}
                animate={inView ? { y: 90, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">Cell Cooling</h4>
                <p className="p1 text-center">Unique Thermal Management</p>
              </motion.div>
              <motion.div
                className="new-text"
                initial={{ y: -90, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">1300</h4>
                <p className="p1 text-center">Life Cycle</p>
              </motion.div>
            </div>
          </div>
       
          <div className="col-10 col-sm-3 col-md-3 col-lg-3 pt-3 pb-3 text-center">
            <div className="card_box card p-0 crd1 m-0">
              <motion.div
                className="original-text"
                initial={{ y: 0, opacity: 1 }}
                animate={inView ? { y: 90, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">4C</h4>
                <p className="p1 text-center">*Cont. Power</p>
              </motion.div>
              <motion.div
                className="new-text"
                initial={{ y: -90, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">0C - 40C</h4>
                <p className="p1 text-center">Consistent</p>
              </motion.div>
            </div>
          </div>

          <div className="col-10 col-sm-3 col-md-3 col-lg-3 pt-3 pb-3 text-center">
            <div className="card_box card p-0 crd1 m-0">
              <motion.div
                className="original-text"
                initial={{ y: 0, opacity: 1 }}
                animate={inView ? { y: 90, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">Over Moulding</h4>
                <p className="p1 text-center">Ruggedness</p>
              </motion.div>
              <motion.div
                className="new-text"
                initial={{ y: -90, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">Shoulder,Handle</h4>
                <p className="p1 text-center">Adjustable/Replaceable Strap</p>
              </motion.div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Backgrdcard;
