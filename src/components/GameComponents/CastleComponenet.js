import React from 'react';
import CastleOptionComponent from '../OptionComponent/CastleOptionComponent';
import Tick from '../../images/tick.svg';
import Wrong from '../../images/wrong.svg';

let colourNumbers=['orange','blue','yellow','white'];
class CastleComponent extends React.Component{

    
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
        this.twenty = React.createRef();
        this.twentyone= React.createRef();
        this.twentytwo = React.createRef();
       

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
        this.twenty20 = React.createRef();
        this.twentyone21= React.createRef();
        this.twentytwo22 = React.createRef();

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
        this.twenty_20 = React.createRef();
        this.twentyone_21= React.createRef();
        this.twentytwo_22 = React.createRef();
       
      }

      checkAnswer=()=>{
        let check=true;
        console.log()
       if(colourNumbers[(this.one_1.current.innerHTML)-3]===this.one.current.getAttribute('fill')){
          this.one1.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.one1.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.two_2.current.innerHTML)-3]===this.two.current.getAttribute('fill')){
          this.two2.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.two2.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.three_3.current.innerHTML)-3]===this.three.current.getAttribute('fill')){
        this.three3.current.setAttribute('href',Tick);
     }
     else{
         check=false;
         this.three3.current.setAttribute('href',Wrong);
     }
       if(colourNumbers[(this.four_4.current.innerHTML)-3]===this.four.current.getAttribute('fill')){
          this.four4.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.four4.current.setAttribute('href',Wrong);
       }

        if(colourNumbers[(this.five_5.current.innerHTML)-3]===this.five.current.getAttribute('fill')){
          this.five5.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.five5.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.six_6.current.innerHTML)-3]===this.six.current.getAttribute('fill')){
          this.six6.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.six6.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.seven_7.current.innerHTML)-3]===this.seven.current.getAttribute('fill')){
          this.seven7.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.seven7.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.eight_8.current.innerHTML)-3]===this.eight.current.getAttribute('fill')){
          this.eight8.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.eight8.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.nine_9.current.innerHTML)-3]===this.nine.current.getAttribute('fill')){
          this.nine9.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.nine9.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.ten_10.current.innerHTML)-3]===this.ten.current.getAttribute('fill')){
          this.ten10.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.ten10.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.eleven_11.current.innerHTML)-3]===this.eleven.current.getAttribute('fill')){
          this.eleven11.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.eleven11.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.tweleve_12.current.innerHTML)-3]===this.tweleve.current.getAttribute('fill')){
          this.tweleve12.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.tweleve12.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.thirteen_13.current.innerHTML)-3]===this.thirteen.current.getAttribute('fill')){
          this.thirteen13.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.thirteen13.current.setAttribute('href',Wrong);
       }
       if(colourNumbers[(this.fourteen_14.current.innerHTML)-3]===this.fourteen.current.getAttribute('fill')){
          this.fourteen14.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.fourteen14.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.fifteen_15.current.innerHTML)-3]===this.fifteen.current.getAttribute('fill')){
          this.fifteen15.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.fifteen15.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.sixteen_16.current.innerHTML)-3]===this.sixteen.current.getAttribute('fill')){
          this.sixteen16.current.setAttribute('href',Tick);
         
       }
       else{
           check=false;
           this.sixteen16.current.setAttribute('href',Wrong);
          
       }

       if(colourNumbers[(this.seventeen_17.current.innerHTML)-3]===this.seventeen.current.getAttribute('fill')){
          this.seventeen17.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.seventeen17.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.eighteen_18.current.innerHTML)-3]===this.eighteen.current.getAttribute('fill')){
          this.eighteen18.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.eighteen18.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.ninteen_19.current.innerHTML)-3]===this.ninteen.current.getAttribute('fill')){
          this.ninteen19.current.setAttribute('href',Tick);
       }
       else{
           check=false;
           this.ninteen19.current.setAttribute('href',Wrong);
       }

       if(colourNumbers[(this.twenty_20.current.innerHTML)-3]===this.twenty.current.getAttribute('fill')){
        this.twenty20.current.setAttribute('href',Tick);
     }
     else{
         check=false;
         this.twenty20.current.setAttribute('href',Wrong);
     }

     if(colourNumbers[(this.twentyone_21.current.innerHTML)-3]===this.twentyone.current.getAttribute('fill')){
        this.twentyone21.current.setAttribute('href',Tick);
     }
     else{
         check=false;
         this.twentyone21.current.setAttribute('href',Wrong);
     }

     if(colourNumbers[(this.twentytwo_22.current.innerHTML)-3]===this.twentytwo.current.getAttribute('fill')){
        this.twentytwo22.current.setAttribute('href',Tick);
     }
     else{
         check=false;
         this.twentytwo22.current.setAttribute('href',Wrong);
     }
      

      if(check){
          this.props.picture('kite')
      }

    }
    
    changeColour=(colour,pathReference,imageReference)=>{
        console.log(colour);
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
            <div className='game-component '>
              
                 <svg  viewBox="0 0 100 100" className='svg-container'>
             
             <svg style={{fontSize:5}}  onMouseOver={()=>this.removeText(this.one_1)} onMouseOut={()=>this.addText(this.one_1)}>
             <path ref={this.one} onClick={()=>this.changeColour(this.props.colour,this.one,this.one1)} stroke='black' fill='lightGrey' strokeWidth='.2' d='M30 75 v-25 h40 v25 h-15 v-15 h-10 v15 z'   />
             <text ref={this.one_1} x="60%" y="60%"  dominantBaseline="middle" textAnchor="middle">3</text>
               </svg>

             <svg style={{fontSize:4}} onMouseOver={()=>this.removeText(this.two_2)} onMouseOut={()=>this.addText(this.two_2)}>
             <path ref={this.two} onClick={()=>this.changeColour(this.props.colour,this.two,this.two2)}  stroke='black' fill='lightGrey' strokeWidth='.2' d='M45 60 h10 v15 h-10 z'   />
             <text ref={this.two_2} x="48%" y="65%"   dominantBaseline="middle" textAnchor="middle">6</text>
            
             </svg>

             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.three_3)} onMouseOut={()=>this.addText(this.three_3)}>
             <path ref={this.three} onClick={()=>this.changeColour(this.props.colour,this.three,this.three3)}  stroke='black' fill='lightGrey' strokeWidth='.2' d='M30 75 h-10 v-45 h10 z'   /> 
             <text ref={this.three_3} x="25%" y="50%"   dominantBaseline="middle" textAnchor="middle">3</text>
            
             </svg>

               
             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.four_4)} onMouseOut={()=>this.addText(this.four_4)}> 
             <path  ref={this.four} onClick={()=>this.changeColour(this.props.colour,this.four,this.four4)}    stroke='black' fill='lightGrey' strokeWidth='.2' d='M15 30 h20 l-10 -15 z'   /> 
             <text ref={this.four_4} x="25%" y="25%"   dominantBaseline="middle" textAnchor="middle">4</text>
            
             </svg>

             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.five_5)} onMouseOut={()=>this.addText(this.five_5)}>
             <path  ref={this.five} onClick={()=>this.changeColour(this.props.colour,this.five,this.five5)}   stroke='black' fill='lightGrey' strokeWidth='.2' d='M70 75 h10 v-45 h-10 z'   /> 
             <text ref={this.five_5} x="75%" y="50%"    dominantBaseline="middle" textAnchor="middle">3</text>  
               </svg>

             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.six_6)} onMouseOut={()=>this.addText(this.six_6)}>
             <path ref={this.six} onClick={()=>this.changeColour(this.props.colour,this.six,this.six6)} stroke='black' fill='lightGrey' strokeWidth='.2' d='M65 30 h20 l-10 -15 z'   />
             <text  ref={this.six_6} x="75%" y="25%"    dominantBaseline="middle" textAnchor="middle">4</text> 
               </svg>

               
             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.seven_7)} onMouseOut={()=>this.addText(this.seven_7)}>
             <path ref={this.seven} onClick={()=>this.changeColour(this.props.colour,this.seven,this.seven7)}   stroke='black' fill='lightGrey' strokeWidth='.2' d='M40 50 h20 v-25 h-20 z'   />
             <text  ref={this.seven_7} x="50%" y="35%"    dominantBaseline="middle" textAnchor="middle">3</text> 
               </svg>

             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.eight_8)} onMouseOut={()=>this.addText(this.eight_8)}>
             <path ref={this.eight} onClick={()=>this.changeColour(this.props.colour,this.eight,this.eight8)} stroke='black' fill='lightGrey' strokeWidth='.2' d='M35 25 h30 l-15 -15 z'   />
             <text ref={this.eight_8} x="50%" y="20%"   dominantBaseline="middle" textAnchor="middle">4</text>  
               </svg>

             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.nine_9)} onMouseOut={()=>this.addText(this.nine_9)}>
             <path  ref={this.nine} onClick={()=>this.changeColour(this.props.colour,this.nine,this.nine9)}   stroke='black' fill='lightGrey' strokeWidth='.2' d='M0 0 h35 v7.5 l-10 -2.5 v10 h-25 z '   />
             <text  ref={this.nine_9} x="10%" y="7%"    dominantBaseline="middle" textAnchor="middle">5</text> 
              </svg>

               
             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.ten_10)} onMouseOut={()=>this.addText(this.ten_10)}>
             <path  ref={this.ten} onClick={()=>this.changeColour(this.props.colour,this.ten,this.ten10)}  stroke='black' fill='lightGrey' strokeWidth='.2' d='M35 0 v7.5 l-10 2.5 v5 l10 15 h-5 v20 h10 v-25 h-5 l15 -15 z'   />
             <text ref={this.ten_10} x="35%" y="15%"    dominantBaseline="middle" textAnchor="middle">5</text> 
               </svg>

             <svg style={{fontSize:4}} onMouseOver={()=>this.removeText(this.eleven_11)} onMouseOut={()=>this.addText(this.eleven_11)}>
             <path ref={this.eleven} onClick={()=>this.changeColour(this.props.colour,this.eleven,this.eleven11)}   stroke='black' fill='lightGrey' strokeWidth='.2' d='M35 0 l15 10 v-5 l10 2.5 v-7.5 z'   />
             <text ref={this.eleven_11} x="50%" y="3%"    dominantBaseline="middle" textAnchor="middle">5</text>  
               </svg>

             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.tweleve_12)} onMouseOut={()=>this.addText(this.tweleve_12)}>
             <path ref={this.tweleve} onClick={()=>this.changeColour(this.props.colour,this.tweleve,this.tweleve12)} stroke='black' fill='lightGrey' strokeWidth='.2' d='M60 0 v7.5 l-10 2.5 l15 15 h-5 v25 h10 v-20 h-5 l10 -15 v-10 l10 2.5 v-7.5 z'   />
             <text ref={this.tweleve_12} x="65%" y="15%"    dominantBaseline="middle" textAnchor="middle">5</text>           
               </svg>

               
             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.thirteen_13)} onMouseOut={()=>this.addText(this.thirteen_13)}>
             <path  ref={this.thirteen} onClick={()=>this.changeColour(this.props.colour,this.thirteen,this.thirteen13)} stroke='black' fill='lightGrey' strokeWidth='.2' d='M85 0 v7.5 l-10 2.5 v5 l10 15 h15 v-30 z'   />
             <text ref={this.thirteen_13} x="90%" y="15%"   dominantBaseline="middle" textAnchor="middle">5</text>  
               </svg>

             <svg  style={{fontSize:5}} onMouseOver={()=>this.removeText(this.fourteen_14)} onMouseOut={()=>this.addText(this.fourteen_14)}>
             <path ref={this.fourteen} onClick={()=>this.changeColour(this.props.colour,this.fourteen,this.fourteen14)} stroke='black' fill='lightGrey' strokeWidth='.2' d='M100 30 h-20 v20 l20 10 z '   />
             <text ref={this.fourteen_14} x="90%" y="40%"    dominantBaseline="middle" textAnchor="middle">5</text>  
               </svg>

             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.fifteen_15)} onMouseOut={()=>this.addText(this.fifteen_15)}>
             <path ref={this.fifteen} onClick={()=>this.changeColour(this.props.colour,this.fifteen,this.fifteen15)} stroke='black' fill='lightGrey' strokeWidth='.2' d='M80 50 v25 l20 15 v-30 z'   />
             <text ref={this.fifteen_15} x="90%" y="70%"   dominantBaseline="middle" textAnchor="middle">5</text>  
              </svg>

               
             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.sixteen_16)} onMouseOut={()=>this.addText(this.sixteen_16)}>
             <path ref={this.sixteen} onClick={()=>this.changeColour(this.props.colour,this.sixteen,this.sixteen16)} stroke='black' fill='lightGrey' strokeWidth='.2' d='M80 75 v25 h20 v-10 z'   />
             <text ref={this.sixteen_16} x="90%" y="90%" dominantBaseline="middle" textAnchor="middle">5</text>  
               </svg>

             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.seventeen_17)} onMouseOut={()=>this.addText(this.seventeen_17)}>
             <path ref={this.seventeen} onClick={()=>this.changeColour(this.props.colour,this.seventeen,this.seventeen17)} stroke='black' fill='lightGrey' strokeWidth='.2' d='M80 75 h-25 l25 25 z'   />
             <text ref={this.seventeen_17} x="70%" y="82%"  dominantBaseline="middle" textAnchor="middle">5</text>  
               </svg>

             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.eighteen_18)} onMouseOut={()=>this.addText(this.eighteen_18)}>
             <path ref={this.eighteen} onClick={()=>this.changeColour(this.props.colour,this.eighteen,this.eighteen18)} stroke='black' fill='lightGrey' strokeWidth='.2' d='M20 75 h35 l25 25 z'   />
             <text ref={this.eighteen_18} x="50%" y="80%"    dominantBaseline="middle" textAnchor="middle">5</text>  
               </svg>

               
             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.ninteen_19)} onMouseOut={()=>this.addText(this.ninteen_19)}>
             <path ref={this.ninteen} onClick={()=>this.changeColour(this.props.colour,this.ninteen,this.ninteen19)}  stroke='black' fill='lightGrey' strokeWidth='.2' d='M20 75 v25 h60 z'   />
             <text ref={this.ninteen_19} x="45%" y="90%"  dominantBaseline="middle" textAnchor="middle">5</text>  
               </svg>

             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.twenty_20)} onMouseOut={()=>this.addText(this.twenty_20)}>
             <path ref={this.twenty} onClick={()=>this.changeColour(this.props.colour,this.twenty,this.twenty20)} stroke='black' fill='lightGrey' strokeWidth='.2' d='M25 15 h-25 v15 h15 z'   />
             <text ref={this.twenty_20} x="10%" y="20%"    dominantBaseline="middle" textAnchor="middle">5</text>  
             </svg>

             <svg style={{fontSize:5}} onMouseOver={()=>this.removeText(this.twentyone_21)} onMouseOut={()=>this.addText(this.twentyone_21)}>
             <path ref={this.twentyone} onClick={()=>this.changeColour(this.props.colour,this.twentyone,this.twentyone21)} stroke='black' fill='lightGrey' strokeWidth='.2' d='M0 30 h20 v45  z'   />
             <text ref={this.twentyone_21} x="13%" y="40%"    dominantBaseline="middle" textAnchor="middle">5</text>  
             </svg>

             <svg style={{fontSize:'5'}} onMouseOver={()=>this.removeText(this.twentytwo_22)} onMouseLeave={()=>this.addText(this.twentytwo_22)}>
             <path ref={this.twentytwo} onClick={()=>this.changeColour(this.props.colour,this.twentytwo,this.twentytwo22)}    stroke='black' fill='lightGrey' strokeWidth='.2' d='M0 30 v70 h20 v-25 z'   />
             <text ref={this.twentytwo_22} x="10%" y="70%" dominantBaseline="middle" textAnchor="middle">5</text>
           
             </svg>
                
             


             {/* just lines */}
             <path  stroke='black' fill='red' strokeWidth='.2' d='M25 15 v-10 l10 2.5 l-10 2.5'   />
             <path  stroke='black' fill='red' strokeWidth='.2' d='M50 10 v-5 l10 2.5 z'   />
             <path  stroke='black' fill='red' strokeWidth='.2' d='M75 15 v-10 l10 2.5 l-10 2.5'   />
             <path  stroke='black' fill='none' strokeWidth='.2' d='M30 47.5 h2.5 v2.5 h2.5 v-2.5 h2.5 v2.5 h2.5 v-2.5 h2.5 v2.5 h2.5 v-2.5 h2.5 v2.5 h2.5 v-2.5 h2.5 v2.5 h2.5 v-2.5 h2.5 v2.5 h2.5 v-2.5 h2.5 v2.5 h2.5 v-2.5 h2.5 v2.5 h2.5 v-2.5'   />
             <path  stroke='black' fill='none' strokeWidth='.5' d='M27 35 h-4.5 v4.5 h4.5 v-4.5'   />
             <path  stroke='black' fill='none' strokeWidth='.2' d='M50 75 v-15'   />
             <path  stroke='black' fill='none' strokeWidth='.5' d='M45 30 h9 v9 h-9 z'   />
             <path  stroke='black' fill='none' strokeWidth='.5' d='M77 35 h-4.6 v4.6 h4.6 z'   />
             
             {/* images */}

             <image ref={this.one1} href='' height="5" width="5" x="60%" y="60%"/>
             <image ref={this.two2} href=''height="3" width="3" x="50%" y="65%"/>
             <image ref={this.three3} href=''height="5" width="5" x="23%" y="50%"/>
             <image ref={this.four4} href='' height="5" width="5" x="25%" y="25%"/>  
             <image ref={this.five5} href='' height="5" width="5" x="75%" y="50%"/>
             <image ref={this.six6} href='' height="5" width="5" x="75%" y="25%"/>
             <image ref={this.seven7} href='' height="5" width="5" x="50%" y="35%"/>
             <image ref={this.eight8} href='' height="5" width="5" x="50%" y="20%"/>
             <image ref={this.nine9} href=''height="5" width="5" x="10%" y="7%"/>
             <image ref={this.ten10} href='' height="5" width="5" x="35%" y="15%"/>
             <image ref={this.eleven11} href='' height="5" width="5" x="53%" y="1%"/>
             <image ref={this.tweleve12} href='' height="5" width="5" x="65%" y="15%"/>
             <image ref={this.thirteen13} href='' height="5" width="5" x="90%" y="15%"/>
             <image ref={this.fourteen14} href='' height="5" width="5" x="90%" y="40%"/>
             <image ref={this.fifteen15} href='' height="5" width="5" x="90%" y="70%"/>
             <image ref={this.sixteen16} href='' height="5" width="5" x="90%" y="90%"/>
             <image ref={this.seventeen17} href='' height="5" width="5" x="70%" y="82%"/>
             <image ref={this.eighteen18} href='' height="5" width="5" x="50%" y="80%"/>
             <image ref={this.ninteen19} href='' height="5" width="5" x="45%" y="90%"/>
             <image ref={this.twenty20} href='' height="5" width="5" x="10%" y="20%"/>
           <image ref={this.twentyone21} href='' height="5" width="5" x="13%" y="40%"/>
           <image ref={this.twentytwo22} href='' height="5" width="5" x="10%" y="70%"/>
           
                </svg>
                <CastleOptionComponent/>
                <button  className='button' onClick={()=>this.checkAnswer()}>Check</button>
                
          </div>
        )
    }
}

export default CastleComponent;