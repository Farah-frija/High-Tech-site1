var myButton = document.getElementById("game")

// Add a click event listener to the button
myButton.addEventListener("click", function() {
  // Redirect to the target page with the desired size
 
  window.location.href="avatarfarah.html";
});

////////avatar Baha/////////
var myButton2 = document.getElementById("inno")

// Add a click event listener to the button
myButton2.addEventListener("click", function() {
  // Redirect to the target page with the desired size
 
  window.location.href="avatarbaha.html";
});
var myButton1 = document.getElementById("eya")

// Add a click event listener to the button
myButton1.addEventListener("click", function() {
  // Redirect to the target page with the desired size
 
  window.location.href="avatareya.html";
});
var myButton3 = document.getElementById("aymen")
// Add a click event listener to the button
myButton3.addEventListener("click", function() {
  // Redirect to the target page with the desired size
 
  window.location.href="avatarchouchou.html";
});

/////hover effect 
avatars=document.querySelectorAll(".partie");
avatars.forEach(element => {

    element.addEventListener("mouseenter",function(){
          element.classList.add("hover");
         
    })
    element.addEventListener("mouseleave",function(){
        element.classList.remove("hover");
    
  })
    
});