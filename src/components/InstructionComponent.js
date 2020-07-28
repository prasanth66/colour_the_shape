import React from 'react';


class InstructionComponent extends React.Component{

   
    
    render(){
        return(
            <div className='instruction-container'>
                <nav></nav>
                <img href='https://t4.ftcdn.net/jpg/01/11/83/19/240_F_111831968_vCgI1K6RSfB6x5EpKfRe6CweyY9JS7BD.jpg'/>
                <div id='instruction'>
                  <h3>INSTRUCTION</h3>
                  <p>Select the colors that match the numbers given below to complete the image.</p>
                </div>
            </div>
        )
    }
}

export default InstructionComponent