import Card from './Card';

const Cards = () => (
  <section id="catalog" className="cards">
    <h2>Наши товары</h2>
    <div className="cards-grid">
      <Card
        id="1"
        imageWebp="./img/meat.webp"
        image="./img/meat.jpg"
        good="Мясо"
        price="450Р/кг"
        unit="кг"
      />
      <Card
        id="2"
        imageWebp="./img/milk.webp"
        image="./img/milk.jpg"
        good="Молоко"
        price="50Р/л"
        unit="л"
      />
      <Card
        id="3"
        imageWebp="./img/eggs.webp"
        image="./img/eggs.jpg"
        good="Яйца"
        price="50Р/10шт"
        unit="шт"
      />
      <Card
        id="4"
        imageWebp="./img/potato.webp"
        image="./img/potato.jpg"
        good="Картошка"
        pack="(мешок)"
        price="38Р/кг"
        unit="кг"
      />
    </div>
  </section>
);

export default Cards;
