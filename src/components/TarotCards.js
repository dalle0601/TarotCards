import React from "react";
import CardList from "./CardList";
const cardInfo = [
    {
        id: 1,
        name: "card1",
        content: "이 카드는 중세시대부터 내려온 카드로 30분내에 10명에게 전달하지 않으면 탈모빔을 맞게된다."
    },
    {
        id: 2,
        name: "card2",
        content: "이 카드는 중세시대부터 내려온 카드로 30분내에 10명에게 전달하지 않으면 탈모빔을 맞게된다."
    },
    {
        id: 3,
        name: "card3",
        content: "이 카드는 중세시대부터 내려온 카드로 30분내에 10명에게 전달하지 않으면 탈모빔을 맞게된다."
    },
    {
        id: 4,
        name: "card4",
        content: "이 카드는 중세시대부터 내려온 카드로 30분내에 10명에게 전달하지 않으면 탈모빔을 맞게된다."
    }
]

function renderCards(cardinfos){
    return <CardList
                key={cardinfos.id}
                name={cardinfos.name}
                content={cardinfos.content}
            />
}

function TarotCards(props) {
    return (
        <div>
            {cardInfo.map(renderCards)}
        </div>
    );
}

export default TarotCards; 