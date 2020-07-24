import React from 'react';

class StarComponent extends React.Component{
    
    render(){
        return(
            <div className=' game-component '>
                
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

             <path   stroke='black' fill='none' strokeWidth='.3' d='M0 40 h90'   />
             <path   stroke='black' fill='none' strokeWidth='.3' d='M100 0 l-10 40 l10 10 z'   />
             <path   stroke='black' fill='none' strokeWidth='.3' d='M40 40 l10 -30 l10 30 z'   />
             <path   stroke='black' fill='none' strokeWidth='.3' d='M40 40 h-30 l20 20 z'   />
             <path   stroke='black' fill='none' strokeWidth='.3' d='M60 40 l10 20 l20 -20 z'   />
             <path   stroke='black' fill='none' strokeWidth='.3' d='M30 60 l-10 30 l30 -20 z'   />
             <path   stroke='black' fill='none' strokeWidth='.3' d='M50 70 l20 -10 l10 30 z'   />

             

                </svg>
                
          </div>
        )
    }
}

export default StarComponent;