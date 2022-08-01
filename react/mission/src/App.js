import React, { useEffect, useState } from "react";
import datas from "./data/cards";
import BusinessCard from "./components/BusinessCard";

export default function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  // 랜덤으로 뽑기 함수
  function draw() {
    if (pickedCards.length > 2) {
      const name = pickedCards.reduce((acc, cur) => {
        return (acc = acc.concat(`${cur.name}, `));
      }, "");
      return alert(`당첨자는 ${name} 입니다.`);
    }

    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));

    setPickedCards([...pickedCards, randomItem]);
  }

  useEffect(() => {
    setCards(datas);
  }, []);

  console.log(cards);
  console.log(pickedCards);

  return (
    <div>
      {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
      {pickedCards.length > 0 && pickedCards.map((pickedCards) => <BusinessCard info={pickedCards} />)}
      {/* {pickedCards.length > 0 && <BusinessCard info={pickedCards[pickedCards.length - 1]} />} */}
    </div>
  );
}
