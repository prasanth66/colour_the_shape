import React from 'react';
import StarOptionComponent from '../OptionComponent/StarOptionComponent';

class CubeComponent extends React.Component{
    
    render(){
        return(
            <div className='game-component '>
                 <button  className='button' onClick={()=>this.checkAnswer()} style={{marginLeft:'15vw',marginTop:10,marginBottom:10}}>Check</button>
                <svg viewBox="0 0 100 100"  >


             {/* drawing */}
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M30 20 v20 h-20 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M60 40 h-30 v-20 h50 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M80 20 v50 h-20 v-30 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M60 70  v-30 h-30 v30 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M30 70 v-30 h-20 v50 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M30 70 h30 v20 h-50 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M60 90 v-20 h20 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M0 0 h30 v20 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M30 20  l-30 -20 v40 h10 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M10 40 h-10 v60 h10 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M80 70 v30 h-70 v-10 h50 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M30 20 v-20 h30 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M60 0 v20 h-30 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M100 0 h-40 v20 h20 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M100 0 v40 h-20 v-20 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M80 40 v30 l20 -10 v-20 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M30 20  l-30 -20 v40 h10 z'/>
             <path stroke='black' strokeWidth='.3' fill='lightGrey' d='M100 60 v40 h-20 v-30 z'/>

                </svg>
                <StarOptionComponent/>
          </div>
        )
    }
}

export default CubeComponent;