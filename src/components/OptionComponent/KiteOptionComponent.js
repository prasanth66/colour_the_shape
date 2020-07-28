import React from 'react';

class KiteOptionComponent extends React.Component{
    render(){
        return(
            <div className='option-container'>
                <p style={{backgroundColor:'brown',height:'4vh',textAlign:'center',fontSize:'bolder',border:"2px solid grey"}}>1.Brown</p>
                <p  style={{backgroundColor:'blue',color:'white',height:'4vh',textAlign:'center',fontSize:'bolder',border:"2px solid grey"}}>2.Blue</p>
            </div>
        )
    }
}

export default KiteOptionComponent;