import React from 'react';
import Popup from "reactjs-popup";




class InstructionComponent extends React.Component{

    
    render(){
        return(
            <div className='instruction-container'>
                 <Popup style={{overFlow:'hidden'}}   trigger={<button> i</button>} position="bottom center">
                 <div id='instruction'>
                  <h3>INSTRUCTION</h3>
                  <p>Select the colors that match the numbers given below to complete the image.</p>
                </div>
    
             </Popup>
               
            </div>
        )
    }
}

export default InstructionComponent