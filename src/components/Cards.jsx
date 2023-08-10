import Card from './Card';

const Cards = () => (
  <section id="catalog" className="cards">
    <h2>Наши товары</h2>
    <div className="cards-grid">
      <Card
        imageWebp="./img/meat.webp"
        image="./img/meat.jpg"
        good="Мясо"
        price="450Р/кг"
      />
      <Card
        imageWebp="./img/milk.webp"
        image="./img/milk.jpg"
        good="Молоко"
        price="50Р/кг"
      />
      <Card
        imageWebp="./img/potato.webp"
        image="./img/potato.jpg"
        good="Картошка"
        Qty="(мешок)"
        price="38Р/кг"
      />
      <Card
        imageWebp="./img/eggs.webp"
        image="./img/eggs.jpg"
        good="Яйца"
        price="50Р/кг"
      />
    </div>
  </section>
);

export default Cards;
