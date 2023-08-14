import Counter from './Counter';
import ToCardBtn from './ToCardBtn';

const Card = (props) => {
  return (
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
      <Counter />
      <ToCardBtn />
    </div>
  );
};

export default Card;
