wheel = document.querySelector(".box1");
spinBtn = document.querySelector(".spin");
bouton=document.querySelector(".button");
console.log(bouton);
inp=document.querySelector(".roue input");
let par= document.createElement("p");
par.style.cssText="color:white; opacity:1 ; font-size:1.25rem;margin-left:9%;margin:4px;font-weight:bold;"
bouton.after(par);
let value = 0;
let deg = 0;
let chiffre=0;
let i=0;
let canSpin = true;
let over=false;

spinBtn.addEventListener("click", spinWheel);

function spinWheel(event) {
if(! over)
  {if(inp.value == "") {
    canSpin = false;
    if(inp.nextElementSibling.tagName.toLowerCase() != 'p') {
     let par1 = document.createElement("p");
      par1.textContent = "Entrez un Nombre avant de tourner la roue"
      par1.style.cssText = "color:red; opacity:1 ; font-size:1rem;margin-left:10%;margin:0 ;"
      inp.after(par1);
      event.preventDefault();
      
    }
  
  } else if(inp.value != "" && inp.nextElementSibling.tagName.toLowerCase() == 'p') {
    inp.nextElementSibling.remove();
    canSpin = true;
  }
  else if(inp.value != "")
  canSpin = true;


  if(canSpin) {i++;
    console.log(i);
    deg = Math.ceil(Math.random() * 360 * 10);
    console.log("le degre apres le random"+deg%360);
    deg = deg + value;
  
    wheel.style.transition = "all 5s ease-out";
  
    wheel.style.transform = "rotate(" + deg + "deg)";
    spinBtn.disabled = true;
  }
}
}

wheel.addEventListener("transitionend", () => {
  canSpin = true;
  spinBtn.disabled = false;
  // Calculate the value of the number the wheel stopped on
  actualDeg = (deg) % 360;
  console.log(actualDeg);
  result = (Math.floor((actualDeg)/22.5));
  console.log(result);
  result = result % 15;
  console.log(result);
 

  switch (result) {
    case 1:
      chiffre = 100;
      break;
    case 2:
        chiffre = 100;
      break;
    case 3:
        chiffre = 50;
      break;
    case 4:
        chiffre = 50;
        break;
        case 5:
            chiffre = 70;
            break;
          case 6:
              chiffre = 70;
            break;
          case 7:
              chiffre = 250;
            break;
          case 8:
              chiffre = 250;
              break;
        case 9:
        chiffre = 10;
        break;
        case 10:
        chiffre = 10;
        break;
        case 11:
        chiffre = 150;
        break;
        case 12:
        chiffre = 150;
        break;
        case 13:
        chiffre = 210;
        break;
        case 14:
            chiffre = 210;
            break;
          
            
        case 0:
            chiffre = 350;
            break;
    default:
      break;}
      console.log(chiffre);
      wheel.style.transition = "none";
      value = actualDeg;
      console.log( document.querySelector("label[for='nombre']"));

    if(chiffre==inp.value)
    {par.style.fontsize="4rem";
    par.innerHTML = "Bravo " + chiffre + "D!<br><span style='color:gray; opacity:1 ; font-size:0.9rem;margin-left:10%;margin:0;'> Félicitations,un Code promo est envoyé par mail</span>";
      over = true;
    }
    else{
      if(i==1)
      {inp.value="";
      
      par.textContent="Il vous reste encore Deux CHANCES ! "
      console.log( par.textContent);
     }
      else if(i==2)
      {  
        par.textContent="Encore UNE CHANCE ! "
      }
      else if(i==3)
      { par.textContent="Dommage ! A la prochaine fois! "
        par.style.color="red";
      console.log( par.textContent);
      }

    }

 

});
  // Reset the wheel to its initial position
 /* */
       
// le bouton

bouton.addEventListener("click",deviner);
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    
    deviner();
    event.preventDefault()
  }
});
function deviner(){
  if(!over)

    {if(inp.value=="")
     {if(inp.nextElementSibling.tagName.toLowerCase() != 'p')
    {let par1= document.createElement("p");
    par1.textContent="Entrez un Nombre "
    par1.style.cssText="color:red; opacity:1 ; font-size:1rem;margin-left:10%;margin:0 "
    inp.after(par1);
   }
  }
     else
     { 
    
      if(i==0)
    {par.textContent="Vas-y ! premiére CHANCE ! "
    console.log(bouton.nextElementSibling);
  } 
     if(i==1)
     par.textContent="Vas-y ! deuxiéme CHANCE ! "
     if(i==2)
     par.textContent="Vas-y ! DERNIERE CHANCE ! "
   
      if(inp.nextElementSibling.tagName.toLowerCase() == 'p' )
     inp.nextElementSibling.remove();
       
     }}}
         

//////////////////////////

