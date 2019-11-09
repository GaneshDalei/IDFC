import React from 'react';
import PopUpComponentContainer from '../containers/PopUpComponentContainer';

class DashBoardComponent extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(){
        console.log("willReceiveProps")
    }
    shouldComponentUpdate(){
        return true;
        console.log("should Component Updated");
    }

    render() {
        return (
            <div>
                {
                this.props.usersCardDetails.map((key, index)=>{
                    return(
                        <div className="create-box-main">
                        <div className="create-box-inner">
                            <div className={`box-item img ${key.cardStatus}`}></div>
                            <div className="box-item card">{key.card_type}:
                                <div>{key.card_number}</div>
                            </div>
                            <div className="box-item rupees">{key.amount}
                                <div>
                                {key.account_Number}
                                </div>
                            </div>
                            <div className="pup_up" id={key.id}>
                                <div className="pup_up-inner" onClick={this.props.openUserStatusHandler}>...</div>
                                <div className={`pup_up-box ${(key.isOpen)? 'show':'hide'}`}><PopUpComponentContainer/></div>
                            </div>
                        </div>
                    </div>
                    )
                })
                }
       
          </div>    
            
        
        )
    }
    componentDidMount(){
        console.log("render++++++++++++++++++++++++");
    }
}
export default DashBoardComponent;