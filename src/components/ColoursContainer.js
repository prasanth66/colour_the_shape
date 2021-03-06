import React from 'react';

class ColoursComponent extends React.Component{
    
    render(){
        return(
            <div className='colours-container'>
                <div style={{display:'flex',cursor:'pointer'}}>  <div className='colour-card' onClick = {()=>this.props.colour('red')} style={{backgroundColor:'red'}}> Red</div></div>
                <div style={{display:'flex',cursor:'pointer'}}>  <div className='colour-card' onClick = {()=>this.props.colour('blue')}  style={{backgroundColor:'blue',color:'white'}}> Blue</div></div>
                <div style={{display:'flex',cursor:'pointer'}}>  <div className='colour-card' onClick = {()=>this.props.colour('green')} style={{backgroundColor:'green'}}> Green</div></div>
                <div style={{display:'flex',cursor:'pointer'}}>  <div className='colour-card' onClick = {()=>this.props.colour('white')}  style={{backgroundColor:'white'}}> White</div></div>
                <div style={{display:'flex',cursor:'pointer'}}>  <div className='colour-card' onClick = {()=>this.props.colour('pink')}  style={{backgroundColor:'pink'}}>Pink</div></div>
                <div style={{display:'flex',cursor:'pointer'}}>   <div className='colour-card' onClick = {()=>this.props.colour('orange')}  style={{backgroundColor:'orange'}}>Orange</div></div>
                <div style={{display:'flex',cursor:'pointer'}}>  <div className='colour-card ' onClick = {()=>this.props.colour('brown')}  style={{backgroundColor:'brown'}}>Brown</div></div>
                <div style={{display:'flex',cursor:'pointer'}}>  <div className='colour-card' onClick = {()=>this.props.colour('yellow')}  style={{backgroundColor:'yellow'}}> Yellow</div></div>
                <div style={{display:'flex',cursor:'pointer'}}>  <div className='colour-card' onClick = {()=>this.props.colour('black')}  style={{backgroundColor:'black',color:'white'}}>Black</div></div>
            </div>
        )
    }
}

export default ColoursComponent;