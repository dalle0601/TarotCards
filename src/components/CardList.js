import React from "react";

function clickCard(name) {
    console.log(name)
}
function CardList(props) {
    const name = props.name;
    const content = props.content;

    return (
        <div style={{width:"120px", height:"200px", backgroundColor:"red"}} onClick={() => clickCard({name})}>
            <div>{name}</div>        
            <div>{content}</div>
        </div>
    );
}

export default CardList; 