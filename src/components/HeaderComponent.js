import React from 'react';

class HeaderComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            data:"someData",
            data2:"someData2"
        }
    
    }
    componentWillReceiveProps(props){
        console.log("willReceiveProps")
    }
    componentDidMount(){
        
    };
    render(){
        return(
            <div className="header-main">
                <div className="header-inner">
                IDFC FIRST Bank
                </div>
            </div>
        )
    }
}
export default HeaderComponent;