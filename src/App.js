import React from 'react';
import ColoursContainer from './components/ColoursContainer';
import KiteComponent from './components/GameComponents/KiteComponent'
import PopupComponent from './components/PopupComponent';
import StarComponent from './components/GameComponents/StarComponent';
import InstructionComponent from './components/InstructionComponent';
import CubeComponent from './components/GameComponents/CubeComponent';
import CastleComponent from './components/GameComponents/CastleComponenet';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);
    this.levelHandler=this.levelHandler.bind(this);
    // Set some state
    this.state = {
        colour: "lightGrey",
        picture:""
    };
}

// This method will be sent to the child component
handler(colour) {
  
  this.setState({
    colour: colour
  });
}

levelHandler(picture){
  this.setState({
    picture: picture
  });
}



  render(){
   
    return (
      <div className="App">
          
        <div className='container'>
         

        <ColoursContainer colour = {this.handler}  />
        <InstructionComponent/>
       
        {(() => {
        switch (this.state.picture) {
          case "kite":   return <KiteComponent  colour = {this.state.colour}  picture = {this.levelHandler}/>;
          case "star":   return <StarComponent colour = {this.state.colour}  picture = {this.levelHandler}/>;
          case "castle":   return <CastleComponent colour = {this.state.colour}  picture = {this.levelHandler}/>;
          default: {return <PopupComponent picture = {this.levelHandler} />};
        
        }
      })()}
            
        </div>
       
           
      </div>
    );
  }
}

export default App;
