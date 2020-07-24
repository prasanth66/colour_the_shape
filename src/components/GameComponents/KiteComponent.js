import React from 'react';
import OptionComponent from '../OptionComponent';
import Tick from '../../images/tick.jpg';
import Wrong from '../../images/wrong.jpg';


let colourNumbers=['brown','blue'];


class KiteComponent extends React.Component{

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
        this.twentyone = React.createRef();
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
        this.twentyone21 = React.createRef();
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
        this.twentyone_21 = React.createRef();
        this.twentytwo_22 = React.createRef();


       
      }

      checkAnswer=()=>{
          let check=true;
          console.log()
         if(colourNumbers[(this.one_1.current.innerHTML)-1]==this.one.current.getAttribute('fill')){
            this.one1.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.one1.current.setAttribute('href',Wrong);
         }
         if(colourNumbers[(this.two_2.current.innerHTML)-1]==this.two.current.getAttribute('fill')){
            this.two2.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.two2.current.setAttribute('href',Wrong);
         }
         if(colourNumbers[(this.four_4.current.innerHTML)-1]==this.four.current.getAttribute('fill')){
            this.four4.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.four4.current.setAttribute('href',Wrong);
         }

          if(colourNumbers[(this.five_5.current.innerHTML)-1]==this.five.current.getAttribute('fill')){
            this.five5.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.five5.current.setAttribute('href',Wrong);
         }
         if(colourNumbers[(this.six_6.current.innerHTML)-1]==this.six.current.getAttribute('fill')){
            this.six6.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.six6.current.setAttribute('href',Wrong);
         }
         if(colourNumbers[(this.seven_7.current.innerHTML)-1]==this.seven.current.getAttribute('fill')){
            this.seven7.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.seven7.current.setAttribute('href',Wrong);
         }
         if(colourNumbers[(this.eight_8.current.innerHTML)-1]==this.eight.current.getAttribute('fill')){
            this.eight8.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.eight8.current.setAttribute('href',Wrong);
         }
         if(colourNumbers[(this.nine_9.current.innerHTML)-1]==this.nine.current.getAttribute('fill')){
            this.nine9.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.nine9.current.setAttribute('href',Wrong);
         }

         if(colourNumbers[(this.ten_10.current.innerHTML)-1]==this.ten.current.getAttribute('fill')){
            this.ten10.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.ten10.current.setAttribute('href',Wrong);
         }

         if(colourNumbers[(this.eleven_11.current.innerHTML)-1]==this.eleven.current.getAttribute('fill')){
            this.eleven11.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.eleven11.current.setAttribute('href',Wrong);
         }

         if(colourNumbers[(this.tweleve_12.current.innerHTML)-1]==this.tweleve.current.getAttribute('fill')){
            this.tweleve12.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.tweleve12.current.setAttribute('href',Wrong);
         }
         if(colourNumbers[(this.thirteen_13.current.innerHTML)-1]==this.thirteen.current.getAttribute('fill')){
            this.thirteen13.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.thirteen13.current.setAttribute('href',Wrong);
         }
         if(colourNumbers[(this.fourteen_14.current.innerHTML)-1]==this.fourteen.current.getAttribute('fill')){
            this.fourteen14.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.fourteen14.current.setAttribute('href',Wrong);
         }

         if(colourNumbers[(this.fifteen_15.current.innerHTML)-1]==this.fifteen.current.getAttribute('fill')){
            this.fifteen15.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.fifteen15.current.setAttribute('href',Wrong);
         }

         if(colourNumbers[(this.sixteen_16.current.innerHTML)-1]==this.sixteen.current.getAttribute('fill')){
            this.sixteen_16.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.sixteen_16.current.setAttribute('href',Wrong);
         }

         if(colourNumbers[(this.seventeen_17.current.innerHTML)-1]==this.seventeen.current.getAttribute('fill')){
            this.seventeen17.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.seventeen17.current.setAttribute('href',Wrong);
         }

         if(colourNumbers[(this.eighteen_18.current.innerHTML)-1]==this.eighteen.current.getAttribute('fill')){
            this.eighteen18.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.eighteen18.current.setAttribute('href',Wrong);
         }

         if(colourNumbers[(this.ninteen_19.current.innerHTML)-1]==this.ninteen.current.getAttribute('fill')){
            this.ninteen19.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.ninteen19.current.setAttribute('href',Wrong);
         }

         if(colourNumbers[(this.twenty_20.current.innerHTML)-1]==this.twenty.current.getAttribute('fill')){
            this.twenty20.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.twenty20.current.setAttribute('href',Wrong);
         }

         if(colourNumbers[(this.twentyone_21.current.innerHTML)-1]==this.twentyone.current.getAttribute('fill')){
            this.twentyone21.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.twentyone21.current.setAttribute('href',Wrong);
         }

         if(colourNumbers[(this.twentytwo_22.current.innerHTML)-1]==this.twentytwo.current.getAttribute('fill')){
            this.twentytwo22.current.setAttribute('href',Tick);
         }
         else{
             check=false;
             this.twentytwo22.current.setAttribute('href',Wrong);
         }
        
        
        // console.log(colourNumbers[0])
        //   console.log(this.one_1.current.innerHTML)
        if(check){
            this.props.picture('star')
        }

      }

    changeColour=(colour,reference)=>{
        
        reference.current.setAttribute("fill",colour);
        return;
    }
    render(){
        return(
           
            <div className='game-component' > 
            <button onClick={()=>this.checkAnswer()} style={{marginLeft:'15vw',marginTop:10,marginBottom:10}}>Check</button>
                 <svg viewBox="0 0 100 100" className='svg-container'>
            <svg >
           
            <path ref={this.one} onClick={()=>this.changeColour(this.props.colour,this.one)}   stroke='black' fill='lightGrey' strokeWidth='.3' d='M0 0 v5 l20 5 l30 -10 z'   />
            <text ref={this.one_1} x="20%" y="5%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>
            {/* <image href="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" height="20" width="20" x="50%" y="90%"/>
            */}
           </svg>
            <svg >
            <path ref={this.two} onClick={()=>this.changeColour(this.props.colour,this.two)}   stroke='black' fill='lightGrey' strokeWidth='.3' d='M20 10 l-10 30 l30 10 l10 -30 z'   />
            <text ref={this.two_2} x="30%" y="30%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">2</text>
            
           </svg>
<svg>
<path  ref={this.three} onClick={()=>this.changeColour(this.props.colour,this.three)} stroke='black' fill='lightGrey' strokeWidth='.3' d='M40 50 l3 8 l8 3 l3 8 l-4 11'   />

</svg>
<svg>
<path   stroke='black' ref={this.four} onClick={()=>this.changeColour(this.props.colour,this.four)}  fill='lightGrey' strokeWidth='.3' d='M20 10 l30 10 v-20 z'   />

<text ref={this.four_4} x="40%" y="10%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  
</svg>
<svg>
<path   stroke='black' ref={this.five} onClick={()=>this.changeColour(this.props.colour,this.five)}  fill='lightGrey' strokeWidth='.3' d='M50 20 l50 -20 h-50 z'   />
<text ref={this.five_5} x="60%" y="10%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  
</svg>
<svg>
<path   stroke='black' ref={this.six} onClick={()=>this.changeColour(this.props.colour,this.six)}  fill='lightGrey' strokeWidth='.3' d='M45 59 l10 -5 l5 6.5 z'   />
<text  ref={this.six_6} x="55%" y="58%" style={{fontSize:4}}   dominantBaseline="middle" textAnchor="middle">2</text>  
</svg>
<svg>
<path   stroke='black' ref={this.seven} onClick={()=>this.changeColour(this.props.colour,this.seven)}  fill='lightGrey' strokeWidth='.3' d='M45 59 l-10 5 l5 5 z  '   />
<text  ref={this.seven_7} x="40%" y="65%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">2</text>  
</svg>
<svg>
<path   stroke='black' ref={this.eight} onClick={()=>this.changeColour(this.props.colour,this.eight)}  fill='lightGrey' strokeWidth='.3' d='M0 0 v5 l20 5  l-10 30 h-10 z '   />
<text ref={this.eight_8} x="10%" y="20%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  
</svg>
<svg>
<path   stroke='black' ref={this.nine} onClick={()=>this.changeColour(this.props.colour,this.nine)}  fill='lightGrey' strokeWidth='.3' d='M10 40 v0 20 l30 -10 z'   />
<text  ref={this.nine_9} x="25%" y="50%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  
</svg>
<svg>
<path   stroke='black' ref={this.ten} onClick={()=>this.changeColour(this.props.colour,this.ten)}  fill='lightGrey' strokeWidth='.3' d='M40 50 l3 8 l2 1 l-48 22  l10 -20 z'   />
<text ref={this.ten_10} x="25%" y="60%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  
</svg>
<svg>
<path   stroke='black'ref={this.eleven} onClick={()=>this.changeColour(this.props.colour,this.eleven)}  fill='lightGrey' strokeWidth='.3' d='M0 40 h10 v20 l-3 1 l-12 30 z'   />
<text ref={this.eleven_11} x="5%" y="50%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  
</svg>
<svg>
<path   stroke='black'ref={this.tweleve} onClick={()=>this.changeColour(this.props.colour,this.tweleve)}  fill='lightGrey' strokeWidth='.3' d='M50 20 h50 v-20 z'   />
<text ref={this.tweleve_12} x="80%" y="15%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>           
</svg>
<svg>
<path   stroke='black'ref={this.thirteen} onClick={()=>this.changeColour(this.props.colour,this.thirteen)}  fill='lightGrey' strokeWidth='.3' d='M40 50 l3 8 l2 1 l15 -5 v-34 h-10 z'   />/
<text ref={this.thirteen_13} x="53%" y="35%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  
</svg>
<svg>
<path   stroke='black'ref={this.fourteen} onClick={()=>this.changeColour(this.props.colour,this.fourteen)} fill='lightGrey' strokeWidth='.3' d='M100 20 h-40 v34 l-4 1.5 l4.5 5 z'   />
<text ref={this.fourteen_14} x="70%" y="30%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  

</svg>
<svg>
<path   stroke='black'ref={this.fifteen} onClick={()=>this.changeColour(this.props.colour,this.fifteen)}  fill='lightGrey' strokeWidth='.3' d='M60 60 h40 v-40 z'   />
<text ref={this.fifteen_15} x="90%" y="50%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  
</svg>
<svg>
<path   stroke='black'ref={this.sixteen} onClick={()=>this.changeColour(this.props.colour,this.sixteen)}  fill='lightGrey' strokeWidth='.3' d='M54 69 l10 1 l-5 5 l-5 -5'   />
<text ref={this.sixteen_16} x="59%" y="72%" style={{fontSize:4}}   dominantBaseline="middle" textAnchor="middle">2</text>  
</svg>
<svg>
<path   stroke='black'ref={this.seventeen} onClick={()=>this.changeColour(this.props.colour,this.seventeen)}  fill='lightGrey' strokeWidth='.3' d='M54 69 l-10 1 l 5 5 z'   />
<text ref={this.seventeen_17} x="49%" y="72%" style={{fontSize:4}}   dominantBaseline="middle" textAnchor="middle">2</text>  
</svg>
<svg>
<path   stroke='black'ref={this.eighteen} onClick={()=>this.changeColour(this.props.colour,this.eighteen)}  fill='lightGrey' strokeWidth='.3' d='M0 80 l35 -16 l5.5 5 l5 -10 l5.5 2 l3 8 l-10 1 l 5 5 l5 -6 l-4 11 z'   />
<text ref={this.eighteen_18} x="30%" y="75%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  
</svg>
<svg>
<path   stroke='black'ref={this.ninteen} onClick={()=>this.changeColour(this.props.colour,this.ninteen)}  fill='lightGrey' strokeWidth='.3' d='M100 60 h-52 l3 1 l3 8 l10 1 l-5 5.5 l-5 -5.4 l-4 10 h50 z'   />
<text ref={this.ninteen_19} x="80%" y="70%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  
</svg>
<svg>
<path   stroke='black'ref={this.twenty} onClick={()=>this.changeColour(this.props.colour,this.twenty)}  fill='lightGrey' strokeWidth='.3' d='M50 80 l-50 20 v-20 z'   />
<text ref={this.twenty_20} x="10%" y="90%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  
</svg>
<svg>
<path    stroke='black'ref={this.twentyone} onClick={()=>this.changeColour(this.props.colour,this.twentyone)}  fill='lightGrey' strokeWidth='.3' d='M50 80 l50 20 v-20 z'   />
<text ref={this.twentyone_21} x="75%" y="85%" style={{fontSize:5}}   dominantBaseline="middle" textAnchor="middle">1</text>  
</svg>    
                 
             
            <svg>
            <path   stroke='black'ref={this.twentytwo} onClick={()=>this.changeColour(this.props.colour,this.twentytwo)}   fill='lightGrey' strokeWidth='.3' d='M50 80 l-50 20 h100 z'   />
            <text ref={this.twentytwo_22} x="50%" y="90%" style={{fontSize:5}} dominantBaseline="middle" textAnchor="middle">1</text>
           
           </svg>
           
            <path    stroke='black'  fill='none' strokeWidth='.1' d='M20 10 l20 40'   />
           
            <path    stroke='black'  fill='none' strokeWidth='.1' d='M10 40 C 10 40 15 15 50 20 '   />
           
           
           {/* adding images */}
           
            <image ref={this.one1} href='' height="5" width="5" x="10%" y="1%"/>
           <image ref={this.two2} href=''height="5" width="5" x="33%" y="26%"/>
           <image ref={this.four4} href='' height="5" width="5" x="33%" y="7%"/>
           <image ref={this.five5} href='' height="5" width="5" x="52%" y="7%"/>
           <image ref={this.six6} href='' height="3" width="3" x="52%" y="57%"/>
           <image ref={this.seven7} href='' height="3" width="3" x="38%" y="62%"/>
           <image ref={this.eight8} href='' height="5" width="5" x="3%" y="16%"/>
           <image ref={this.nine9} href=''height="5" width="5" x="18%" y="45%"/>
           <image ref={this.ten10} href='' height="5" width="5" x="18%" y="60%"/>
           <image ref={this.eleven11} href='' height="4" width="4" x="5%" y="50%"/>
           <image ref={this.tweleve12} href='' height="5" width="5" x="90%" y="10%"/>
           <image ref={this.thirteen13} href='' height="5" width="5" x="50%" y="26%"/>
           <image ref={this.fourteen14} href='' height="5" width="5" x="73%" y="28%"/>
           <image ref={this.fifteen15} href='' height="5" width="5" x="80%" y="45%"/>
           <image ref={this.sixteen16} href='' height="3" width="3" x="60%" y="70%"/>
           <image ref={this.seventeen17} href='' height="3" width="3" x="50%" y="70%"/>
           <image ref={this.eighteen18} href='' height="5" width="5" x="20%" y="72%"/>
           <image ref={this.ninteen19} href='' height="5" width="5" x="80%" y="62%"/>
           <image ref={this.twenty20} href='' height="5" width="5" x="3%" y="85%"/>
           <image ref={this.twentyone21} href='' height="5" width="5" x="80%" y="85%"/>
           <image ref={this.twentytwo22} href='' height="5" width="5" x="52%" y="86%"/>
           
                 </svg>
                 
                 <OptionComponent/>
            </div>
            
            
        )
    }
}

export default KiteComponent;