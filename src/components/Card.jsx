import ToCardBtn from './ToCardBtn';

const Card = (props) => (
  <div className="card">
    <picture className="card-img">
      <source type="image/webp" srcSet={props.imageWebp} alt={props.good} />
      <source type="image/jpg" srcSet={props.image} alt={props.good} />
      <img srcSet={props.image} alt={props.alt} />
    </picture>
    <div className="card-text">
      <span className="card-text__name">
        {props.good}
        <br />
        <span className="pack">{props.pack}</span>
      </span>
      <span className="card-text__price">{props.price}</span>
    </div>
    <div className="qty">
      <button className="qty__btn">-</button>
      <div>
        <input
          type="number"
          step={props.step}
          min="1"
          max="500"
          placeholder={props.placeholder}
        />
        <span>{props.unit}</span>
      </div>
      <button className="qty__btn">+</button>
    </div>
    <ToCardBtn />
  </div>
);

export default Card;
