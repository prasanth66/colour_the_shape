import React from 'react';

class CastleOptionComponent extends React.Component{
    render(){
        return(
            <div className='option-container'>
                <p style={{backgroundColor:'orange',height:'4vh',textAlign:'center',fontSize:'bolder',border:"2px solid grey"}}>3.Orange</p>
                <p  style={{backgroundColor:'blue',color:'white',height:'4vh',textAlign:'center',fontSize:'bolder',border:"2px solid grey"}}>4.Blue</p>
                <p style={{backgroundColor:'yellow',height:'4vh',textAlign:'center',fontSize:'bolder',border:"2px solid grey"}}>5.Yellow</p>
                <p  style={{backgroundColor:'white',color:'black',height:'4vh',textAlign:'center',fontSize:'bolder',border:"2px solid grey"}}>6.White</p>
            </div>
        )
    }
}

export default CastleOptionComponent;