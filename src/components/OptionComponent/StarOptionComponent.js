import React from 'react';

class StarOptionComponent extends React.Component{
    render(){
        return(
            <div className='option-container'>
                <p style={{backgroundColor:'blue',height:'4vh',color:'white',textAlign:'center',fontSize:'bolder'}}>6.Blue</p>
                <p  style={{backgroundColor:'yellow',height:'4vh',textAlign:'center',fontSize:'bolder'}}>7.Yellow</p>
            </div>
        )
    }
}

export default StarOptionComponent;