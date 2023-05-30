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

 prenom=document.getElementById("prenom").addEventListener("focus",focusprenom);

//tel=document.getElementById("tel").addEventListener("focus",focustel);
///refuser
function value(event)
{
    const inputs = document.querySelectorAll('input:not([type="checkbox"]):not([type="submit"])');
 console.log(inputs);
 test=1;


 for(i=0;i<inputs.length;i++)
 { 
    if(inputs[i].value.length==0 )
 {if(inputs[i].nextElementSibling.tagName.toLowerCase() != 'p')
     {par= document.createElement("p");
     par.textContent="veuillez remplir ce champ"
     par.style.cssText="color:red; opacity:1 ; font-size:0.76rem;padding:0;margin:0"
     inputs[i].after(par); 
    }
  test=0;
 }
 else if( inputs[i].nextElementSibling.tagName.toLowerCase() === 'p')
 {
    inputs[i].nextElementSibling.remove();
 }
}

 if(!(test))
 event.preventDefault();


}
const forms = document.querySelector("form");

  forms.addEventListener("submit", value);

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
      // Do something here, like close a modal or reset the form
   
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