import {connect} from "react-redux";
import DashBoardComponent from '../components/DashBoardComponent';

const mapstateToProps = (state)=>{
return {
    usersCardDetails: state.usersDetaild
}

}

const mapDispatchToProps = (dispatch)=>{
    return{
        openUserStatusHandler: (e)=>{
            dispatch({type:"OPEN_USER_STATUS",id:e.target.parentNode.id});
        }
    }
}
const DashBoardComponentContainer = connect(mapstateToProps,mapDispatchToProps)(DashBoardComponent);
export default DashBoardComponentContainer;