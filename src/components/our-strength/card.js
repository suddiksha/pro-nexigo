import Subcard from "../../sub components/subcard";
import Card1 from "../../assests/img/card-img1.png";
import Card2 from "../../assests/img/card-img2.png";
import Card3 from "../../assests/img/card-img3.png";

function Card() {
  return (
    <>
      <h2 className="head text-center ">OUR STRENGTHS</h2>
      <div className="backgrd  mt-3">
        <div className="row justify-content-evenly m-0 pt-5 text-center">
          <div className="col-10 col-xxl-3 col-xl-3   col-lg-3 col-md-3 col-sm-10 ">
            <Subcard
              className="card1 pt-3"
              img={Card1}
              title="Markets"
              para="Primary Focus on Electric Vehicles and Energy Storage Market"
            ></Subcard>
          </div>

          <div className="col-10 col-xxl-3 col-xl-3   col-lg-3 col-md-3 col-sm-10  margin">
            <Subcard
              className="card2 pt-3"
              img={Card2}
              title="Technology"
              para="NexiGO proprietary technologies increses productivity and efficiency in the entire value chain of Owing an Electric vechicle"
            ></Subcard>
          </div>

          <div className="col-10 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-10  margin">
            <Subcard
              className="card3 pt-3"
              img={Card3}
              title="Capabilities"
              para="Customized Energy Solutions, Persuasive Research in Thermal Management, cell testing, packaging techniques, and user experience in our state of the art LAB"
            ></Subcard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

{
  /* <h2 className="head text-center pt-5">OUR STRENGTHS</h2>
       <div className="row">
      <div className="line">

        <div className="backgrd mt-5">
          <div className="row justify-content-evenly m-0 pt-5 text-center">
            <div className="col-3 ">
              <Subcard
                className="card1 pt-3"
                img={Card1}
                title="Markets"
                para="Primary Focus on Electric Vehicles and Energy Storage Market"
              ></Subcard>
            </div>

            <div className="col-3">
              <Subcard
                className="card2 pt-3"
                img={Card2}
                title="Technology"
                para="NexiGO proprietary technologies increses productivity and efficiency in the entire value chain of Owing an Electric vechicle"
              ></Subcard>
            </div>

            <div className="col-3">
              <Subcard
                className="card3 pt-3"
                img={Card3}
                title="Capabilities"
                para="Customized Energy Solutions, Persuasive Research in Thermal Management, cell testing, packaging techniques, and user experience in our state of the art LAB"
              ></Subcard>
            </div>
          </div>
        </div>
        </div>
      </div> */
}
