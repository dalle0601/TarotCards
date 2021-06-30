import React, { useCallback, useState } from "react";
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../actions';

function clickCard(props) {
    // props.props.SET_CHOICE(props.props.choice)
}

function CardList(props) {
    const dispatch = useDispatch();

    const [localChoice, setLocalChoice] = useState(true);
    
    const choice = useSelector((state) => state.tarotFetch.choice);

    console.log(choice);

    const setchoice = useCallback(() => {
        setLocalChoice(!localChoice);
        dispatch(actions.SET_CHOICE());
    }, [localChoice, dispatch]);

    const name = props.name;
    const content = props.content;
    return (
        <div style={{width:"120px", height:"200px", backgroundColor:"red"}} onClick={setchoice}>
            <div>{name}</div>        
            <div>{content}</div>
        </div>
    );
}

// const mapDispatchToProps = (dispatch) => ({
//     SET_CHOICE: () => dispatch(actions.SET_CHOICE()),
// });

// const mapStateToProps = (state) => ({
    
//     chocie : state.tarotFetch.chocie
// });

export default CardList; 