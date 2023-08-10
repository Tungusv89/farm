import ToCardBtn from './ToCardBtn';

const Card = (props) => (
  <div className="card">
    <picture className="card-img">
      <source type="image/webp" srcSet={props.imageWebp} alt={props.good} />
      <source type="image/jpg" srcSet={props.image} alt={props.good} />
      <img srcSet={props.image} alt={props.alt} />
    </picture>
    <div className="card-text">
      <p className="card-text__name">
        {props.good}
        <br />
        <span className="Qty">{props.Qty}</span>
      </p>
      <p className="card-text__price">{props.price}</p>
    </div>
    <ToCardBtn />
  </div>
);

export default Card;
