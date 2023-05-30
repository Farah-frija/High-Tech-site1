///placeholder
function focusmail(){
    this.placeholder="une adresse mail ou un num de telephone";
   
}
function focusmdp()
{
    this.placeholder="doit contenir des lettres et des chiffres ";
    
}
mail=document.getElementById("mail").addEventListener("focus",focusmail);
mdp=document.getElementById("mdp").addEventListener("focus",focusmdp);
//refuser

function value(event)
    {console.log(event);
    
    const inputs = document.querySelectorAll('input:not([type="submit"])');
    test=1;
    for(i=0;i<inputs.length;i++)
     { 
        if(inputs[i].value.length< 2 )
     {if(inputs[i].nextElementSibling.tagName.toLowerCase() != 'p')
         {par= document.createElement("p");
         par.textContent="veuillez remplir ce champ"
         par.style.cssText="color:red; opacity:1 ; font-size:0.76rem;padding:0;margin:0"
         inputs[i].after(par);
        }
      test=0;
     }
     else if(inputs[i].value.length>= 2 && inputs[i].nextElementSibling.tagName.toLowerCase() === 'p')
     {
        inputs[i].nextElementSibling.remove();
     }
    }

 if(!test)
 event.preventDefault();
else
 {  event.preventDefault();
  window.location.href="baha.html";
 

}
}
const forms = document.querySelectorAll("form");
 forms[0].addEventListener("submit", value);
  //si je clique quelque part d'autre
  const form = document.querySelector('form');
 // Add event listener to document
 const htmlElement = document.documentElement;
 console.log(htmlElement.querySelector("title").text);
 document.addEventListener('click', function(event) {
   // If the click event target is not part of the form
   title=document.documentElement.querySelector("title").text
   
   if (!form.contains(event.target)) 
    confirmMsg=confirm("voulez vous quitter la page actuelle?");
   if(confirmMsg)
    window.history.back();

}
   
 ); 
 

