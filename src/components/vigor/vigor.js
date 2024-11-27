import "../../assests/css/vigor.css";
import Bty3 from "../../assests/img/bty3.png";
import CircleIcon from '@mui/icons-material/Circle';
import Bty1 from "../../assests/img/bty1.png"
import { useMediaQuery } from "react-responsive";

function Vigor() {
  const isVigor = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      <div className="containe viw  ">
        {isVigor ?
        <div className="vigorse ">
          <h1 className="btyhead ">VIGOR</h1>
            <h5 className="head2 pt-2">
              YOU NEED<span className="vigo"> VIGOR</span> FOR ON-THE-GO-ENERGY
            </h5>
      
        <div className="row justify-content-center">
        <div className="col-12 col-lg-6  col-sm-12 col-xs-12 mt-3 mb-3  ">
       
          <img src={Bty1} className="bty1 img-fluid  "></img>
        </div>
        <div className="col-12 col-lg-6 col-sm-12 col-xs-12 ">
        
          <p className="vigopara mt-4">
            The VIGOR is a breakthrough in ENERGY needs for a Light-Electric
            Vechicle. This HIGHLY EFFICIENT battery pack is best in class in
            weight, performance, reliavility and safety.This rechargeable
            battery pack is capable of FAST CHARGING(1 hour) with out
            sacrificing the life. Our Innovative and proprietary packing
            methods sets new standards in POWER and ENERGY delivery.{" "}
          </p>
          <p className="vigorpoint"><CircleIcon className="circle me-2"/>Delivers 1.5x more power within the same class of weight and capacity</p>
          <p className="vigorpoint"><CircleIcon className="circle me-2"/>Industrial grade soft over molding provides impact protection</p>
          <p className="vigorpoint"><CircleIcon className="circle me-2"/>User Configurable Handle Design for multiple carrying and lifting positions</p>
          <p className="vigorpoint"><CircleIcon className="circle me-2"/>IOT Enabled</p>
          <p className="vigorpoint mb-5"><CircleIcon className="circle me-2"/>Perfect for everyday short distance commuters</p>



        </div>
      </div>
      </div>
      
      :
      
      
      
     
        <div className="row justify-content-center pt-5 mt-5
         mb-5">
          <div className="col-6 p-0 ">
            <img src={Bty3} className="bty3 img-fluid"></img>
          </div>
          <div className="col-6 p-0 ">
            <h1 className="btyhead mt-0 ">VIGOR</h1>
            <h5 className="head2">
              YOU NEED<span className="vigo"> VIGOR</span> FOR ON-THE-GO-ENERGY
            </h5>
            <p className="vigopara mt-3 p-0 ">
              The VIGOR is a breakthrough in ENERGY needs for a Light-Electric
              Vechicle. This HIGHLY EFFICIENT battery pack is best in class in
              weight, performance, reliavility and safety.This rechargeable
              battery pack is capable of FAST CHARGING(1 hour) with out
              sacrificing the life. Our Innovative and proprietary packing
              methods sets new standards in POWER and ENERGY delivery.
            </p>
            <p className="vigorpoint "><CircleIcon className="circle me-2"/>Delivers 1.5x more power within the same class of weight and capacity</p>
            <p className="vigorpoint "><CircleIcon className="circle me-2"/>Industrial grade soft over molding provides impact protection</p>
            <p className="vigorpoint"><CircleIcon className="circle me-2"/>User Configurable Handle Design for multiple carrying and lifting positions</p>
            <p className="vigorpoint "><CircleIcon className="circle me-2"/>IOT Enabled</p>
            <p className="vigorpoint "><CircleIcon className="circle me-2"/>Perfect for everyday short distance commuters</p>



          </div>
        </div>
}
      </div>
    </>
  );
}

export default Vigor;
