import React from 'react';
import StarOptionComponent from '../OptionComponent/StarOptionComponent';
import Tick from '../../images/tick.svg';
import Wrong from '../../images/wrong.svg';


let colourNumbers=['blue','yellow'];
class StarComponent extends React.Component{

    constructor(props) {
        super(props);
    
        this.one = React.createRef();
        this.two = React.createRef();
        this.three = React.createRef();
        this.four = React.createRef();
        this.five = React.createRef();
        this.six = React.createRef();
        this.seven = React.createRef();
        this.eight = React.createRef();
        this.nine = React.createRef();
        this.ten = React.createRef();
        this.eleven = React.createRef();
        this.tweleve = React.createRef();
        this.thirteen = React.createRef();
        this.fourteen = React.createRef();
        this.fifteen = React.createRef();
        this.sixteen = React.createRef();
        this.seventeen = React.createRef();
        this.eighteen = React.createRef();
        this.ninteen = React.createRef();
       

        this.one1 = React.createRef();
        this.two2 = React.createRef();
        this.three3 = React.createRef();
        this.four4 = React.createRef();
        this.five5= React.createRef();
        this.six6 = React.createRef();
        this.seven7 = React.createRef();
        this.eight8 = React.createRef();
        this.nine9 = React.createRef();
        this.ten10 = React.createRef();
        this.eleven11 = React.createRef();
        this.tweleve12 = React.createRef();
        this.thirteen13 = React.createRef();
        this.fourteen14 = React.createRef();
        this.fifteen15 = React.createRef();
        this.sixteen16 = React.createRef();
        this.seventeen17 = React.createRef();
        this.eighteen18 = React.createRef();
        this.ninteen19 = React.createRef();

        this.one_1 = React.createRef();
        this.two_2 = React.createRef();
        this.three_3 = React.createRef();
        this.four_4 = React.createRef();
        this.five_5 = React.createRef();
        this.six_6 = React.createRef();
        this.seven_7 = React.createRef();
        this.eight_8 = React.createRef();
        this.nine_9 = React.createRef();
        this.ten_10 = React.createRef();
        this.eleven_11 = React.createRef();
        this.tweleve_12 = React.createRef();
        this.thirteen_13= React.createRef();
        this.fourteen_14 = React.createRef();
        this.fifteen_15 = React.createRef();
        this.sixteen_16 = React.createRef();
        this.seventeen_17 = React.createRef();
        this.eighteen_18 = React.createRef();
        this.ninteen_19 = React.createRef();
       
      }

      checkAnswer=()=>{
        let check=true;
        console.log()
       if(colourNumbers[(this.one_1.current.innerHTML)-6]===this.one.current.getAttribute('fill')){
          this.one1.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.one1.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.two_2.current.innerHTML)-6]===this.two.current.getAttribute('fill')){
          this.two2.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.two2.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.three_3.current.innerHTML)-6]===this.three.current.getAttribute('fill')){
        this.three3.current.setAttribute('href',Tick);
     }
     else{
         check=false;
         this.three3.current.setAttribute('href',Wrong);
     }
       if(colourNumbers[(this.four_4.current.innerHTML)-6]===this.four.current.getAttribute('fill')){
          this.four4.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.four4.current.setAttribute('href',Wrong);
       }

        if(colourNumbers[(this.five_5.current.innerHTML)-6]===this.five.current.getAttribute('fill')){
          this.five5.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.five5.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.six_6.current.innerHTML)-6]===this.six.current.getAttribute('fill')){
          this.six6.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.six6.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.seven_7.current.innerHTML)-6]===this.seven.current.getAttribute('fill')){
          this.seven7.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.seven7.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.eight_8.current.innerHTML)-6]===this.eight.current.getAttribute('fill')){
          this.eight8.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.eight8.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.nine_9.current.innerHTML)-6]===this.nine.current.getAttribute('fill')){
          this.nine9.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.nine9.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.ten_10.current.innerHTML)-6]===this.ten.current.getAttribute('fill')){
          this.ten10.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.ten10.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.eleven_11.current.innerHTML)-6]===this.eleven.current.getAttribute('fill')){
          this.eleven11.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.eleven11.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.tweleve_12.current.innerHTML)-6]===this.tweleve.current.getAttribute('fill')){
          this.tweleve12.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.tweleve12.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.thirteen_13.current.innerHTML)-6]===this.thirteen.current.getAttribute('fill')){
          this.thirteen13.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.thirteen13.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.fourteen_14.current.innerHTML)-6]===this.fourteen.current.getAttribute('fill')){
          this.fourteen14.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.fourteen14.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.fifteen_15.current.innerHTML)-6]===this.fifteen.current.getAttribute('fill')){
          this.fifteen15.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.fifteen15.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.sixteen_16.current.innerHTML)-6]===this.sixteen.current.getAttribute('fill')){
          this.sixteen16.current.setAttribute('href',Tick);
         
       }
       else{
           check=false;
           this.sixteen16.current.setAttribute('href',Wrong);
          
       }

       if(colourNumbers[(this.seventeen_17.current.innerHTML)-6]===this.seventeen.current.getAttribute('fill')){
          this.seventeen17.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.seventeen17.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.eighteen_18.current.innerHTML)-6]===this.eighteen.current.getAttribute('fill')){
          this.eighteen18.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.eighteen18.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.ninteen_19.current.innerHTML)-6]===this.ninteen.current.getAttribute('fill')){
          this.ninteen19.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.ninteen19.current.setAttribute('href',Wrong);
       }
      

      if(check){
          this.props.picture('castle')
      }

    }

    

    changeColour=(colour,pathReference,imageReference)=>{
        
        pathReference.current.setAttribute("fill",colour);
        imageReference.current.setAttribute('href','');
        return;
    }

    removeText=(reference)=>{
        reference.current.setAttribute('style','display:none')
    }

    addText=(reference)=>{
        reference.current.setAttribute('style','display:block')
    }
    render(){
        return(
            <div className=' game-component '>
                 
            <button  className='button' onClick={()=>this.checkAnswer()} style={{marginLeft:'15vw',marginTop:10,marginBottom:10}}>Check</button>
                 <svg viewBox="0 0 100 100" className='svg-container'>
                
                 <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.one_1)} onMouseOut={()=>this.addText(this.one_1)}>
               <path ref={this.one} onClick={()=>this.changeColour(this.props.colour,this.one,this.one1)}   stroke='black' fill='lightGrey' strokeWidth='.3' d='M100 0 l-10 40 l10 10 z'   />
               <text ref={this.one_1} x="96%" y="35%"    dominantBaseline="middle" textAnchor="middle">6</text>
               </svg>
               
               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.two_2)} onMouseOut={()=>this.addText(this.two_2)}>
               <path ref={this.two} onClick={()=>this.changeColour(this.props.colour,this.two,this.two2)}   stroke='black' fill='lightGrey' strokeWidth='.3' d='M40 40 l10 -30 l10 30 z'   />
               <text ref={this.two_2} x="50%" y="30%"   dominantBaseline="middle" textAnchor="middle">7</text>
            
               </svg>
                 
               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.three_3)} onMouseOut={()=>this.addText(this.three_3)}>
               <path ref={this.three} onClick={()=>this.changeColour(this.props.colour,this.three,this.three3)}  stroke='black' fill='lightGrey' strokeWidth='.3' d='M30 60 l-10 30 l30 -20 z'   />
               <text ref={this.three_3} x="35%" y="70%"   dominantBaseline="middle" textAnchor="middle">7</text>
            
               </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.four_4)} onMouseOut={()=>this.addText(this.four_4)}>
               <path  ref={this.four} onClick={()=>this.changeColour(this.props.colour,this.four,this.four4)}  stroke='black' fill='lightGrey' strokeWidth='.3' d='M40 40 h-30 l20 20 z'   />
               <text ref={this.four_4}  x="30%" y="50%"   dominantBaseline="middle" textAnchor="middle">7</text>  
               </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.five_5)} onMouseOut={()=>this.addText(this.five_5)}>
               <path  ref={this.five} onClick={()=>this.changeColour(this.props.colour,this.five,this.five5)}  stroke='black' fill='lightGrey' strokeWidth='.3' d='M60 40 l10 20 l20 -20 z'   />
               <text ref={this.five_5} x="70%" y="50%"    dominantBaseline="middle" textAnchor="middle">7</text>  
               </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.six_6)} onMouseOut={()=>this.addText(this.six_6)}>
               <path ref={this.six} onClick={()=>this.changeColour(this.props.colour,this.six,this.six6)}    stroke='black' fill='lightGrey' strokeWidth='.3' d='M50 70 l20 -10 l10 30 z'   />
               <text  ref={this.six_6} x="60%" y="70%"    dominantBaseline="middle" textAnchor="middle">7</text> 
               </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.seven_7)} onMouseOut={()=>this.addText(this.seven_7)}>
               <path   ref={this.seven} onClick={()=>this.changeColour(this.props.colour,this.seven,this.seven7)}  stroke='black' fill='lightGrey' strokeWidth='.3' d='M0 0 v40 h40 z'   />
               <text  ref={this.seven_7} x="20%" y="30%"    dominantBaseline="middle" textAnchor="middle">6</text> 
               </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.eight_8)} onMouseOut={()=>this.addText(this.eight_8)}>
               <path ref={this.eight} onClick={()=>this.changeColour(this.props.colour,this.eight,this.eight8)}    stroke='black' fill='lightGrey' strokeWidth='.3' d='M50 10 v-10 h-50 l40 40 z'   />
               <text ref={this.eight_8} x="30%" y="20%"   dominantBaseline="middle" textAnchor="middle">6</text>  
               </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.nine_9)} onMouseOut={()=>this.addText(this.nine_9)}>
               <path   ref={this.nine} onClick={()=>this.changeColour(this.props.colour,this.nine,this.nine9)}  stroke='black' fill='lightGrey' strokeWidth='.3' d='M50 10 v-10 h50 l-40 40 z'   />
               <text  ref={this.nine_9} x="70%" y="20%"    dominantBaseline="middle" textAnchor="middle">6</text> 
              </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.ten_10)} onMouseOut={()=>this.addText(this.ten_10)}>
               <path  ref={this.ten} onClick={()=>this.changeColour(this.props.colour,this.ten,this.ten10)}   stroke='black' fill='lightGrey' strokeWidth='.3' d='M100 0 l-40 40 h30 z'   />
               <text ref={this.ten_10} x="80%" y="30%"    dominantBaseline="middle" textAnchor="middle">6</text> 
               </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.eleven_11)} onMouseOut={()=>this.addText(this.eleven_11)}>
               <path  ref={this.eleven} onClick={()=>this.changeColour(this.props.colour,this.eleven,this.eleven11)}  stroke='black' fill='lightGrey' strokeWidth='.3' d='M10 40 h-10 v20 h30 z'   />
               <text ref={this.eleven_11} x="5%" y="50%"    dominantBaseline="middle" textAnchor="middle">6</text>  
               </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.tweleve_12)} onMouseOut={()=>this.addText(this.tweleve_12)}>
               <path  ref={this.tweleve} onClick={()=>this.changeColour(this.props.colour,this.tweleve,this.tweleve12)}  stroke='black' fill='lightGrey' strokeWidth='.3' d='M30 60 h-30 l 20 30 z'   />
               <text ref={this.tweleve_12} x="15%" y="70%"    dominantBaseline="middle" textAnchor="middle">6</text>           
               </svg>


               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.thirteen_13)} onMouseOut={()=>this.addText(this.thirteen_13)}>
               <path  ref={this.thirteen} onClick={()=>this.changeColour(this.props.colour,this.thirteen,this.thirteen13)}  stroke='black' fill='lightGrey' strokeWidth='.3' d='M0 60 v40 h 20 v-10 z'   />
               <text ref={this.thirteen_13} x="10%" y="90%"   dominantBaseline="middle" textAnchor="middle">6</text>  
               </svg>

               <svg  style={{fontSize:5}} onMouseOver={()=>this.removeText(this.fourteen_14)} onMouseOut={()=>this.addText(this.fourteen_14)}>
               <path  ref={this.fourteen} onClick={()=>this.changeColour(this.props.colour,this.fourteen,this.fourteen14)}  stroke='black' fill='lightGrey' strokeWidth='.3' d='M20 90 v10 h30 v-30 z'   />
               <text ref={this.fourteen_14} x="30%" y="90%"    dominantBaseline="middle" textAnchor="middle">6</text>  
               </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.fifteen_15)} onMouseOut={()=>this.addText(this.fifteen_15)}>
               <path  ref={this.fifteen} onClick={()=>this.changeColour(this.props.colour,this.fifteen,this.fifteen15)}    stroke='black' fill='lightGrey' strokeWidth='.3' d='M80 90 v10 h-30 v-30 z'   />
               <text ref={this.fifteen_15} x="60%" y="90%"   dominantBaseline="middle" textAnchor="middle">6</text>  
              </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.sixteen_16)} onMouseOut={()=>this.addText(this.sixteen_16)}>
               <path  ref={this.sixteen} onClick={()=>this.changeColour(this.props.colour,this.sixteen,this.sixteen16)}  stroke='black' fill='lightGrey' strokeWidth='.3' d='M90 40 l-20 20 h30 v-10 z'   />
               <text ref={this.sixteen_16} x="88%" y="50%" dominantBaseline="middle" textAnchor="middle">6</text>  
               </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.seventeen_17)} onMouseOut={()=>this.addText(this.seventeen_17)}>
               <path  ref={this.seventeen} onClick={()=>this.changeColour(this.props.colour,this.seventeen,this.seventeen17)}  stroke='black' fill='lightGrey' strokeWidth='.3' d='M70 60 h30 v40 h-20 v-10 z'   />
               <text ref={this.seventeen_17} x="90%" y="82%"  dominantBaseline="middle" textAnchor="middle">6</text>  
               </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.eighteen_18)} onMouseOut={()=>this.addText(this.eighteen_18)}>
               <path  ref={this.eighteen} onClick={()=>this.changeColour(this.props.colour,this.eighteen,this.eighteen18)}    stroke='black' fill='lightGrey' strokeWidth='.3' d='M60 40 h-20 l-10 20 z'   />
               <text ref={this.eighteen_18} x="43%" y="45%"    dominantBaseline="middle" textAnchor="middle">7</text>  
               </svg>

               <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.ninteen_19)} onMouseOut={()=>this.addText(this.ninteen_19)}>
               <path ref={this.ninteen} onClick={()=>this.changeColour(this.props.colour,this.ninteen,this.ninteen19)}     stroke='black' fill='lightGrey' strokeWidth='.3' d='M60 40 l10 20 l-20 10 l-20 -10 z'   />
               <text ref={this.ninteen_19} x="50%" y="60%"  dominantBaseline="middle" textAnchor="middle">7</text>  
               </svg>


            

             <image ref={this.one1} href='' height="5" width="5" x="95%" y="27%"/>
             <image ref={this.two2} href=''height="5" width="5" x="45%" y="30%"/>
             <image ref={this.three3} href=''height="5" width="5" x="35%" y="70%"/>
             <image ref={this.four4} href='' height="5" width="5" x="27%" y="50%"/>
             <image ref={this.five5} href='' height="5" width="5" x="70%" y="50%"/>
             <image ref={this.six6} href='' height="5" width="5" x="60%" y="70%"/>
             <image ref={this.seven7} href='' height="5" width="5" x="20%" y="32%"/>
             <image ref={this.eight8} href='' height="5" width="5" x="30%" y="20%"/>
             <image ref={this.nine9} href=''height="5" width="5" x="65%" y="15%"/>
             <image ref={this.ten10} href='' height="5" width="5" x="80%" y="30%"/>
             <image ref={this.eleven11} href='' height="5" width="5" x="5%" y="50%"/>
             <image ref={this.tweleve12} href='' height="5" width="5" x="15%" y="70%"/>
             <image ref={this.thirteen13} href='' height="5" width="5" x="10%" y="90%"/>
             <image ref={this.fourteen14} href='' height="5" width="5" x="30%" y="90%"/>
             <image ref={this.fifteen15} href='' height="5" width="5" x="60%" y="90%"/>
             <image ref={this.sixteen16} href='' height="5" width="5" x="88%" y="50%"/>
             <image ref={this.seventeen17} href='' height="5" width="5" x="90%" y="82%"/>
             <image ref={this.eighteen18} href='' height="5" width="5" x="43%" y="45%"/>
             <image ref={this.ninteen19} href='' height="5" width="5" x="50%" y="60%"/>
            
                </svg>
                <StarOptionComponent/>

          </div>
        )
    }
}

export default StarComponent;