var display=document.getElementById("output-value");
var historyDisplay=document.getElementById("history-value")



function keyCode(keypress){
    var text=display.textContent.trim();
    var value;
    if(keypress===43){
        operand1=parseFloat(text);
        
        historyDisplay.textContent=operand1+"+";
        display.textContent="";
        return operator='+';
      
  }
 
  
  else if(keypress===49){
          
          display.textContent +="1";
document.getElementById("1").classList.add("animate");
document.getElementById("2").classList.remove("animate");
document.getElementById("3").classList.remove("animate");
document.getElementById("4").classList.remove("animate");
document.getElementById("5").classList.remove("animate");
document.getElementById("6").classList.remove("animate");
document.getElementById("7").classList.remove("animate");
document.getElementById("8").classList.remove("animate");
document.getElementById("9").classList.remove("animate");
document.getElementById("0").classList.remove("animate");

          
      }
    
  else if(keypress===50){
         
          display.textContent +="2";
          document.getElementById("2").classList.add("animate");
          document.getElementById("1").classList.remove("animate");
          document.getElementById("3").classList.remove("animate");
document.getElementById("4").classList.remove("animate");
document.getElementById("5").classList.remove("animate");
document.getElementById("6").classList.remove("animate");
document.getElementById("7").classList.remove("animate");
document.getElementById("8").classList.remove("animate");
document.getElementById("9").classList.remove("animate");
document.getElementById("0").classList.remove("animate");
      }
  else  if(keypress===51){
          display.textContent +="3";
          document.getElementById("3").classList.add("animate");
          document.getElementById("2").classList.remove("animate");
document.getElementById("1").classList.remove("animate");
document.getElementById("4").classList.remove("animate");
document.getElementById("5").classList.remove("animate");
document.getElementById("6").classList.remove("animate");
document.getElementById("7").classList.remove("animate");
document.getElementById("8").classList.remove("animate");
document.getElementById("9").classList.remove("animate");
document.getElementById("0").classList.remove("animate");

        
      }
  
  else   if(keypress===52){
          display.textContent +="4";
          document.getElementById("4").classList.add("animate");
document.getElementById("2").classList.remove("animate");
document.getElementById("3").classList.remove("animate");
document.getElementById("1").classList.remove("animate");
document.getElementById("5").classList.remove("animate");
document.getElementById("6").classList.remove("animate");
document.getElementById("7").classList.remove("animate");
document.getElementById("8").classList.remove("animate");
document.getElementById("9").classList.remove("animate");
document.getElementById("0").classList.remove("animate");
      }
  
  else  if(keypress===53){
          display.textContent +="5";
          document.getElementById("5").classList.add("animate");
document.getElementById("2").classList.remove("animate");
document.getElementById("3").classList.remove("animate");
document.getElementById("4").classList.remove("animate");
document.getElementById("1").classList.remove("animate");
document.getElementById("6").classList.remove("animate");
document.getElementById("7").classList.remove("animate");
document.getElementById("8").classList.remove("animate");
document.getElementById("9").classList.remove("animate");
document.getElementById("0").classList.remove("animate");
      }
  else  if(keypress===54){
          display.textContent +="6";
          document.getElementById("6").classList.add("animate");
document.getElementById("2").classList.remove("animate");
document.getElementById("3").classList.remove("animate");
document.getElementById("4").classList.remove("animate");
document.getElementById("5").classList.remove("animate");
document.getElementById("1").classList.remove("animate");
document.getElementById("7").classList.remove("animate");
document.getElementById("8").classList.remove("animate");
document.getElementById("9").classList.remove("animate");
document.getElementById("0").classList.remove("animate");
      }
  else  if(keypress===55){
          display.textContent +="7";
          document.getElementById("7").classList.add("animate");
document.getElementById("2").classList.remove("animate");
document.getElementById("3").classList.remove("animate");
document.getElementById("4").classList.remove("animate");
document.getElementById("5").classList.remove("animate");
document.getElementById("6").classList.remove("animate");
document.getElementById("1").classList.remove("animate");
document.getElementById("8").classList.remove("animate");
document.getElementById("9").classList.remove("animate");
document.getElementById("0").classList.remove("animate");
      }
  else if(keypress===56){
          display.textContent +="8";
          document.getElementById("8").classList.add("animate");
document.getElementById("2").classList.remove("animate");
document.getElementById("3").classList.remove("animate");
document.getElementById("4").classList.remove("animate");
document.getElementById("5").classList.remove("animate");
document.getElementById("6").classList.remove("animate");
document.getElementById("7").classList.remove("animate");
document.getElementById("1").classList.remove("animate");
document.getElementById("9").classList.remove("animate");
document.getElementById("0").classList.remove("animate");
      }
  else if(keypress===57){
          display.textContent +="9";
          document.getElementById("9").classList.add("animate");
document.getElementById("2").classList.remove("animate");
document.getElementById("3").classList.remove("animate");
document.getElementById("4").classList.remove("animate");
document.getElementById("5").classList.remove("animate");
document.getElementById("6").classList.remove("animate");
document.getElementById("7").classList.remove("animate");
document.getElementById("8").classList.remove("animate");
document.getElementById("1").classList.remove("animate");
document.getElementById("0").classList.remove("animate");
      }
  else if(keypress===48){
          display.textContent +="0";
          document.getElementById("0").classList.add("animate");
document.getElementById("2").classList.remove("animate");
document.getElementById("3").classList.remove("animate");
document.getElementById("4").classList.remove("animate");
document.getElementById("5").classList.remove("animate");
document.getElementById("6").classList.remove("animate");
document.getElementById("7").classList.remove("animate");
document.getElementById("8").classList.remove("animate");
document.getElementById("9").classList.remove("animate");
document.getElementById("1").classList.remove("animate");
      }
      else if(keypress===46){
        display.textContent +=".";
    }
  else if(keypress===45){
      operand1=parseFloat(text);
          
          historyDisplay.textContent=operand1+"-";
          display.textContent="";
         return operator="-";
      }
  else if(keypress===47){
      operand1=parseFloat(text);
      
      historyDisplay.textContent=operand1+"/";
      display.textContent="";
     return operator="/";
  }
  else if(keypress===42){
      operand1=parseFloat(text);
      
      historyDisplay.textContent=operand1+"*";
      display.textContent="";
     return operator="*";
  }
  else if(keypress===37){
    operand1=parseFloat(text)/100;
    
    historyDisplay.textContent=operand1;
    display.textContent="";
   return operator="*";
  }
  else if(keypress===61){
    document.getElementById("0").classList.remove("animate");
    document.getElementById("2").classList.remove("animate");
    document.getElementById("3").classList.remove("animate");
    document.getElementById("4").classList.remove("animate");
    document.getElementById("5").classList.remove("animate");
    document.getElementById("6").classList.remove("animate");
    document.getElementById("7").classList.remove("animate");
    document.getElementById("8").classList.remove("animate");
    document.getElementById("9").classList.remove("animate");
    document.getElementById("1").classList.remove("animate");
    operand2=parseFloat(text);
    
    var output=eval(operand1+' ' + operator+ ' ' +operand2)
    if(isNaN(operand2)){
        display.textContent=operand1;
    }else{
  display.textContent=output;
    historyDisplay.textContent="";
    }
 }


  }
  




window.addEventListener("keypress",function(event){
    keyCode(event.keyCode);
});

window.addEventListener("keydown",function(event){
    if (event.keyCode == 8) {
        console.log('BACKSPACE was pressed');
        var 
        output=reverseNum(getOutput()).toString();
        if(output){
            output=output.substr(0,output.length-1);
            printOutput(output);
        }
       
}
else if(event.keyCode==27){
    display.textContent="";
    historyDisplay.textContent="";
    document.getElementById("0").classList.remove("animate");
    document.getElementById("2").classList.remove("animate");
    document.getElementById("3").classList.remove("animate");
    document.getElementById("4").classList.remove("animate");
    document.getElementById("5").classList.remove("animate");
    document.getElementById("6").classList.remove("animate");
    document.getElementById("7").classList.remove("animate");
    document.getElementById("8").classList.remove("animate");
    document.getElementById("9").classList.remove("animate");
    document.getElementById("1").classList.remove("animate");
}

});

if(output==NaN){
    display.textContent="";
    historyDisplay="operand1";
}
