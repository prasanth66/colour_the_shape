import React from 'react';

class BananaComponent extends React.Component{
    
    render(){
        return(
            <div className='star-component '>
                
                <svg viewBox="0 0 100 100"  >

                <path  stroke='green' strokeWidth  ='.2' d='M10 0 v100'   />
                 <path  stroke='green' strokeWidth='.2' d='M20 0 v100'   />
              <path  stroke='green' strokeWidth='.2' d='M30 0 v100'   />
              <path  stroke='green' strokeWidth='.2' d='M40 0 v100'   />
              <path  stroke='green'strokeWidth='.2' d='M50 0 v100'   />
              <path  stroke='green' strokeWidth='.2' d='M60 0 v100'   />
              <path  stroke='green' strokeWidth='.2' d='M70 0 v100'   />
              <path  stroke='green' strokeWidth='.2' d='M80 0 v100'   />
              <path  stroke='green' strokeWidth='.2' d='M90 0 v100'   />

              <path  stroke='green' strokeWidth='.2' d='M0 10 H100'   />
              <path  stroke='green' strokeWidth='.2' d='M0 20 H100'   />
              <path  stroke='green' strokeWidth='.2' d='M0 30 H100'   />
              <path  stroke='green' strokeWidth='.2' d='M0 40 H100'   />
              <path  stroke='green' strokeWidth='.2' d='M0 50 H100'   />
              <path  stroke='green' strokeWidth='.2' d='M0 60 H100'   />
              <path  stroke='green' strokeWidth='.2' d='M0 70 H100'   />
              <path  stroke='green' strokeWidth='.2' d='M0 80 H100'   />
              <path  stroke='green'strokeWidth='.2' d='M0 90 H100'   />


             {/* drawing */}
                
             
             
             <path    stroke='black'  fill='none' strokeWidth='.1' d='M0 20 C 20 1 40 15 15 60 0 '   />
                

                </svg>
                
          </div>
        )
    }
}

export default BananaComponent;