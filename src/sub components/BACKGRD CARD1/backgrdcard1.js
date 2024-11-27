import "../../assests/css/backgrdcard1.css";



import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Backgrdcard1() {
  const [ref, inView] = useInView({
    rootMargin: "0px", 
  });

  return (
    <div className="cardbackgrd1" ref={ref}>
      <div className="text-center">
        <div className="row justify-content-evenly ms-1 me-1">
          <div className="col-10 col-sm-3 col-md-3 col-lg-3 pt-3 pb-3 text-center">
            <div className="card_box card p-0 crd">
              <motion.div
                className="text1"
                initial={{ y: 0, opacity: 1 }}
                animate={inView ? { y: 90, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">1.8KWH</h4>
                <p className="p1 text-center">Capacity</p>
              </motion.div>
              <motion.div
                className="text2"
                initial={{ y: -90, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">20 Min</h4>
                <p className="p1 text-center">Fast Charging</p>
              </motion.div>
            </div>
          </div>
       
          <div className="col-10 col-sm-3 col-md-3 col-lg-3 pt-3 pb-3 text-center">
            <div className="card_box card p-0 crd">
              <motion.div
                className="text1"
                initial={{ y: 0, opacity: 1 }}
                animate={inView ? { y: 90, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">Cell Cooling</h4>
                <p className="p1 text-center">Thermal Management</p>
              </motion.div>
              <motion.div
                className="text2"
                initial={{ y: -90, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">3000</h4>
                <p className="p1 text-center">Life Cycle</p>
              </motion.div>
            </div>
          </div>
       
          <div className="col-10 col-sm-3 col-md-3 col-lg-3 pt-3 pb-3 text-center">
            <div className="card_box card p-0 crd">
              <motion.div
                className="text1"
                initial={{ y: 0, opacity: 1 }}
                animate={inView ? { y: 90, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">4C</h4>
                <p className="p1 text-center">Peak Power</p>
              </motion.div>
              <motion.div
                className="text2"
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
            <div className="card_box card p-0 crd">
              <motion.div
                className="text1"
                initial={{ y: 0, opacity: 1 }}
                animate={inView ? { y: 90, opacity: 1 } : {}}
                transition={{ duration: 1, delay:1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">5 Years</h4>
                <p className="p1 text-center">Warranty</p>
              </motion.div>
              <motion.div
                className="text2"
                initial={{ y: -90, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <h4 className="text-center m-0 pt-1 c1">Last Mile Delivery</h4>
                <p className="p1 text-center">Application</p>
              </motion.div>
            </div>
          </div>
       
       
        </div>
      </div>
    </div>
  );
}

export default Backgrdcard1;