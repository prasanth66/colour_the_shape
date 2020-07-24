import React from 'react';
import {Howl} from 'howler';
import Play from '../songs/play.mp3';



class PopupComponent extends React.Component{

    soundPlay=(src)=>{
        const sound=new Howl({
            src,
            volume: 0.3
          
        })
        sound.play();
    }

    //  helper(params) {
    //     console.log(this.props.picture);
    //     return;
    // }
    
    render(){
        return(
            <div className='popup-container'>
                <p style={{textAlign:'center',color:'green',fontSize:"2rem"}}>Colour By Numbers</p>
                <p style={{textAlign:'center'}}>Have fun with colors as you practice your number recognition skills. Identify the number and use the color key to colour the picture</p>
             
              <div id='play-buttons'>
              <button className='button'onClick = {()=>this.props.picture('kite')} onMouseOver={()=>this.soundPlay(Play)}>Play</button>
               <button className='button'>Exit</button>
              </div>
              
            </div>
        )
    }
}

export default PopupComponent