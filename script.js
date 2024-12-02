let headingOne=document.querySelector(".headingOne")
let inputOne=document.querySelector(".inputOne")
let btnOne=document.querySelector(".btnOne")
let error=document.querySelector(".error")

let headingTwo=document.querySelector(".headingTwo")
let Chance=document.querySelector(".Chance")
let inputTwo=document.querySelector(".inputTwo")
let btnTwo=document.querySelector(".btnTwo")
let error2=document.querySelector(".error2")
let  count=5


        
 
  btnOne.addEventListener("click", function(){
 if(!inputOne.value){
 error.innerHTML="please enter something" 
 }else if(isNaN(inputOne.value)){
  error.innerHTML="please inter number"
 }else if(!(inputOne.value<=10 && inputOne.value>0)){
  error.innerHTML="please enter number 1 to 10"
 }else{
  headingTwo.style.display="block"
  Chance.style.display="block"
  inputTwo.style.display="inline-block"
  btnTwo.style.display="inline-block"
  error2.style.display="block"
  Chance.innerHTML=`Chance: ${count}`


  headingOne.style.display="none"
  inputOne.style.display="none"
  btnOne.style.display="none"
  error.style.display="none"
 }
 
 
  })  
    
  btnTwo.addEventListener("click", function(){
    if(!inputTwo.value){
      error2.innerHTML="please enter something"
    }else if(isNaN(inputTwo.value)){
       error2.innerHTML="please inter number"
    }else if(!(inputTwo.value<=10 && inputTwo.value>0)){
     error2.innerHTML="please enter number 1 to 10"
    } else{
  
      if(count>1){
        count--
        Chance.innerHTML=`Chance: ${count}`
       if (inputOne.value==inputTwo.value){
        headingTwo.innerHTML="player two winner"
           error2.innerHTML=''
        btnTwo.style.display="none"
        
       }
       
      }else{
        count=0
        Chance.innerHTML=`Chance: ${count}`
        headingTwo.innerHTML="player one winner"
         btnTwo.style.display='none'
        error2.innerHTML=''
     
       
        
      }

    } 
  })
