import "../assests/css/core.css";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import React, { useState } from 'react';

function Corevalues(props) {
  const isCore = useMediaQuery({ query: "(max-width: 768px)" });
 
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleNameClick = () => {
      setIsExpanded(!isExpanded);
    };
  
  return (
    <>
      <div className="core-value mt-4 ">
        {isCore ? (
          <>
            <div className="row justify-content-center mt-1 sp p-0">
              <div className="col-2">
                <img
                  src={props.img}
                  className="coreimg text-center"
                  alt="core value"
                ></img>
              </div>
              <div className="col-10">
        <p className="name mb-0 mt-1" onClick={handleNameClick}>
          {props.name}
        </p>
        <p className="cp1 mt-2 mb-0">{props.para}</p>
        <motion.div
          className={`cp1 additional-content mt-2 ${isExpanded ? 'expanded' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: isExpanded ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded && (
            <>
              <p className="cp1 mt-2 mb-0">{props.para1}</p>
              <p className="cp1 mt-2 mb-0">{props.para2}</p>
              <p className="cp1 mt-2 mb-0">{props.para3}</p>
              <p className="cp1 mt-2 mb-0">{props.para4}</p>
            </>
          )}
        </motion.div>
      </div>
    </div>
          </>
        ) : (
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3  ">
              <img
                src={props.img}
                className="coreimg me-3"
                alt="core value"
              ></img>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-9 pe-0">
              <p className="name mb-0 mt-1">{props.name}</p>
              <p className="cp1 mt-2 mb-0 ">{props.para}</p>
              <motion.div
                whileInView={{ opacity: 0 }}
                whileHover={{ height: "auto", opacity: 1 }}
                whileTap={{ height: "auto", opacity: 1 }}
                initial={{ height: 0, opacity: 0 }}
                className="cp1 additional-content mt-2 "
              >
                <p>{props.para1}</p>
                <p>{props.para2}</p>
                <p>{props.para3}</p>
                <p>{props.para4}</p>
              </motion.div>
            </div>
          </div>
        )}
      </div>
      
    </>
  );
}

export default Corevalues;
