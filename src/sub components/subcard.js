import "../assests/css/card.css";

function Subcard(props) {
  return (
    <>
     <div className="ourstrength">
        <div className="card  cardsec text-center">
          <img src={props.img} className="card_img center"></img>
          <h2 class="title pt-4">{props.title}</h2>
          <h4 className={props.className}>{props.para}</h4>
        </div>
      </div>
    </>
  );
}

export default Subcard;

