import React from 'react';

class PopUpComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isUnblock:false,
            isPermanentblock:false,
            isReissuecard:false,
            isPopUpOpen:false,
        }
    }

    render(){
        return(
            <div className= {`pop_up-box-wapper ${(this.state.isPopUpOpen)? 'close':''}`}>
                
                <div className="pop_up-box-inner">
                    <div className={`close_button ${(this.state.isPopUpOpen)? 'close_popUp':''}`} onClick={this.props.closePopUpHandler}>...</div>
                    <div className="inner">
                   <div className="list_item" onClick={this.props.onCardChangeHandler} id="lock-card">Block</div>
                   <div className="list_item" onClick={this.props.onCardChangeHandler} id="block-card">Permanent block</div>
                   <div className="list_item" onClick={this.props.onCardChangeHandler} id="normal-card">Reissue card</div>
                </div>
                </div>
            </div>
        )
    }
}
export default PopUpComponent;