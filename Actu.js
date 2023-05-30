const seeLess = document.querySelectorAll('#moins');
const seeMoreButton = document.querySelectorAll('#plus');
const article=document.querySelectorAll(".article");
const contenu = document.querySelectorAll('.contenu');
 const image=document.querySelectorAll(".img");
 const titres=document.querySelectorAll(".titre");
let  img = document.createElement("img");

// add click event listener to "see more" button
 seeMoreButton.forEach((more, i) => {
      // Add a hover event listener
more.addEventListener('mouseenter', () => {
  // Change the cursor to a pointer
  more.style.cursor = 'pointer';
})
// Remove the cursor style when the mouse leaves the elemen
more.addEventListener('mouseleave', () => {
  // Remove the cursor style
  more.style.cursor = '';
});
//afficher plus
 more.addEventListener('click', () => {
        f1(i);
      });
    });
//if you click on images
    image.forEach((more, i) => {
// Add a hover event listener
more.addEventListener('mouseenter', () => {
  // Change the cursor to a pointer
  more.style.cursor = 'pointer';
});

// Remove the cursor style when the mouse leaves the element
more.addEventListener('mouseleave', () => {
  // Remove the cursor style
  more.style.cursor = '';
});
      more.addEventListener('click', () => {
        f1(i);
      });
    });
    titres.forEach((more, i) => {
      

// Add a hover event listener
more.addEventListener('mouseenter', () => {
  // Change the cursor to a pointer
  more.style.cursor = 'pointer';
});

// Remove the cursor style when the mouse leaves the element
more.addEventListener('mouseleave', () => {
  // Remove the cursor style
  more.style.cursor = '';
});
      more.addEventListener('click', () => {
        f1(i);
      });
    });

function f1(i){
 console.log(contenu[i].children);
    div = contenu[i].children[3];
 div1=contenu[i].children[2];
div2=contenu[i].children[4];
 div3=contenu[i].children[5];
article[i].classList.add('expanded');
div.classList.remove('none');
div1.classList.remove('none');
div2.classList.remove('none');
div3.classList.remove('none');
div2.children[0].classList.remove('none');
seeMoreButton[i].classList.add("none");
img = image[i].cloneNode(true);
console.log(img);
image[i].style.display = "none";

if(img.id==="vid")
{img.controls=true;
img.style.width="1000px";
}
else{
img.style.removeProperty("width"); // Supprime la propriété 'width' de l'élément image
img.style.removeProperty("height");}
img.style.display="block";
contenu[i].insertBefore(img,contenu[i].children[1]);


}

// add click event listener to "see less" button
seeLess.forEach((less, i) => { less.addEventListener('mouseenter', () => {
  // Change the cursor to a pointer
  less.style.cursor = 'pointer';
})
// Remove the cursor style when the mouse leaves the elemen
less.addEventListener('mouseleave', () => {
  // Remove the cursor style
 less.style.cursor = '';
});
  less.addEventListener('click', () => {
  f2(i)});});
// la fonction f2:
function f2(i){
 console.log(contenu[i].children);
 contenu[i].children[1].remove();
  div = contenu[i].children[3];
div1=contenu[i].children[2];
div2=contenu[i].children[4];
div3=contenu[i].children[5];
article[i].classList.remove('expanded');
div.classList.add('none');
div1.classList.add('none');
div2.classList.add('none');
div3.classList.add('none');
seeMoreButton[i].classList.remove("none");
seeLess[i].classList.add("none");


image[i].style.display = "block";

//supprimer les images



}

//effet hover
article.forEach(element => {

  element.addEventListener("mouseenter",function(){
       
        element.style.background="rgb(0,0,0,0.91)";
       
       
  })
  element.addEventListener("mouseleave",function(){
      
      element.style.background="black";
  
  
})
  
});












