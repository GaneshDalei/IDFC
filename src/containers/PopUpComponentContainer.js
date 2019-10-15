import {connect} from 'react-redux';
import PopUpComponent from '../components/PopUpComponent';

const stateMaptoProps =(state)=>{
    return state;
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onChangeCardStatushandler:(e)=>{
       
            dispatch({type:"CHANGE_CARD_STATUS", id:0})
        },
        closePopUpHandler:(e)=>{
            dispatch({type:"CLOSE_STATUS_POPUP", id:e.target.parentNode.parentNode.parentNode.parentNode.id})
        },
        onCardChangeHandler:(e)=>{
            dispatch({type:"CHANGE_USER_CARD", id:e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id, target:e.target.id})
        }

    }
}
const PopUpComponentContainer = connect(stateMaptoProps,mapDispatchToProps)(PopUpComponent);
export default PopUpComponentContainer;