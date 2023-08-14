import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice.js';

const Card = (props) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

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
    <div className="qty">
      <button onClick={() => setCount(count - 1)} className="qty__btn">-</button>
      <div>
        <input
          type="number"
          step={props.step}
          min="1"
          max="500"
          placeholder={props.placeholder}
          value={count}
          onChange={({ target }) => setCount(Number(target.value))}
        />
        <span>{props.unit}</span>
      </div>
      <button onClick={() => setCount(count + 1)} className="qty__btn">+</button>
    </div>
    <button onClick={() => dispatch(addItem({ ...props, count }))} type="button" className="toCard">
    В корзину
    </button>
  </div>
)};

export default Card;
