///placeholder
function focusmail(){
    this.placeholder="une adresse mail ou un num de telephone";
    console.log(this)
}
function focusmdp()
{
    this.placeholder="doit contenir des lettres et des chiffres ";
    console.log(this)
}
function focustel()
{
    document.getElementById("tel").placeholder="+216 ";
  
}
function focusnom(){
    document.getElementById("nom").placeholder="ne dépasse pas 10 caractéres ";
}
function focusprenom(){
    document.getElementById("prenom").placeholder="ne dépasse pas 10 caractéres ";
}
mail=document.getElementById("tel").addEventListener("focus",focustel);
 mail=document.getElementById("mail").addEventListener("focus",focusmail);
 mdp=document.getElementById("mdp").addEventListener("focus",focusmdp);
 prenom=document.getElementById("prenom").addEventListener("focus",focusprenom);
 nom=document.getElementById("nom").addEventListener("focus",focusnom);
//tel=document.getElementById("tel").addEventListener("focus",focustel);
///refuser
function value(event)
{
const inputs = document.querySelectorAll('input:not([type="checkbox"]):not([type="submit"])');
 console.log(inputs[0]);
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
if(!document.querySelector("input[type='checkbox']").checked && document.querySelector("label[for='accepte']").nextElementSibling.tagName.toLowerCase() !="p")
     {par= document.createElement("p");
     par.textContent="il faut accepter les conditions"
     par.style.cssText="color:red; opacity:1 ; font-size:smaller;padding:0;margin:3px"
     document.querySelector("label[for='accepte']").after(par);
    console.log(par);}
else if( document.querySelector("input[type='checkbox']").checked && document.querySelector("label[for='accepte']").nextElementSibling.tagName.toLowerCase() ==="p" )
       {document.querySelector("label[for='accepte']").nextElementSibling.remove();
}
 test1=document.querySelector("input[type='checkbox']").checked;
 if(!(test && test1))
 event.preventDefault();
else
 {  event.preventDefault();
  window.location.href="baha.html";
 

}}
const forms = document.querySelectorAll("form");

  forms[0].addEventListener("submit", value);

  window.onload=function(){
    document.querySelector("#prenom").focus();      
 }
  //si je clique quelque part d'autre
  const form = document.querySelector('form');

  // Add event listener to document
  a=this;
  console.log(this);
  document.addEventListener('click', function(event) {
    // If the click event target is not part of the form
    if (!form.contains(event.target)) {
      let confirmMsg=confirm("voulez vous revenir à la page précédente?");
      if(confirmMsg) 
      window.history.back();
    }
  }); 

logo=document.querySelector("img[src='logo23.png']");
console.log(logo);
logo.addEventListener("click",function(event)
{
    let confirmMsg=confirm("voulez vous revenir à la page d'accueil?");
         if(!confirmMsg)
         event.preventDefault();   
})